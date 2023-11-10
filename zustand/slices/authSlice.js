// import some middlewares
import axios from "axios";

import { ACTION_TYPES } from "../actionTypes";

export const authSlice = (set, get) => ({
  // INITIAL STATES
  actionType: "",
  isLoginLoading: false,
  isSignupLoading: false,
  user: {},
  message: "Test",
  token: "",
  isLoggedIn: false,
  navigationType: "",

  // ACTIONS
  appEntry: async () => {
    return;
  },

  login: async () => {
    return;
  },

  logout: async () => {
    return;
  },

  signup: async (email, phone, password) => {
    console.log(email, phone, password);
    if (!email || !phone || !password) {
      console.log("no values");
    } else {
      console.log("else called");
      axios
        .post("https://fakestoreapi.com/users", {
          email: email,
          username: "fred",
          password: password,
          name: {
            firstname: "",
            lastname: ""
          },
          phone: phone
        })
        .then((response) => {
          console.log(response.data);
          set((state) => ({
            user: response.data,
            isLoggedIn: true,
            token: response.data,
            actionType: ACTION_TYPES.SIGNUP_SUCCESS
          }));
        })
        .catch((error) => console.log(error));
    }
  },

  restActionType: () => {
    set(() => ({
      actionType: ""
    }));
  }
});
