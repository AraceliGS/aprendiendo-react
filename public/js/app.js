// document.getElementById('box');

// const title = React.createElement('h1', {id: 'title'}, 'Hola Mundo');
const mainTitle = (
  <div className={'color'}>
    <h1>Getting Started</h1>
    <p>Descripción</p>
  </div>
);

ReactDOM.render(mainTitle, document.getElementById('header'));

const articleSection = (
  <div className={'article-section'}>
    <h2>Main Section</h2>  
    <article>
      <h3>Título 1</h3>
      <p>Descripción 1</p>
      <hr/>
    </article>
    <article>
      <h3>Título 2</h3>
      <p>Descripción 2</p>
      <hr/>
    </article>
    <article>
      <h3>Título 3</h3>
      <p>Descripción 3</p>
      <hr/>
    </article>
  </div>
);

ReactDOM.render(articleSection, document.getElementById('main'));

const linksSection = (
  <div className={'links-section'}>
    <h4>Links</h4>
    <ul>
      <li><a href='#'>Link 1</a></li>
      <li><a href='#'>Link 2</a></li>
      <li><a href='#'>Link 3</a></li>
      <li><a href='#'>Link 4</a></li>
      <li><a href='#'>Link 5</a></li>
    </ul>
  </div>
);

ReactDOM.render(linksSection, document.getElementById('aside'));