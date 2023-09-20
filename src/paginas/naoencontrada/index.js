import BotaoPrincipal from 'componentes/botaoprincipal';
import styles from './naoencontrada.module.css'
import erro404 from 'assets/erro_404.png';
import { useNavigate } from 'react-router-dom';

export default function Naoencontrada() {
    const navegar = useNavigate();
  return (
    <>
    <div className={styles.conteudoContainer}>
        <span className={styles.texto404} >
            404
            </span>
            <h1 className={styles.titulo}>
                Pagina não encontrada
                </h1>
            <p className={styles.paragrafo}>
                Acho que não temos o que vc procura, tem certeza que digitou o termo certo?
                </p>    
            <p className={styles.paragrafo}>
                Aguarde um pouco e recarregue a pagina, ou volte pra pagina inicial.
                </p>    
                <div className={styles.botaoContainer}
                onClick={() => navegar("/")}>
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                        </BotaoPrincipal>
                <img className={styles.imagemCachorro}
                alt ="Cachorro com roupas humanas"
                 src={erro404}
                />
                </div>
                </div>
                <div className={styles.espacoEmBranco}></div>
                </>
  )
}
