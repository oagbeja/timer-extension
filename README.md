````markdown
# 🔔 Web Alert Extension

A lightweight Chrome extension that sends notification alerts and plays a sound when a webpage is active — ideal for reminders, alerts, or task tracking directly from your browser.

## 🚀 Features

- 🔔 Desktop notifications using Chrome's Notification API
- 🔊 Sound alert playback when the tab is active
- 📅 Optional scheduling (with support for alarms and specific days)
- 💾 Persistent storage using IndexedDB (`idb`)
- 🧩 Built with React, TailwindCSS, and Vite

---

## 📦 Installation

1. Clone or download this repository.
2. Run the build:

   ```bash
   npm install
   npm run build
   ```
````

3. Go to `chrome://extensions/` in your browser.
4. Enable **Developer Mode** (top right).
5. Click **Load unpacked** and select the `dist` folder.

---

## 🛠️ Development

To run in development mode with hot-reload:

```bash
npm run dev
```

Then use a tool like [Extension Reloader](https://chrome.google.com/webstore/detail/extension-reloader/) to auto-refresh the extension.

---

## 🧠 How It Works

- The **background service worker** checks the active tab or uses alarms.
- If the conditions are met (e.g., tab is focused), it:

  - Shows a Chrome notification.
  - Plays a ding sound (`/public/alert.mp3`).

- Data (like scheduled times or days) is stored in IndexedDB using the `idb` library.

---

## 📁 Project Structure

```bash
├── public/
│   └── alert.mp3         # Notification sound
├── src/
│   ├── utils/
│   │   └── background.ts # Background service worker
│   ├── components/       # React components
│   ├── App.tsx
│   └── main.tsx
├── manifest.json
├── vite.config.ts
└── README.md
```

---

## 🧩 Permissions Used

- `"notifications"` — to show desktop alerts
- `"storage"` — to store configuration data
- `"activeTab"` and `"tabs"` — to check which tab is active

---

## 📢 Limitations

- Notifications are auto-dismissed by Chrome after a few seconds.
- Sound only plays if the user has interacted with the page or tab (due to browser audio policies).
- Make sure the sound file is in the `public/` directory to be accessible by the extension.

---

## 📃 License

MIT — free to use, modify, and share.

---

## 🙌 Contributions

PRs and suggestions welcome!

```

---

```
