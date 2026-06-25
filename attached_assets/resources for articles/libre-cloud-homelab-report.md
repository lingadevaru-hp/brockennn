# Libre Cloud Homelab Report

## Source
- Raw file: `wiki/raw/LibreCloud-Homelab-Report.docx`

## What It Says
- Oracle Cloud Always Free is the base for the homelab plan.
- Intended target: 4 vCPU ARM, 24 GB RAM, 200 GB boot volume, 10 TB outbound bandwidth.
- Architecture uses Cloudflare, then Oracle Cloud VM, then Coolify.
- Public services include portfolio, Websurfx, and GoatCounter.
- Private services include Vaultwarden, Joplin Server, Pi-hole, FreshRSS, Uptime Kuma, and Gitea behind WireGuard.
- Long-term services include Immich, Mailcow, Jellyfin, and Ollama.

## Important Notes
- The report says the boot volume needs expansion from the default 47 GB to 200 GB.
- The design is zero-trust and Docker-based.
- Cloudflare hides the Oracle IP.

## Related Pages
- [[projects/homelab]] — Full homelab setup and architecture
- [[profile/projects]] — All projects overview
- [[profile/personal]] — Personal context and life setup
