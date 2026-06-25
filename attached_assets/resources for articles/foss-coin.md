---
title: FOSS Coin ($FOSS)
type: project
status: completed
tags: [web3, solana, blockchain, defi]
last_updated: 2026-04-30
---

# FOSS Coin ($FOSS)

## Status
**Completed** — Live on Solana mainnet, listed on Orca Whirlpool DEX.

## Summary
An SPL token on Solana Mainnet built to symbolise support for the Free and Open Source Software movement. Mint authority was permanently revoked at creation — the 1B fixed supply can never be inflated. Listed live on the Orca Whirlpool DEX.

Not affiliated with FSF, GNU, or Linux.org. Built as a personal technical project to learn Solana at the instruction level.

## Philosophy

The FOSS movement holds that software should be free: free to run, study, modify, and share. Blockchain shares the same core values — open, permissionless, and transparent. This token was built to route symbolic value to that intersection.

> *FOSS Coin is a community-created token built to support and promote Free and Open Source Software. It can be used to donate to FOSS projects, reward developers and contributors, and raise awareness about digital privacy, Linux, and open technologies.*

## Token Specifications

| Property              | Value                                          |
| --------------------- | ---------------------------------------------- |
| **Full Name**         | Free Open Source Soft                          |
| **Symbol**            | $FOSS                                          |
| **Network**           | Solana Mainnet                                 |
| **Mint Address**      | `64AcKtFgExrtJWPJVr6U4iQrJ1VpiUvDHvRtdMHAcoin` |
| **Token Standard**    | SPL Token (Legacy Token Program)               |
| **Token Program**     | `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA`  |
| **Decimals**          | 6                                              |
| **Total Supply**      | 1,000,000,000 (1B — fixed, immutable)          |
| **Mint Authority**    | `null` — revoked permanently at creation       |
| **Freeze Authority**  | `null` — revoked                               |
| **Metadata Standard** | Metaplex Token Metadata v3 → IPFS JSON         |
| **DEX**               | Orca Whirlpool (FOSS/SOL pair)                 |
| **Pool Address**      | `3Ub4ojhVSiMZtmrS8bHSEiMo9oqzauTyYtd3HjFbZnE2` |

## Creation Timeline

### Phase 1 — Token Deployed (July 23, 2025)
**Slot:** 355,223,383 · **Time:** 07:43:36 UTC  
**TX:** `VQT5gJrktGkJNuSChKwnfQNeni4ULDLfgHV4bfspBTsZj44v6Wxqc6nGCZze7Mg66atQEmzuVf5MgyUBC9iGroN`

The entire token was launched in **one atomic transaction — 7 instructions**:

| Step | Instruction | Detail |
|------|-------------|--------|
| 1 | Allocate mint account | Reserve on-chain account |
| 2 | `InitializeMint2` | Set 6 decimals |
| 3 | Metaplex metadata v3 | Register name, symbol, IPFS URI on-chain |
| 4 | Create ATA | Create Associated Token Account for creator |
| 5 | `MintTo` | Mint 1,000,000,000 FOSS to ATA |
| 6 | `SetAuthority` → `null` | Revoke mint authority permanently |
| 7 | Launchpad Buy | Buy 35,765 FOSS via launchpad |

All 7 steps executed atomically — if any had failed, the entire transaction would have rolled back with no partial state.

### Phase 2 — Orca Whirlpool Listing (October 21, 2025)
**Slot:** 374,850,194

- Concentrated liquidity AMM pool created (FOSS/SOL pair)
- Liquidity added 19 seconds after pool creation: **2.9 FOSS + 0.0004 SOL**
- Position NFT minted under Token-2022 standard: `8RVfhVxFGUo5uJKcMZQUu6MD7FhLH8v8WFRaxsT3doxY`
- Creator holds the LP position NFT

### Phase 3 — Community Airdrops (January 18, 2026)
- `TransferChecked` instructions used for precision transfers
- $FOSS distributed to external wallets

## Supply Distribution

| Holder | Amount | Percentage |
|--------|--------|------------|
| Orca Whirlpool vault | ~999,964,235 FOSS | ~99.9964% |
| Creator wallet | ~35,765 FOSS | ~0.0036% |

## Known Limitations

- **Extremely low liquidity** — only ~0.0004 SOL in pool at launch
- **Not listed on Jupiter** aggregator — not discoverable via standard DEX routing
- **No on-chain utility** — no staking, governance, or dApp integration yet
- **IPFS dependency** — metadata/logo disappears if IPFS pin is lost
- **LP centralisation** — creator holds the sole Whirlpool position NFT
- **Legacy Token Program** — not Token-2022; lacks extensions (transfer hooks, confidential transfers, etc.)
- Built via no-code launchpad, but thoroughly documented at the instruction level

## What Was Learned

- **SPL Token instruction set** — allocate, InitializeMint2, MintTo, SetAuthority
- **Metaplex Token Metadata v3** — how name/symbol/URI metadata attaches to a mint on-chain
- **IPFS + metadata** — how off-chain token images and JSON are pinned and referenced
- **Atomic transactions on Solana** — bundling multiple instructions into one all-or-nothing TX
- **Orca Whirlpool mechanics** — concentrated liquidity, tick arrays, price ranges, position NFTs
- **Token-2022 vs Legacy** — difference in program addresses and available extensions

## Links

- [Live Trading](https://go.lingadevaru.in/foss-trading)
- [Live Ledger / On-chain History](https://go.lingadevaru.in/foss-ledger)
- [Solscan](https://solscan.io/token/64AcKtFgExrtJWPJVr6U4iQrJ1VpiUvDHvRtdMHAcoin)
- [Solana Explorer](https://explorer.solana.com/address/64AcKtFgExrtJWPJVr6U4iQrJ1VpiUvDHvRtdMHAcoin)
- [Orca Pool](https://www.orca.so/pools/3Ub4ojhVSiMZtmrS8bHSEiMo9oqzauTyYtd3HjFbZnE2)
- [GitHub — Foss-Token](https://github.com/lingadevaru-hp/Foss-Token) — 7 stars · 4 forks · 45 commits · Updated Apr 29, 2026

## Related Pages

- [[projects/insurance-dapp]] — Another Web3 project (Ethereum)
- [[profile/about]] — Blockchain listed under technical skills
- [[work-college-internship]] — Hackathons and Web3 experience
- [[profile/projects]] — All projects overview