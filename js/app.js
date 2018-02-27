const div = React.DOM.div;
const h2 = React.DOM.h2;

function Cabecera(props) {
  const titulo = 'Hola ' + props.saludo;
  const elemento = div(null, h2(null, titulo));

  return elemento;
}

ReactDOM.render(
  Cabecera({saludo: 'Mundo'}), document.getElementById('cabecera-1')
);

ReactDOM.render(
  Cabecera({saludo: 'Amigx'}),
  document.getElementById('cabecera-2')
);
