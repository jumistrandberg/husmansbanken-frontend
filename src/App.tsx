import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  createdAt: string;
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get<Recipe[]>('http://localhost:3000/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Husmansbanken Recipes</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe">
            <h2>{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <div className="recipe-meta">
              <span><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</span>
              <span><strong>Servings:</strong> {recipe.servings}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
