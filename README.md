# Confidential Identity Verification — Privacy-Preserving KYC with FHEVM

Confidential Identity Verification is a privacy-preserving KYC module built with Zama’s **Fully Homomorphic Encryption Virtual Machine (FHEVM)**.  
It allows users to prove compliance (e.g., age, nationality, KYC approval) **without revealing sensitive data** on-chain.

---

## ✨ Features
- 🔒 **Encrypted KYC Flags** — user data such as `isOver18` or `isKYCApproved` stored as encrypted booleans (`ebool`).  
- ✅ **Fail-Closed Verification** — if a proof is invalid, status defaults to *unverified*.  
- 🔗 **Composable** — other dApps (DEX, NFT marketplaces, DAOs, lending pools) can integrate for compliance.  
- ⚡ **EVM Compatible** — works with Solidity + Hardhat.  
- 🧪 **Test Coverage** — TypeScript tests for encrypted proof submission & verification checks.

---

## 📂 Project Structure
