---
title: Decentralized Insurance DApp
type: project
status: completed
tags: [web3, ethereum, blockchain, smart-contracts]
last_updated: 2026-04-30
---

# Decentralized Insurance DApp

## Summary

An Ethereum-based decentralized application (DApp) that automates insurance claim processing via smart contracts. Users interact through MetaMask for wallet authentication and transaction signing. No central insurer — claim logic runs on-chain.

## Purpose

Traditional insurance claims go through a centralized authority (the insurer) that controls approval. This DApp replaces that with on-chain logic: a smart contract holds the rules, evaluates conditions, and processes payouts automatically — transparent, tamper-resistant, and without an intermediary.

## Platform & Tech Stack

| Layer | Technology |
|-------|-----------|
| **Blockchain** | Ethereum |
| **Smart Contracts** | Solidity |
| **Contract Dev/Deploy** | Truffle Suite |
| **Frontend Web3 Bridge** | Web3.js |
| **Wallet Auth** | MetaMask |
| **Language** | JavaScript |

## How It Works

1. User connects MetaMask wallet to the DApp
2. Policy terms are encoded and stored in the smart contract
3. User submits a claim transaction — signed via MetaMask
4. Smart contract evaluates the claim against the encoded conditions
5. If conditions are met, payout is executed on-chain automatically

## Links

- **Live Demo:** [insurance.lingadevaru.in](https://insurance.lingadevaru.in)
- **GitHub:** [github.com/lingadevaru-hp/insurance-dapp](https://github.com/lingadevaru-hp/insurance-dapp) — 1 star, JavaScript

## Related Pages

- [[profile/about]] — Ethereum and Web3.js listed under technical skills
- [[projects/foss-coin]] — Another Web3 project (Solana)
- [[work-college-internship]] — Hackathons and Web3 context
- [[profile/projects]] — All projects overview
