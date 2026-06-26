"use client";

import { useState } from "react";
import { addProduct } from "@/store/slices/cartSlice";
import { useAppDispatch } from "@/store/hooks";
import type { Product } from "@/types/product.types";
import styles from "./AddToCart.module.scss";

type AddToCartProps = {
  product: Product;
};

export const AddToCart = ({ product }: AddToCartProps) => {
  const dispatch = useAppDispatch();

  const colors = product.colors ?? [];
  const stock = product.stock ?? 0;

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "");
  const [feedback, setFeedback] = useState("");

  const handleDecreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));

    setFeedback("");
  };

  const handleIncreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.min(stock, currentQuantity + 1));

    setFeedback("");
  };

  const handleAddToCart = () => {
    if (stock <= 0) return;

    dispatch(
      addProduct({
        productId: product.id,
        quantity,
        color: selectedColor || undefined,
      }),
    );

    setFeedback(
      quantity === 1
        ? "Produto adicionado ao carrinho."
        : `${quantity} produtos adicionados ao carrinho.`,
    );
  };

  return (
    <div className={styles.wrapper}>
      {colors.length > 0 && (
        <fieldset className={styles.colors}>
          <legend>Cor: {selectedColor}</legend>

          <div>
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={
                  color.name === selectedColor
                    ? `${styles.color} ${styles.colorActive}`
                    : styles.color
                }
                style={{ backgroundColor: color.value }}
                onClick={() => {
                  setSelectedColor(color.name);
                  setFeedback("");
                }}
                aria-label={`Selecionar cor ${color.name}`}
                aria-pressed={color.name === selectedColor}
              />
            ))}
          </div>
        </fieldset>
      )}

      <div className={styles.actions}>
        <div className={styles.quantity}>
          <button
            type="button"
            onClick={handleDecreaseQuantity}
            disabled={quantity <= 1 || stock <= 0}
            aria-label="Diminuir quantidade"
          >
            −
          </button>

          <span aria-live="polite">{quantity}</span>

          <button
            type="button"
            onClick={handleIncreaseQuantity}
            disabled={quantity >= stock || stock <= 0}
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className={styles.addButton}
          onClick={handleAddToCart}
          disabled={stock <= 0}
        >
          {stock > 0 ? "Adicionar ao carrinho" : "Produto esgotado"}
        </button>
      </div>

      {feedback && (
        <p className={styles.feedback} role="status">
          {feedback}
        </p>
      )}
    </div>
  );
};
