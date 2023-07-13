export default function TriviaRow({ setSelectedCategory, category }) {
    return (
      <table>
        <tbody>
          <tr
            className='List'
            onClick={() => {
              setSelectedCategory(category.id);
            }}
            key={category.id}>
  
            <td>{category.category}</td>
          </tr>
        </tbody>
      </table>
    );
  }
  