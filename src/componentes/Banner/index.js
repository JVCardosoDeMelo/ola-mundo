import styles from './banner.module.css'
import circuloColorido from "../../assets/circulo_colorido.png"
import minhaFoto from "../../assets/e984333e-2e27-4eca-9a5e-54c83fe01a28.png"
export default function Banner() {
  return (
    <div className={styles.banner}>
        <div className={styles.apresentacao}>
           <h1 className={styles.titulo}>Olá mundo</h1>
           <p className={styles.paragrafo}>Olá! Prazer em lhe conhecer!Me chamo João Vitor Cardoso e esse é meu
           espaço virtual , aqui pretendo compartilhar meus conhecimentos e aprendizados na minha area de programação,
           espero que possa lhe entreter e lhe ensinar algo! Fique a vontade para explorar todos os topicos.</p>
        </div>

     <div className={styles.imagem}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true}/>
        <img className={styles.minhaFoto} src ={minhaFoto} aria-hidden={true}/>
        </div>   
        </div>
  )
}
