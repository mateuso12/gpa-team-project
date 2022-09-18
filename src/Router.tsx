import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Cart } from './pages/Cart'
import { FreightManagement } from './pages/FreightManagement/index'
import { Home } from './pages/Home'
import { Logout } from './pages/Logout'
import { Search } from './pages/Search'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/search" element={<Search />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/freightManagement" element={<FreightManagement />} />
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  )
}
