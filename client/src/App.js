import './App.css';
import Editor from '@monaco-editor/react';
import ProblemText from './components/ProblemText';
import SquareText from './components/SquareText';

// import React from 'react';
function App() {

  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }


  const problem = {
    title: "Two Sum",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="layout-container">
          {/* Left Section */}
          <div className="left-section">
            <ProblemText
              title={problem.title}
              description={problem.description}
              examples={problem.examples}
            />
          </div>
  
          {/* Right Section */}
          <div className="right-section">
            <Editor
              height="70vh"
              defaultLanguage="python"
              theme="vs-dark"
              defaultValue="// some comment"
              onChange={handleEditorChange}
            />
          </div>
        </div>

        <div className="Console">
          <SquareText />
        </div>
      </header>
    </div>
  );
}

export default App;
