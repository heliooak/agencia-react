import styles from './Contato.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import nossaCasa from 'assets/nossa_casa.png';


export default function Contato() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Contato </h3>
      <div className={styles.sobreNos}>
        <div className={styles.sobreNos__texto}>
        <p>
          A Explorer agências é uma das principais agências do Brasil para você planejar sua viagem com todo o conforto a destinos incriveis com um atendimento e suporte logístico de excelência. Dos cinco continentes, de norte a sul, leste a oeste, nos comprometemos a tornar sua viagem inesquecível em qualquer lugar do mundo.
          </p>
          <p>
          Todos os pacotes oferecem as viagens de ida e volta junto ao translado e roteiros de turismo com cafés da manhã incluso durante 7 dias nos melhores hóteis e pousadas.
          </p>
          <p>
          Trabalhamos sempre para que você e sua família tenha a melhor experiência. Curta sua viagem sem preocupações com imprevistos que podem ocorrer. Nós disponibilizamos todo o suporte necessário com pacotes exclusivos para nossos clientes em parceria com uma das mais conceituada seguradora internacional de apoio a acidentes e recursos financeiros em situações de roubo e furto.
          </p>
        </div>
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



