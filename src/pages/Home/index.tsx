import destinos from 'data/destinos.json';
import styles from './Home.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';
import { Cidade } from 'types/Cidade';

export default function Home() {
  let pratosRecomendados = [...destinos];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(cidade: Cidade) {
    navigate(`/cidade/${cidade.id}`, { state: { cidade }, replace: true });
  }
  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Explore nossas ofertas
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Explorer agencias </h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Explorer agencias" />
        <div className={styles.nossaCasa__endereco}>
          agenciaexp@agex.com <br /> <br /> Tel.: 0800 564 431
        </div>
      </div>
    </section>
  );
}