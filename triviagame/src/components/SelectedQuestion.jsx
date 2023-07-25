import { useState, useEffect } from "react";
import { AnswerRow } from "./AnswerRow";

export default function SelectedQuestion({ selectedQuestionId, setSelectedQuestion }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const response = await fetch(
          `https://the-trivia-api.com/v2/question/Id`
        );

        const result = await response.json();

        setQuestion(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchQuestion();
  }, [selectedQuestionId]);

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{question.question}</h2>
      <h3>Answers:</h3>
      <AnswerRow correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers} />
      <button onClick={() => setSelectedQuestion(null)}>Back</button>
    </div>
  );
}
