import { ConfidentialIdentity, ConfidentialIdentity__factory } from "../types";
import { FhevmType } from "@fhevm/hardhat-plugin";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, fhevm } from "hardhat";

type Signers = {
  deployer: HardhatEthersSigner;
  alice: HardhatEthersSigner;
};

async function deployFixture() {
  const factory = (await ethers.getContractFactory("ConfidentialIdentity")) as ConfidentialIdentity__factory;
  const identityContract = (await factory.deploy()) as ConfidentialIdentity;
  const identityContractAddress = await identityContract.getAddress();
  return { identityContract, identityContractAddress };
}

describe("ConfidentialIdentity", function () {
  let signers: Signers;
  let identityContract: ConfidentialIdentity;
  let identityContractAddress: string;

  before(async function () {
    const ethSigners: HardhatEthersSigner[] = await ethers.getSigners();
    signers = { deployer: ethSigners[0], alice: ethSigners[1] };
  });

  beforeEach(async () => {
    ({ identityContract, identityContractAddress } = await deployFixture());
  });

  it("should allow Alice to submit encrypted verification", async function () {
    const encryptedTrue = await fhevm
      .createEncryptedInput(identityContractAddress, signers.alice.address)
      .addBool(true)
      .encrypt();

    const tx = await identityContract
      .connect(signers.alice)
      .submitVerification(encryptedTrue.handles[0], encryptedTrue.inputProof);
    await tx.wait();

    const encryptedStatus = await identityContract.getVerificationStatus(signers.alice.address);

    const clearStatus = await fhevm.userDecryptEuint(
      FhevmType.ebool,
      encryptedStatus,
      identityContractAddress,
      signers.alice,
    );

    expect(clearStatus).to.eq(true);
  });
});
