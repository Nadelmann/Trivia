import { useEffect, useState } from 'react';
import { QuestionRow } from './QuestionRow';
import { AnswerRow } from './AnswerRow';

export function HistoryQuestions({ category, handleBackClick }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=History");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, [category]);

  const handleHistoryQuestionsBackClick = () => {
    setSelectedQuestion(null);
    handleBackClick();
  };

  const handleQuestionClick = (questionId) => {
    setSelectedQuestion(questionId);
  };

  if (!questions) {
    return <div>Loading Questions...</div>;
  }

  if(selectedQuestion){
    return (
      <div>
        <AnswerRow selectedQuestion={selectedQuestion} />
        <button onClick={handleHistoryQuestionsBackClick}>Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <div colSpan="4">History Trivia</div>
      {questions.map((question) => (
        <QuestionRow key={question.id}  setSelectedQuestion={handleQuestionClick} question={question} />
      ))}
      <button onClick={handleHistoryQuestionsBackClick}>Back</button>
    </div>
  );
}