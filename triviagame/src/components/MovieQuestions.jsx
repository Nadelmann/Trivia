import { useEffect, useState } from 'react';

export default function MovieQuestions() {
  const [questions, setQuestions] = useState([]);

  
  useEffect(() => {

    const fetchQuestions = async () => {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=50&category=11");
        const data = await response.json();
        setQuestions(data); 
        console.log(data);
      } 
      
      catch (error) {
        console.log('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  if (!questions) {
    return <div>Loading Questions...</div>;
  }

  

  return (
    <div>

            <p className='List' onClick={()=>{ setFeatQuest(questions.id)}} key={questions.id}> {puppy.name}
            </p>
            

    </div>
  );
}
