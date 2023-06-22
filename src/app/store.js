import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/CryptoApi";

import { cryptoNewsApi } from "../services/CryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]:cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoNewsApi.middleware),
});

// export default configureStore({
//     reducer: {
//         [CryptoNewsApi.reducerPath]:cryptoNewsApi.reducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(cryptoApi.middleware),
// });