"use client";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  // chứa state tổng của cả ứng dụng
  reducer: {
    numberReducer: (state) => 2,
  },
});
