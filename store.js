import { configureStore } from "@reduxjs/toolkit";

import navReduser from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav: navReduser,
    },
});
