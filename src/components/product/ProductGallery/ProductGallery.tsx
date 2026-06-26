'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './ProductGallery.module.scss'

type ProductGalleryProps = {
  images: string[]
  productName: string
}

export const ProductGallery = ({
  images,
  productName
}: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImage}>
        <Image
          src={selectedImage}
          alt={productName}
          width={720}
          height={720}
          priority
        />
      </div>

      <div className={styles.thumbnails} aria-label="Imagens do produto">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            className={
              image === selectedImage
                ? `${styles.thumbnail} ${styles.thumbnailActive}`
                : styles.thumbnail
            }
            onClick={() => setSelectedImage(image)}
            aria-label={`Ver imagem ${index + 1} de ${productName}`}
            aria-pressed={image === selectedImage}
          >
            <Image
              src={image}
              alt=""
              width={104}
              height={104}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
