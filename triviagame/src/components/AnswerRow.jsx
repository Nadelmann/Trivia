

export default function AnswerRow({ correctAnswer, incorrectAnswers }) {
  return (
    <div>
      <p>Correct Answer: {correctAnswer}</p>
      <p>Incorrect Answers:</p>
      <ul>
        {incorrectAnswers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}
