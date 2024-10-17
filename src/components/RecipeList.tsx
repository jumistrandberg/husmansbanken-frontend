"use client"

import { useState, useEffect } from 'react'
import axios from 'axios'
import RecipeCard from './RecipeCard'

interface Recipe {
  id: string
  title: string
  ingredients: string
  instructions: string
  cookingTime: number
  servings: number
  createdAt: string
}

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await axios.get<Recipe[]>(`${apiUrl}/recipes`)
        setRecipes(response.data)
      } catch (error) {
        console.error('Error fetching recipes:', error)
        setError('Failed to fetch recipes. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRecipes()
  }, [])

  if (isLoading) {
    return <div className="text-center py-10">Loading recipes...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">All Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-center">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  )
}