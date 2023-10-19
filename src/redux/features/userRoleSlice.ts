import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  role: "",
};

export const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    addRole: (state, action) => {
      state.role = action.payload;
    },
    removeRole: (state, action) => {
      state.role = "";
    },
  },
});

export const { addRole, removeRole } = userRoleSlice.actions;

export default userRoleSlice.reducer;
