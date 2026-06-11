# zgen.hu landing

ZGEN landing page — React 19 + Vite + Tailwind CSS 4, served as a Cloudflare Worker with static assets. Managed with [Bun](https://bun.sh).

## Develop

```bash
bun install
bun run dev        # vite dev server on http://localhost:3000 (worker routes included)
```

The join form posts to `/form`, which the worker forwards to a Telegram group. For local testing copy `.dev.vars.example` to `.dev.vars` and set `TELEGRAM_TOKEN`.

## Deploy

The site deploys to the `landing` Cloudflare Worker (configured in `wrangler.jsonc`).

```bash
bunx wrangler secret put TELEGRAM_TOKEN   # once
bun run deploy                            # build + wrangler deploy
```

## Routes

- `/` — the landing page (outside → inside → join form)
- `POST /form` — sends the application to Telegram
- `/careers` — redirects to the Notion careers page
