import styles from './rodape.module.css';
import { ReactComponent as Marcaregistrada } from 'assets/marca_registrada.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
           <Marcaregistrada />
           
        </footer>

        //Rodape estilizado
  )
}
