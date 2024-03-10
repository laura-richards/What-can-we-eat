import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home.tsx'
import MealDetails from './components/MealDetails.tsx'
import AddAMeal from './components/AddAMeal.tsx'
import { Register } from './components/Register.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/addMeal" element={<AddAMeal />} />
    <Route path="/register" element={<Register />} />
    <Route path="/:id" element={<MealDetails />} />
  </Route>
)
