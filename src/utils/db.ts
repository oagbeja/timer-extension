// db.ts
import { openDB } from "idb";

const DB_NAME = "my-alerts-db";
const STORE_NAME = "formData";

export const initDB = async () => {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const saveFormData = async (data: Record<string, any>) => {
  const db = await initDB();
  await db.add(STORE_NAME, data);
};

export const updateFormData = async (data: Record<string, any>) => {
  const db = await initDB();
  await db.put(STORE_NAME, data); // Will update if `data.id` exists
};

export const getAllFormData = async () => {
  const db = await initDB();
  return await db.getAll(STORE_NAME);
};
