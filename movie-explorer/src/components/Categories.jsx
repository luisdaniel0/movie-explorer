import "./Categories.css";

const Categories = ({ movieCategories }) => {
  console.log(movieCategories);
  return (
    <div className="categories">
      <ul>
        {movieCategories.map((category, index) => (
          <li key={index} className="categoryCard">
            <button>
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
