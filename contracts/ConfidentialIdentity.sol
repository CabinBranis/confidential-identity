// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { FHE, ebool, externalEbool } from "@fhevm/solidity/lib/FHE.sol";
import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title Confidential Identity Verification
/// @notice Privacy-preserving KYC module with encrypted verification flags
contract ConfidentialIdentity is SepoliaConfig {
    mapping(address => ebool) private _isVerified;

    /// @notice Submit encrypted KYC verification (true/false)
    function submitVerification(externalEbool encryptedFlag, bytes calldata inputProof) external {
        ebool verified = FHE.fromExternal(encryptedFlag, inputProof);
        _isVerified[msg.sender] = verified;

        // Allow contract and user to access their own flag
        FHE.allowThis(_isVerified[msg.sender]);
        FHE.allow(_isVerified[msg.sender], msg.sender);
    }

    /// @notice Get encrypted verification flag
    function getVerificationStatus(address user) external view returns (ebool) {
        return _isVerified[user];
    }
}
