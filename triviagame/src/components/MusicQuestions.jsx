import { useEffect, useState } from 'react';
import { QuestionRow } from './QuestionRow';
import { AnswerRow } from './AnswerRow';

export  function MusicQuestions({ category, handleBackClick }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=Music");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, [category]);

  const handleMusicQuestionsBackClick = () => {
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
        <button onClick={handleMusicQuestionsBackClick}>Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <div colSpan="4">Music Trivia</div>
      {questions.map((question) => (
        <QuestionRow key={question.id}  setSelectedQuestion={handleQuestionClick} question={question} />
      ))}
      <button onClick={handleMusicQuestionsBackClick}>Back</button>
    </div>
  );
}

