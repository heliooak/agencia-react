import styles from './Item.module.scss';
import { Cidade } from 'types/Cidade';
import TagsCidade from 'components/TagsCidade';
import { useNavigate } from 'react-router-dom';

export default function Item(props: Cidade) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/cidade/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsCidade {...props} />
      </div>
    </div>
  );
}