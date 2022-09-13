import { syncedStore, getYjsValue } from "@syncedstore/core";
import { WebrtcProvider } from "y-webrtc";
import * as Vue from "vue";
import { enableVueBindings } from "@syncedstore/core";

// Create your SyncedStore store
export const store = syncedStore({ todos: [], fragment: "xml" });

// Create a document that syncs automatically using Y-WebRTC
const doc = getYjsValue(store);
export const webrtcProvider = new WebrtcProvider("syncedstore-todos", doc);

export const disconnect = () => webrtcProvider.disconnect();
export const connect = () => webrtcProvider.connect();

// make SyncedStore use Vuejs internally
enableVueBindings(Vue);

export const reactiveStore = Vue.reactive(store);