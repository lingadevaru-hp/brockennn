---
title: WireGuard Project
type: project
status: idea
tags: [networking, wireguard, vpn, homelab]
last_updated: 2026-04-29
---

# WireGuard Project

> **Status: IDEA ONLY — no concrete plan or code yet.**

## Summary

A networking project centred on WireGuard VPN. The specific use case is undefined, but likely directions include a personal VPN mesh, site-to-site tunnels, or integration into the homelab infrastructure.

## The Idea

WireGuard is a modern, minimal VPN protocol built directly into the Linux kernel — significantly faster and simpler to configure than OpenVPN or IPsec. Possible project directions:

### Direction A — Homelab VPN Mesh
Connect personal devices (laptop, phone, cloud VM) into a private WireGuard mesh network. All traffic to private homelab services (Vaultwarden, Pi-hole, Gitea) routes through the mesh — no public exposure.

The [[projects/homelab|Homelab]] already includes WireGuard in its planned stack for securing private services behind a VPN layer.

### Direction B — Site-to-Site Tunnels
Connect two or more remote locations (e.g., Oracle Cloud VM ↔ home network) as if they were on the same LAN. Useful for accessing home services from Oracle Cloud or vice versa.

### Direction C — Research / Networking Angle
A more formal implementation involving WireGuard + blockchain identity — potential direction for future networking work. No page or plan exists for this yet.

## What WireGuard Actually Is

- Kernel-level VPN (built into Linux 5.6+)
- Uses modern cryptography: Curve25519, ChaCha20, Poly1305, BLAKE2
- Config is simple: public/private key pairs, allowed IPs, endpoints
- Much lower overhead than OpenVPN — faster handshake, fewer lines of config
- Works over UDP

## Related Pages

- [[projects/homelab]] — WireGuard already planned as part of private services layer
- [[profile/personal]] — Self-hosting and networking interests
- [[profile/about]] — WireGuard listed under Security & Networking skills
- [[profile/projects]] — All projects overview
