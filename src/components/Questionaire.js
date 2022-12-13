import React from 'react'
import parse from 'html-react-parser';


function Questionaire({handleAnswer,showAnswers,handleNextQuestion, data:{question, correct_answer, answers}}) {
    console.log(question);
    return (
        <>
            <div className="questionClass">
            <h1>{parse(`<span>${question}</span>`)}</h1>
            </div>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? "green-button": "red-button"
                    ) : "";
                    return(
                        <button key={idx} className={`normal-button ${specialClassName}`}
                        onClick = {() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}} />

                    )
                })}
            </div>
            {showAnswers && (
                <button onClick = {handleNextQuestion} className="next-question">Next Question</button>
            )}
        </>
    )
}

export default Questionaire
