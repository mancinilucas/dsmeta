import backgroundImg from '../../assets/img/background.svg'
import './styles.css';

export function Header(){
  return(
    <>
      <header>
        <div className="header-container">
          <img src={backgroundImg} alt="logo" />
          <h1>DSMeta</h1>
          <p>Desenvolvido por <a href="https://github.com/mancinilucas" target="_blank">mancinilucas</a>
          </p>
        </div>
      </header>
    </>
  )
}