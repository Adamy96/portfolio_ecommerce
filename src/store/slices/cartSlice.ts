import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  productId: string;
  quantity: number;
  color?: string;
};

export type AddProductPayload = {
  productId: string;
  quantity?: number;
  color?: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<string | AddProductPayload>) => {
      const payload =
        typeof action.payload === "string"
          ? {
              productId: action.payload,
              quantity: 1,
            }
          : {
              productId: action.payload.productId,
              quantity: action.payload.quantity ?? 1,
              color: action.payload.color,
            };

      const existingItem = state.items.find(
        (item) =>
          item.productId === payload.productId && item.color === payload.color,
      );

      if (existingItem) {
        existingItem.quantity += payload.quantity;
        return;
      }

      state.items.push({
        productId: payload.productId,
        quantity: payload.quantity,
        color: payload.color,
      });
    },
    removeProduct: (
      state,
      action: PayloadAction<{
        productId: string;
        color?: string;
      }>,
    ) => {
      state.items = state.items.filter(
        (item) =>
          item.productId !== action.payload.productId ||
          item.color !== action.payload.color,
      );
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{
        productId: string;
        quantity: number;
        color?: string;
      }>,
    ) => {
      const item = state.items.find(
        (currentItem) =>
          currentItem.productId === action.payload.productId &&
          currentItem.color === action.payload.color,
      );

      if (!item) return;

      if (action.payload.quantity <= 0) {
        state.items = state.items.filter(
          (currentItem) =>
            currentItem.productId !== action.payload.productId ||
            currentItem.color !== action.payload.color,
        );

        return;
      }

      item.quantity = action.payload.quantity;
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addProduct, clearCart, removeProduct, updateProductQuantity } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
