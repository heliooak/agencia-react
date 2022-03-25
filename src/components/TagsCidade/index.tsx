import classNames from 'classnames';
import {Cidade } from 'types/Cidade';
import styles from './TagsCidade.module.scss';

export default function TagsCidade({
  category,
  size,
  serving,
  price
}: Cidade) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__dias}>{size}</div>
      <div className={styles.tags__qtdpessoas}>{serving} 2 pessoa{serving === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
    </div>
  );
}