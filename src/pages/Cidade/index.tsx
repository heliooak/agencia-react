import styles from './Cidade.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import destinos from 'data/destinos.json';
import TagsCidade from 'components/TagsCidade';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'components/PaginaPadrao';

export default function Cidade() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cidade = destinos.find(item => item.id === Number(id));
  if (!cidade) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <div className={styles.container}>
              <h1 className={styles.titulo}>
                {cidade.title}
              </h1>
              <div className={styles.imagem}>
                <img src={cidade.photo} alt={cidade.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {cidade.description}
                </p>
              </div>
              <TagsCidade {...cidade} />
            </div>
          </>
        } />
      </Route>
    </Routes>
  );
}