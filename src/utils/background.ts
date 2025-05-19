import { getAllFormData } from "./db";

if (typeof chrome !== "undefined" && chrome.runtime) {
  chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === "interval") {
      const data = await getAllFormData();
      let truth = false;

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const today = new Date();
      const dayName = days[today.getDay()];

      const hours = today.getHours().toString().padStart(2, "0");
      const minutes = today.getMinutes().toString().padStart(2, "0");
      const time = `${hours}:${minutes}`;

      for (let dt of data) {
        if (
          dt.days instanceof Array &&
          dt.days.includes(dayName) &&
          dt.date === time
        ) {
          // Show a notification
          chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Reminder",
            message: `${dt.item}  ${dt.description}`,
            priority: 2,
          });
          truth = true;
        }
      }

      // Optional: trigger a sound by messaging a tab or popup
      truth && chrome.runtime.sendMessage({ action: "playSound" });
    }
  });

  chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== "install") {
      return;
    }

    // Create an alarm so we have something to look at in the demo
    await chrome.alarms.create("interval", {
      delayInMinutes: 1,
      periodInMinutes: 1,
    });
  });
}
