import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Recipe {
  id: string;
  title: string;
  ingredients: string;
  instructions: string;
  cookingTime: number;
  servings: number;
  createdAt: string;
}

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{recipe.title}</CardTitle>
        <CardDescription>Created at: {new Date(recipe.createdAt).toLocaleDateString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold mb-2">Ingredients:</p>
        <p className="mb-4">{recipe.ingredients}</p>
        <p className="font-semibold mb-2">Instructions:</p>
        <p>{recipe.instructions}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>Cooking Time: {recipe.cookingTime} minutes</div>
        <div>Servings: {recipe.servings}</div>
      </CardFooter>
    </Card>
  )
}