import { defineStore } from "pinia";

import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";

// Create your SyncedStore store
const INITIAL_STATE = {
  todos: [],
  fragment: "xml",
};
export const store = syncedStore(INITIAL_STATE);

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsValue(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

export const useCounterStore = defineStore("counter", {
  state: () => store,
  // could also be defined as
  // state: () => ({ count: 0 })
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      console.log(state)
      return state?.todos?.filter((todo) => todo.completed);
    },
  },
  actions: {
    increment() {
      console.log(this.$state);
    },
  },
});
