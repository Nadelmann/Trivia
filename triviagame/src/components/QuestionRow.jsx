export default function QuestionRow({ setSelectedQuestion, question }) {
  return (
    <table>
      <tbody>
        <tr
          className='List'
          onClick={() => {
            setSelectedQuestion(question.id);
          }}
          key={question.id}>

          <td>{question.question}</td>
        </tr>
      </tbody>
    </table>
  );
}
