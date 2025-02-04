import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List")
  const [questions, setQuestions] = useState(null)

  const addQuestion = (newQuestion) => {
    fetch('http://localhost:4000/questions', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newQuestion)
    })
      .then(response => response.json())
      .then(data => setQuestions([...questions, data]))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onAddQuestion={addQuestion} /> : 
        <QuestionList questions={questions} setQuestions={setQuestions} />}
    </main>
  )
}

export default App