import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  productIds: string[];
};

const initialState: FavoritesState = {
  productIds: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const isFavorite = state.productIds.includes(productId);

      if (isFavorite) {
        state.productIds = state.productIds.filter(
          (currentProductId) => currentProductId !== productId,
        );

        return;
      }

      state.productIds.push(productId);
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
