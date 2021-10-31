import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className="container">
        <h3>Question And Answers About Login</h3>
        <section className="info">
          {data.map(question => 
            <SingleQuestion title={question.title} key={question.id} info={question.info}/>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
