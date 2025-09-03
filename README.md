# Confidential Identity Verification — Privacy-Preserving KYC with FHEVM

Confidential Identity Verification is a privacy-preserving KYC module built with Zama’s Fully Homomorphic Encryption Virtual Machine (FHEVM).  
It allows users to prove compliance (e.g., age, nationality, KYC approval) **without revealing sensitive data on-chain**.  
This project demonstrates how encrypted verification flags can be stored and checked securely while remaining fully EVM compatible.

## ✨ Features
- 🔒 Encrypted KYC Flags — user data such as `isOver18` or `isKYCApproved` stored as encrypted booleans (`ebool`).  
- ✅ Fail-Closed Verification — if a proof is invalid, status defaults to `unverified`.  
- 🔗 Composable — other dApps (DEX, NFT marketplaces, DAOs, lending pools) can integrate for compliance.  
- ⚡ EVM Compatible — works with Solidity + Hardhat.  
- 🧪 Test Coverage — TypeScript tests for encrypted proof submission & verification checks.  

## 📂 Project Structure
confidential-identity/  
│── contracts/  
│   └── ConfidentialIdentity.sol  
│── test/  
│   └── ConfidentialIdentity.spec.ts  
│── hardhat.config.ts  
│── package.json  
│── .gitignore  
│── LICENSE  
│── README.md  

## 🚀 Getting Started

### 1. Install dependencies  
npm install  

### 2. Compile contracts  
npx hardhat compile  

### 3. Run tests  
npx hardhat test  

## 🔮 Use Cases
- DeFi platforms requiring age verification or KYC gating.  
- NFT Marketplaces enforcing jurisdictional rules.  
- DAOs with private voting rights based on KYC flags.  
- Regulated stablecoin or RWA platforms needing compliance checks.  

## 📝 License
This project is licensed under the MIT License.  
MIT © 2025 CabinBranis
