# SkyView v89 — Deploy Instructions

## What changed in v89
- Full homepage redesign: 18 sections reduced to 14, warm beige palette restored
- Finishes section: new hero + accordion sidebar layout (description opens below each button)
- Inline styles cleaned (~100 removed, moved to CSS classes)
- Mehiron page: reveal animations added
- All version badges updated to v89

## Archive
`skyview-v89-archive.zip` (272MB) — full site with all assets.

## Deploy to Cloudflare Workers

### Option A: From this folder (if wrangler is configured)
```bash
cd skyview-v84
npx wrangler deploy
```

### Option B: From the archive
```bash
unzip skyview-v89-archive.zip -d skyview-v89
cd skyview-v89
npx wrangler deploy
```

### Option C: Manual steps
1. Make sure you have wrangler installed: `npm install -g wrangler`
2. Login if needed: `npx wrangler login`
3. From the project root (where `wrangler.jsonc` is): `npx wrangler deploy`
4. Verify at https://skyview.co.il
5. Check version badge in footer shows `v89`

## Rollback
Previous archive: `skyview-v88-archive.zip`
To rollback, unzip that archive and run `npx wrangler deploy` from it.
