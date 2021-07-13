import React, { useEffect, useState } from 'react'
import Question from './Question'
import { hot } from "react-hot-loader/root"
import QuestionForm from "./QuestionForm"

const FAQList = props => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const fetchData = async () => {
      const response = await fetch("/api/v1/questions")
      const questionData = await response.json()
      setQuestions(questionData.questions)
  }

  useEffect(() => { fetchData() }, [])

  const toggleQuestionSelect = id => {
    if (id === selectedQuestion) {
      setSelectedQuestion(null)
    } else {
      setSelectedQuestion(id)
    }
  }

  //should have try/catch 
  const addQuestion = async (newQuestion) => {
    const response = await fetch("./api/v1/questions", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newQuestion) //might need a {newQuestion}
    })
    const responseBody = await response.json()
    // debugger
    setQuestions(questions.concat(responseBody.question))
  }

  const questionListItems = questions.map(question => {
    let selected
    if (selectedQuestion === question.id) {
      selected = true
    }
    let handleClick = () => {
      toggleQuestionSelect(question.id)
    }
    return (
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return (
    <div className="page">
      <h1>We Are Here To Help</h1>
      <div className="question-list">{questionListItems}</div>
      <QuestionForm addQuestion={addQuestion}/>
    </div>
  )
}

export default hot(FAQList)