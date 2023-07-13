import './App.css';
import { useState } from 'react';
import MovieQuestions from "./components/MovieQuestions";
import SelectedQuestion from './components/SelectedQuestion';


export default function App() {
  const [selectedQuestionId, setSelectedQuestion] = useState(null);

  return (
    <>
      {selectedQuestionId ? (
        <SelectedQuestion selectedContactId={selectedQuestionId} 
        setSelectedContactId={setSelectedQuestion}/>
      ) : (
      <MovieQuestions setSelectedQuestion={setSelectedQuestion}/>
      )}
    </>
  );
}