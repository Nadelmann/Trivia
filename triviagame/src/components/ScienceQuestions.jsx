import { useEffect, useState } from 'react';
import QuestionRow from './QuestionRow';


export default function ScienceQuestions() {
  const [questions, setQuestions] = useState([]);

  
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=science");
        const data = await response.json();
        setQuestions(data); 
        console.log(data);
      } 
      
      catch (error) {
        console.log('Error fetching questions:', error);

      }
    }

    fetchQuestions();
  }, []);

  if (!questions) {
    return <div>Loading Questions...</div>;
  }

  

  return (
    <div>
        <div className='Header' colSpan="4"></div>
              {questions.map((questions) => (
                            <QuestionRow
                            key={questions.id}
                            questions={questions}
                          />
              ))
        }     

    </div>
  );
}
