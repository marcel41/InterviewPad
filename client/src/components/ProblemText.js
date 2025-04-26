import React from 'react';
import '../styles/ProblemText.css';

function ProblemText({ title, description, examples }) {
  return (
    <div className="problem-container">
      <h1 className="problem-title">{title}</h1>
      <p className="problem-description">{description}</p>
      <div className="problem-examples">
        <h3>Examples:</h3>
        {examples.map((example, index) => (
          <div key={index} className="example">
            <p><strong>Input:</strong> {example.input}</p>
            <p><strong>Output:</strong> {example.output}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProblemText;