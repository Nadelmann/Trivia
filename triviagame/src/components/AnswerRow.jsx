import { useState, useEffect } from 'react';

const AnswerRow = ({ selectedQuestion }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);



  const fetchQuestion = async () => {
    try {
      const response = await fetch(`https://the-trivia-api.com/api/questions/${selectedQuestion}`);
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error('Error fetching question:', error);
    }
  };

  useEffect(() => {
    fetchQuestion(selectedQuestion);
  }, [selectedQuestion]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const renderAnswers = () => {
    if (!question) return null;

    const { correctAnswer, incorrectAnswers } = question;
    const allAnswers = [correctAnswer, ...incorrectAnswers];
    const shuffledAnswers = shuffleArray(allAnswers);

    return shuffledAnswers.map((answer, index) => {
      const isCorrect = answer === correctAnswer;
      const answerClass = selectedAnswer === answer ? (isCorrect ? 'correct' : 'incorrect') : '';

      return (
        <button
          key={index}
          className={`answer-button ${answerClass}`}
          onClick={() => handleAnswerClick(answer)}
          disabled={selectedAnswer !== null}
        >
          {answer}
        </button>
      );
    });
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return <div className="answer-row">{renderAnswers()}</div>;
};

export default AnswerRow;
