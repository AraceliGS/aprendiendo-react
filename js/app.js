const div = React.DOM.div;
const h2 = React.DOM.h2;
const p = React.DOM.p;
const a = React.DOM.a;
const b = React.DOM.b;
const br = React.DOM.br;

function Cabecera(props) {
  const titulo = 'Saludo';

  return div(null, 
    h2(null, titulo),
    p(null, 
      'Hola ', b(null, props.saludo), '.', br(null), 
      'Un link? ', br(null), 
    a({href: 'http://laboratoria.la'}, 'Laboratoria', '!') )
 );
 console.log(div);
 console.log(prop.saludos);
}

ReactDOM.render(
  Cabecera({saludo: 'Mundo'}), document.getElementById('cabecera')
);
