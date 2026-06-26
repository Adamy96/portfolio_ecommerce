import { FiCreditCard, FiHeadphones, FiShield, FiTruck } from "react-icons/fi";
import type { Benefit, BenefitIcon } from "@/types/home.types";
import styles from "./Benefits.module.scss";

type BenefitsProps = {
  benefits: Benefit[];
};

const benefitIcons: Record<BenefitIcon, React.ReactNode> = {
  shipping: <FiTruck />,
  security: <FiShield />,
  payment: <FiCreditCard />,
  support: <FiHeadphones />,
};

export const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <section className={styles.benefits} aria-label="Benefícios">
      <div className={styles.container}>
        {benefits.map((benefit) => (
          <article key={benefit.id} className={styles.item}>
            <span className={styles.icon}>{benefitIcons[benefit.icon]}</span>

            <div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
