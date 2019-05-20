import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

function App() {
  const title = 'Título';
  const content =
    'Mussum Ipsum, cacilds vidis litro abertis. Detraxit consequat et quo num tendi nada. Quem num gosta di mé, boa gentis num é. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! ';
  return (
    <div className="App">
      <Accordion title={title} content={content} />
    </div>
  );
}

export default App;
