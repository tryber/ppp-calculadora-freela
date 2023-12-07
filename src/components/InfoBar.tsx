// desestruturacao { }
// title sempre será um texto
import './InfoBar.css';

type InforBarProps = {
  title: string;
};

function InfoBar(props : InforBarProps) {
  const { title } = props;

  return (
    <section className="infobar">
      { title }
    </section>
  );
}

export default InfoBar;
