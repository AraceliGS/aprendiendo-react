const div = React.DOM.div;
const h2 = React.DOM.h2;

function Cabecera() {
  const titulo = 'Hola Mundo';
  const elemento = div(null, h2(null, titulo));

  return elemento;
}

ReactDOM.render(Cabecera(), document.getElementById('react-container'));
