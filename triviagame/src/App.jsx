import './App.css';
import { useState } from 'react';
import SelectedCategory from './components/TriviaRow.jsx';
import Trivia from './components/Trivia';



export default function App() {
  const [selectedCategoryId, setSelectedCategory] = useState(null);

  return (
    <>
      {selectedCategoryId ? (
        <SelectedCategory selectedCategoryId={selectedCategoryId} 
        setSelectedCategory={setSelectedCategory}/>
      ) : (
      <Trivia setSelectedCategory={setSelectedCategory}/>
      )}
    </>
  );
}