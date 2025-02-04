import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(response => response.json())
      .then(data => setQuestions(data))
  }, [])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions && questions.map(q => (
          <QuestionItem key={q.id} question={q}/>
        ))}
      </ul>
    </section>
  )
}

export default QuestionList
