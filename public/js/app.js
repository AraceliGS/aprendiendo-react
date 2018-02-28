// document.getElementById('box');

// const title = React.createElement('h1', {id: 'title'}, 'Hola Mundo');
const title = (
  <div>
    <h1 id="title">Hola
      <span> Mundo</span>
    </h1>
    <h2>Sleep</h2>
  </div>
);

ReactDOM.render(title, document.getElementById('box'));