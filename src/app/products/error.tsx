'use client'

import styles from './error.module.scss'

type ProductsErrorProps = {
  reset: () => void
}

export default function ProductsError({ reset }: ProductsErrorProps) {
  return (
    <main className={styles.page}>
      <div className={styles.content}>
        <span aria-hidden="true">!</span>
        <h1>Não foi possível carregar os produtos</h1>
        <p>Ocorreu um erro inesperado. Tente novamente em alguns instantes.</p>
        <button type="button" onClick={reset}>
          Tentar novamente
        </button>
      </div>
    </main>
  )
}
