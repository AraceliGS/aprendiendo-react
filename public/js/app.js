const data = {
  headerTitulo: 'Getting Started',
  headerDescripcion: 'Descripcion',
  mainSectionTitulo: 'Main Section',
  articles: [
    { titulo: 'Titulo 1', descripcion: 'Descripcion 1'},
    { titulo: 'Titulo 2', descripcion: 'Descripcion 2'},
    { titulo: 'Titulo 3', descripcion: 'Descripcion 3'}
  ],
  asideTitulo: 'Links',
  links: [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ],
};

function Header(props) {
  return (
  <div className={'color'}>
    <h1>{props.headerTitle}</h1>
    <p>{props.headerDescription}</p>
  </div>
  )
};


function MainSection(props) {
  return (
  <div className={'article-section'}>
    <h2>{props.mainSectionTitle}</h2>  
  </div>
  )
};

const children = props.articles.map(function(el) {
  return <Article titulo={props.article} descripcion= {props.articleText}/>
});


function Aside(props) {
  <div className={'links-section'}>
    <h4>{props.asideTitle}</h4>
    <ul id= {listOfLinks}></ul>
  </div>
}

const links = props.links.map(function(a) {
  return <li><a href={props.href}>{props.text}</a></li>
});



ReactDOM.render(
  Header({headerTitle: data.headerTitulo, headerDescription: data.headerDescripcion}),
  
  document.getElementById('react-container')
);