import { useState, useEffect } from "react";

export default function SelectedQuestion({ selectedQuestionId, setSelectedQuestion }) {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestion() {
      try {
        const response = await fetch(
          `https://the-trivia-api.com/api/questions/${selectedQuestionId}`
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
      <h2>Answers: </h2>
      <button onClick={() => setSelectedQuestion(null)}>Back</button>
    </div>
  );
}
