import AppHeader from "./components/AppHeader"
import Dashboard from "./pages/Dashboard"
import './App.css'

const App = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      <AppHeader />

      <main className="px-10">
        <Dashboard />
      </main>
    </div>
  )
}

export default App