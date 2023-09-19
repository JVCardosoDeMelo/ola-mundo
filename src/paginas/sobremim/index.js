
import styles from "./sobremim.module.css"
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotosobremim from "assets/jv.jpg"



export default function SobreMim() {
  return (
      <PostModelo  fotoCapa={fotoCapa}
      titulo="Sobre mim"
      >
        <h3 className={styles.subtitulo}>
          Ola ,eu sou o João Vitor!
        </h3>
       
       <img 
       src={fotosobremim}
       className={styles.fotoSobreMim}
       />
       <p classname={styles.paragrafo}>
        Olá! Sou João Vitor Cardoso De melo , sou programador front-end e amante da tecnologia, que bom que chegou ate aqui.
       </p>
       <p classname={styles.paragrafo}>
        Sou apaixonado por tecnologia desde pequeno , seja com jogos ou sites, sempre tive interesse na area e sempre soube que trabalharia com isso.
       </p>
       <p classname={styles.paragrafo}> Comecei como um estudante de engenharia eletrica, tive meu primeiro contato com programação e me interessei pela área, não me aprofundei por falta 
        de estrutura na epoca , mas sempre tive vontade de aprender mais sobre o assunto.
       </p>
       <p classname={styles.paragrafo}>
        Hoje , estudo analise e desenvolvimento de sistemas , e estou ingressando no mercado front-end , decidi dominar o javascript , html e css como uma base, e hoje estou 
        estudando react.js , uma ferramenta muito interessante que vem me ajudando bastante em projetos.
       </p>
      </PostModelo>
  )
}
