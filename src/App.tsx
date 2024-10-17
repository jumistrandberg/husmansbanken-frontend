import RecipeList from './components/RecipeList'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Husmansbanken Recipes</h1>
        </div>
      </header>
      <main>
        <RecipeList />
      </main>
    </div>
  )
}