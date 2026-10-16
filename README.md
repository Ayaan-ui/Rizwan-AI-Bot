# Rizwan AI Bot — Admin Panel Starter

This is a responsive **frontend starter UI** for a future WhatsApp AI bot dashboard.

## What works now
- Landing page and dashboard UI
- Mobile-responsive layout
- Demo AI-command toggles
- Demo display-name and command-prefix settings
- Demo settings stored only in the current browser using `localStorage`

## What does NOT work yet
- There is no real admin authentication.
- It is not connected to WhatsApp or to a bot process.
- It does not call ChatGPT, Gemini, Claude, Grok, or DeepSeek APIs.
- Settings are browser-local demo settings and are not shared between devices.
- Do not enter API keys, passwords, or WhatsApp session credentials.

## Deploy as a visual preview
1. Upload the files in this folder to your GitHub repository.
2. In Vercel, import that repository.
3. Use the project root as the root directory. No build command is needed for this static HTML preview.
4. Deploy. The landing page is `index.html`; the dashboard is `admin.html`.

## Before production
Add server-side authentication, authorization, secure secret storage, API routes, audit logs, and a backend connection to the bot. Never protect an admin panel with a password hardcoded in frontend JavaScript. Review the existing Knightbot-MD source and its license before combining or redistributing code.
