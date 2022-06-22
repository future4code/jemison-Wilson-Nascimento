
import fotoWill from './img/will.JPG'
import './App.css';

function App() {

  const titulo = 'Olá! Eu sou o Wilson.'
  const paragrafo = 'Este é meu primeiro site React.'
  const mandarMensagem = () => {
    alert ('Boa noite!')
  }

  return (
    <div className="App">
      <h1>{titulo}</h1>
      <img src={fotoWill} className='foto-will' alt='Foto do Wilson'/>
      <p>{paragrafo}</p>
      <button onClick={mandarMensagem}>Aperte este botão</button>
      





    </div>
  );
}

export default App;
