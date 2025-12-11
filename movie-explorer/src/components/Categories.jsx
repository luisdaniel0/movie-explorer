import "./Categories.css";

const Categories = ({ movieCategories, handleCategory }) => {
  return (
    <div className="categories">
      <ul>
        {movieCategories.map((category, index) => (
          <li key={index} className="categoryCard">
            <button onClick={() => handleCategory(category.movieCategory)}>
              <span>{category.icon}</span>
              <span>{category.movieCategory}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
