import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { FreightManagement } from './pages/FreightManagement'
import { Home } from './pages/Home'
import { Search } from './pages/Search'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" />
        <Route path="/freightManagement" element={<FreightManagement />} />
        <Route path="/logout" />
      </Route>
    </Routes>
  )
}
