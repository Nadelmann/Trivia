import { useEffect, useState } from 'react';
import TriviaRow from './TriviaRow';
import MovieQuestions from './MovieQuestions';
import ScienceQuestions from './ScienceQuestions';
import HistoryQuestions from './HistoryQuestions';
import MusicQuestions from './MusicQuestions';
import ArtsQuestions from './ArtsQuestions';

export default function Trivia() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch("https://the-trivia-api.com/api/questions?categories=science,film_and_tv,music,history,art_and_literature");
        const data = await response.json();
        const uniqueCategories = data.filter(
          (category, index, self) =>
            index ===
            self.findIndex((c) => c.id === category.id)
        );
        setCategories(uniqueCategories);
        console.log(uniqueCategories);
      } catch (error) {
        console.log('Error fetching categories:', error);
      }
    }

    fetchCategories();
  }, []);

  if (!categories) {
    return <div>Loading categories...</div>;
  }

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    const categoryName = selectedCategory.category;
    let selectedComponent;

    if (categoryName === "Film & TV") {
      selectedComponent = <MovieQuestions category={selectedCategory} handleBackClick={handleBackClick} />
    } else if (categoryName === "Science") {
      selectedComponent = <ScienceQuestions category={selectedCategory} handleBackClick={handleBackClick} />
    } else if  (categoryName === "Music") {
      selectedComponent = <MusicQuestions category={selectedCategory} handleBackClick={handleBackClick} />
    } else if  (categoryName === "History") {
      selectedComponent = <HistoryQuestions category={selectedCategory} handleBackClick={handleBackClick} />
    } else if  (categoryName === "art_and_literature") {
      selectedComponent = <ArtsQuestions category={selectedCategory} handleBackClick={handleBackClick} />  
    } else {
      selectedComponent = <div>No Questions Available</div>;
    }
    return (
      <div>
        {selectedComponent}
    </div>
  );
}

  return (
    <div>
      <div colSpan="4">Trivia</div>
      {categories.map((category) => (
        <TriviaRow
          key={category.id}
          setSelectedCategory={setSelectedCategory}
          category={category}
        />
      ))}
    </div>
  );
}
