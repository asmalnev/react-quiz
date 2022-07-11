import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => {
  return (
    <ul className={classes.AnswerList}>
      {props.answers.map((answer, index) => (
        <AnswerItem
          key={index}
          answer={answer}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      ))}
    </ul>
  )
}

export default AnswersList