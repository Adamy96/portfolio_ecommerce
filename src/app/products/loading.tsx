import styles from './loading.module.scss'

export default function ProductsLoading() {
  return (
    <main className={styles.page} aria-label="Carregando produtos">
      <div className={styles.hero} />

      <div className={styles.container}>
        <div className={styles.sidebar} />

        <div className={styles.content}>
          <div className={styles.toolbar} />

          <div className={styles.grid}>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.image} />
                <div className={styles.line} />
                <div className={styles.lineSmall} />
                <div className={styles.linePrice} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
