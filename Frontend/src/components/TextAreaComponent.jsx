// TextAreaComponent.js
import React, { useState } from 'react';


function TextAreaComponent() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleGenerateAnswer = () => {
    // Simulate AI answer generation (replace with actual API call or logic)
    const generatedAnswer = `AI Answer to: ${question}`;
    setAnswer(generatedAnswer);
  };

  return (
    <div className="text-area-container">
      <div className="text-area-box">
        <textarea
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button onClick={handleGenerateAnswer}>Generate Answer</button>
      </div>
      {answer && (
        <div className="answer-box">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default TextAreaComponent;
