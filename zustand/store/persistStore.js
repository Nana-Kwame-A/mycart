import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { authSlice } from "../slices/authSlice";

let store = (set, get) => ({
  ...authSlice(set, get)
});

store = persist(store, {
  name: "authStore",
  getStorage: () => createJSONStorage(AsyncStorage)
});

export const usePersistStore = create(store);
