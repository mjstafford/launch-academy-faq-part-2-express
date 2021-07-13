import React, { useState } from "react"
const QuestionForm = props => {
  const [question, setQuestion] = useState({
    question: "",
    answer: ""
  })
  const onChangeHandler = event => {
    let newQuestion = {}
    newQuestion = {...question, [event.currentTarget.id]: event.currentTarget.value}
    setQuestion(newQuestion)
  }
  const onSubmitHandler = event => {
    event.preventDefault()
    props.addQuestion(question)
    setQuestion({
      question: "",
      answer: ""
    })
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="question">Question:
        <input
          type="text"
          name="question"
          id="question"
          onChange={onChangeHandler}
          value={question.question}
        />
      </label>
      <label htmlFor="answer">Answer:
        <input
          type="text"
          name="answer"
          id="answer"
          onChange={onChangeHandler}
          value={question.answer}
        />
      </label>
      <input type="submit" />
    </form>
  )
}
export default QuestionForm
// store newQuestion in question state
// pass question state as parameter up to FAQList using onSubmitHandler which in turn calls a function from FAQList
// **use the info to write a fetch POST req**