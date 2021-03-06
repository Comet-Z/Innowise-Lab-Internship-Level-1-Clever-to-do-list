/* eslint-disable no-undef */
import { createStore } from "vuex";

export default createStore({
  //
  // ─── STATE ──────────────────────────────────────────────────────────────────────
  //
  state: () => {
    return {
      cardStatus: false,

      clickedTask: null,
      taskStatus: null,

      dayIsActive: "active",

      dotStatusTransfer: false,

      cardVisible: true,
      taskArr: [],
    };
  },
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── GETTERS ────────────────────────────────────────────────────────────────────
  //
  getters: {
    getCardStatus(state) {
      return state.cardStatus;
    },
    getTaskArray(state) {
      return state.taskArr;
    },
  },
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── MUTATIONS ──────────────────────────────────────────────────────────────────
  //
  mutations: {
    toggleCard(state) {
      state.cardStatus ? (state.cardStatus = false) : (state.cardStatus = true);
    },
  },
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── ACTIONS ────────────────────────────────────────────────────────────────────
  //
  actions: {},
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── MODULES ────────────────────────────────────────────────────────────────────
  //
  modules: {},
});
// ────────────────────────────────────────────────────────────────────────────────
