---
title: Libre Cloud — Homelab
type: project
tags: [cloud, homelab, self-hosting, oracle, docker]
status: blocked
last_updated: 2026-04-30
---

# Libre Cloud — Homelab

## Reality — What Actually Exists

> **Status: Blocked / Severely constrained.**
> The ARM Ampere (4 OCPU, 24 GB RAM) was never provisioned. OCI "out of capacity" errors were persistent and unresolvable. Tried repeatedly — gave up. The plan to get that VM is abandoned for now.

**What actually exists:** 1x `VM.Standard.E2.1.Micro` — 1 OCPU, 1 GB RAM. That's it.

| Resource | Reality |
|----------|---------|
| VM | 1x Micro (1 OCPU, 1 GB RAM) — only this |
| ARM Ampere | ❌ Never got it. Capacity unavailable. Plan abandoned. |
| Account | Provisioned via a friend's Oracle account |
| Domain | lingadevaru.in — ~₹800/year |
| DNS / CDN | Cloudflare — DDoS protection, IP masking, SSL |

---

## What Can Realistically Run on 1 GB RAM

With 1 OCPU and 1 GB RAM, only lightweight services are viable. Running multiple services simultaneously is difficult.

| Service | RAM usage | Feasibility |
|---------|-----------|-------------|
| WireGuard | ~5 MB | ✅ Easy |
| Pi-hole | ~50–100 MB | ✅ Easy |
| Vaultwarden | ~50 MB | ✅ Easy |
| Caddy / nginx (reverse proxy) | ~30 MB | ✅ Easy |
| Portfolio (static files) | minimal | ✅ Easy |
| SearXNG | ~200–400 MB | ⚠️ Tight |
| Coolify (Docker PaaS) | ~500 MB–1 GB | ❌ Too heavy on 1 GB |
| Gitea | ~200 MB | ⚠️ Tight, maybe |
| Immich, Mailcow, Jellyfin, Ollama, Hermes Agent | 2–24 GB | ❌ Impossible on 1 GB |

**Key constraint:** Coolify itself uses ~500 MB–1 GB RAM. Running Coolify on a 1 GB VM leaves almost nothing for actual services.

---

## Architecture (intended — not fully running)

The zero-trust design is sound and still the target architecture if/when better compute is available:

```
Internet
  └── Cloudflare (DNS + DDoS + IP masking)
        └── Oracle Cloud VM (1 GB Micro — currently this only)
              └── Reverse proxy (Caddy/nginx)
                    ├── Public: Portfolio, Pi-hole DoH
                    └── Private (WireGuard-gated): Vaultwarden
```

The full planned architecture (14+ services) requires the ARM Ampere VM that was never provisioned.

---

## Services — Planned (ARM required — indefinitely on hold)

### Public — via Cloudflare
| Service | Purpose |
|---------|---------|
| Portfolio | lingadevaru.in |
| SearXNG | Privacy meta-search |
| GoatCounter | Cookie-free analytics |

### Private — Behind WireGuard
| Service | Purpose |
|---------|---------|
| Vaultwarden | Password manager |
| Pi-hole | DNS ad blocker |
| Uptime Kuma | Uptime monitoring |
| FreshRSS | RSS reader |
| Joplin Server | Self-hosted notes |
| Gitea | Self-hosted Git |

### Needs 24 GB ARM — Not Happening Yet
| Service | Why blocked |
|---------|-------------|
| Immich | Photo backup — needs RAM |
| Mailcow | Email server — needs RAM |
| Jellyfin | Media streaming — needs RAM |
| Ollama | Local LLM — needs RAM |
| Hermes Agent | AI agent — needs RAM |

---

## Oracle Cloud ARM — Why It Failed

The target was `VM.Standard.A1.Flex` (4 OCPU, 24 GB, free forever). OCI shows it as free but capacity in the Hyderabad region was never available. Options that exist but were exhausted:
- Different availability domain (tried)
- Off-peak retries (tried)
- Different region (would require new account setup)

**Decision: Abandoned.** Stuck with the Micro VM indefinitely unless something changes.

---

## Source
Raw document: `wiki/raw/LibreCloud-Homelab-Report.pdf`

## Related Pages
- [[concepts/oracle-cloud-free]] — OCI Always Free specs and ARM capacity issue
- [[concepts/privacy-stack]] — Services like Vaultwarden fit into the privacy stack
- [[projects/searchxeng]] — SearXNG running locally for now (not on homelab)
- [[sources/libre-cloud-homelab-report]] — Source document summary
- [[profile/personal]] — Personal context and self-hosting interests
