
export  function TriviaRow({ setSelectedCategory, category }) {
  const handleCategoryClick = () => {
    setSelectedCategory(category);
  }
  
  return (
    <table>
      <tbody>
        <tr
          className='List'
          onClick={handleCategoryClick}
          key={category.id}>
          <td>{category.category}</td>
        </tr>
      </tbody>
    </table>
  );
}
