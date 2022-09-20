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
        <Route path="/pesquisa" element={<Search />} />
        <Route path="/tela-inicial" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/frete" element={<FreightManagement />} />
        <Route path="/sair" element={<Logout />} />
      </Route>
    </Routes>
  )
}
