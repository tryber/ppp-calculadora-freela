import './Footer.css';
import logo from '../assets/logo-trybe-2.png';

function Footer() {
  return (
    <footer>
      <h2>Projeto desenvolvido na 10ª edição do Primeiros Passos  na Programação da Trybe.</h2>
      <img src={ logo } alt="Logotipo da Trybe" />
    </footer>
  );
}

export default Footer;
