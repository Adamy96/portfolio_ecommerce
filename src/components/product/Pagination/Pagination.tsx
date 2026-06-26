import Link from "next/link";
import styles from "./Pagination.module.scss";

type PaginationProps = {
  page: number;
  totalPages: number;
  searchParams: Record<string, string | undefined>;
};

const buildHref = (
  searchParams: Record<string, string | undefined>,
  page: number,
) => {
  const params = new URLSearchParams();

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  params.set("page", String(page));

  return `/products?${params.toString()}`;
};

export const Pagination = ({
  page,
  totalPages,
  searchParams,
}: PaginationProps) => {
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.pagination} aria-label="Paginação">
      {page > 1 && (
        <Link href={buildHref(searchParams, page - 1)}>Anterior</Link>
      )}

      <span aria-current="page">
        Página {page} de {totalPages}
      </span>

      {page < totalPages && (
        <Link href={buildHref(searchParams, page + 1)}>Próxima</Link>
      )}
    </nav>
  );
};
