import { useEffect, useState } from 'react';
import QuestionRow from './QuestionRow';
import AnswerRow from './AnswerRow';

export default function MovieQuestions({ category, handleBackClick }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=film_and_tv");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.log('Error fetching questions:', error);
      }
    }

    fetchQuestions();
  }, [category]);

  const handleMovieQuestionsBackClick = () => {
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

    const selectedQuestionData = questions.find(question => question.id === selectedQuestion);

    return (
      <div>
        <AnswerRow
          correctAnswer={selectedQuestionData.correct_answer}
          incorrectAnswers={selectedQuestionData.incorrect_answers}
        />
        <button onClick={handleMovieQuestionsBackClick}>Back</button>
      </div>
    );
  }
  
  return (
    <div>
      <div colSpan="4">Film and TV Trivia</div>
      {questions.map((question) => (
        <QuestionRow key={question.id}  setSelectedQuestion={handleQuestionClick} question={question} />
      ))}
      <button onClick={handleMovieQuestionsBackClick}>Back</button>
    </div>
  );
}
