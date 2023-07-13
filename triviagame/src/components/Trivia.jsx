import { useEffect, useState } from 'react';
import TriviaRow from './TriviaRow';

export default function Trivia() {
  const [category , setCategory] = useState([]);

  
  useEffect(() => {
    async function fetchCategory() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=science,film_and_tv,music,history,art_and_literature");
        const data = await response.json();
        setCategory(data); 
        console.log(data);
      } 
      
      catch (error) {
        console.log('Error fetching Category:', error);

      }
    }

    fetchCategory();
  }, []);

  if (!category) {
    return <div>Loading Category...</div>;
  }

  

  return (
    <div>
        <div colSpan="4">Trivia</div>
              {category.map((category) => (
                            <TriviaRow
                            key={category.id}
                            category={category}

                          />
              ))
        }     

    </div>
  );
}

