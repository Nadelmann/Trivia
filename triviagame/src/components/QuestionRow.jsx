export default function QuestionRow({ setSelectedQuestion, questions }) {
  return (
    <table>
      <tbody>
        <tr
          className='List'
          onClick={() => {
            setSelectedQuestion(questions.id);
          }}
          key={questions.id}>

          <td>{questions.question}</td>
        </tr>
      </tbody>
    </table>
  );
}
