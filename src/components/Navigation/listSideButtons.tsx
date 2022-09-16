import { ExitToApp, LocalShipping, Search, Store } from '@mui/icons-material'
import {
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { NavLink } from 'react-router-dom'

interface ListButtonsProps {
  open: Boolean
}

export function ListSideButtons({ open }: ListButtonsProps) {
  const listItemButtonStyleProps = {
    minHeight: 63,
    justifyContent: open ? 'initial' : 'center',
    px: 2.5,
  }

  const listItemIconStyleProps = {
    minWidth: 0,
    mr: open ? 3 : 'auto',
    justifyContent: 'center',
  }

  const listItemTextStyleProps = {
    opacity: open ? 1 : 0,
  }

  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={listItemButtonStyleProps}>
          <NavLink to="/search">
            <ListItemIcon sx={listItemIconStyleProps}>
              <Search />
            </ListItemIcon>
          </NavLink>
          <Input placeholder="Pesquisar..." sx={listItemTextStyleProps} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={listItemButtonStyleProps}>
          <NavLink to="/">
            <ListItemIcon sx={listItemIconStyleProps}>
              <Store />
            </ListItemIcon>
          </NavLink>
          <ListItemText primary="Tela Inicial" sx={listItemTextStyleProps} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={listItemButtonStyleProps}>
          <NavLink to="/cart">
            <ListItemIcon sx={listItemIconStyleProps}>
              <img src="/src/assets/cart.svg" alt="Carrinho de compras" />
            </ListItemIcon>
          </NavLink>
          <ListItemText
            primary="Status da compra"
            sx={listItemTextStyleProps}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={listItemButtonStyleProps}>
          <NavLink to="/freightManagement">
            <ListItemIcon sx={listItemIconStyleProps}>
              <LocalShipping />
            </ListItemIcon>
          </NavLink>
          <ListItemText primary="Gestão de Frete" sx={listItemTextStyleProps} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={listItemButtonStyleProps}>
          <NavLink to="/logout">
            <ListItemIcon sx={listItemIconStyleProps}>
              <ExitToApp />
            </ListItemIcon>
          </NavLink>
          <ListItemText primary="Tela Inicial" sx={listItemTextStyleProps} />
        </ListItemButton>
      </ListItem>
    </List>
  )
}
