import React from 'react';
import './index.css';

const Accordion = props => {
  const handleClick = event => {
    const button = event.target;
    button.classList.toggle('active');

    const panel = button.nextElementSibling;
    if (panel.style.maxHeight) hidePanel(panel);
    else showPanel(panel);
  };

  const showPanel = panel => {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  };

  const hidePanel = panel => {
    panel.style.maxHeight = null;
  };

  return (
    <div>
      <button className="accordion" onClick={handleClick}>
        {props.title}
      </button>
      <div className="panel">
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Accordion;
