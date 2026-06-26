import Link from 'next/link'
import styles from './not-found.module.scss'

export default function ProductNotFound() {
  return (
    <main className={styles.page}>
      <div>
        <span>404</span>
        <h1>Produto não encontrado</h1>
        <p>
          Este produto pode ter sido removido ou o endereço acessado está
          incorreto.
        </p>
        <Link href="/products">Voltar para produtos</Link>
      </div>
    </main>
  )
}
