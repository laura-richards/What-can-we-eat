import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home.tsx'
import MealDetails from './components/MealDetails.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path='/:id' element={<MealDetails />} />
  </Route>
)
