import { useEffect, useState } from 'react';
import QuestionRow from './QuestionRow';
import AnswerRow from './AnswerRow';

export default function ScienceQuestions({ category, handleBackClick }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=Science");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, [category]);

  const handleScienceQuestionsBackClick = () => {
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
        <button onClick={handleScienceQuestionsBackClick}>Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <div colSpan="4">Science Trivia</div>
      {questions.map((question) => (
        <QuestionRow key={question.id}  setSelectedQuestion={handleQuestionClick} question={question} />
      ))}
      <button onClick={handleScienceQuestionsBackClick}>Back</button>
    </div>
  );
}

