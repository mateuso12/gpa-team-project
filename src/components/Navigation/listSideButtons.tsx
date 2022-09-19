import { ExitToApp, LocalShipping, Search, Store } from '@mui/icons-material'
import {
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { SideBarButton } from './styles'

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
        <SideBarButton to="/search">
          <ListItemButton sx={listItemButtonStyleProps}>
            <ListItemIcon sx={listItemIconStyleProps}>
              <Search />
            </ListItemIcon>
            <Input placeholder="Pesquisar..." sx={listItemTextStyleProps} />
          </ListItemButton>
        </SideBarButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <SideBarButton to="/home">
          <ListItemButton sx={listItemButtonStyleProps}>
            <ListItemIcon sx={listItemIconStyleProps}>
              <Store />
            </ListItemIcon>
            <ListItemText primary="Tela Inicial" sx={listItemTextStyleProps} />
          </ListItemButton>
        </SideBarButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <SideBarButton to="/cart">
          <ListItemButton sx={listItemButtonStyleProps}>
            <ListItemIcon sx={listItemIconStyleProps}>
              <img src="/src/assets/cart.svg" alt="Carrinho de compras" />
            </ListItemIcon>
            <ListItemText
              primary="Status da compra"
              sx={listItemTextStyleProps}
            />
          </ListItemButton>
        </SideBarButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <SideBarButton to="/freight">
          <ListItemButton sx={listItemButtonStyleProps}>
            <ListItemIcon sx={listItemIconStyleProps}>
              <LocalShipping />
            </ListItemIcon>
            <ListItemText
              primary="Gestão de Frete"
              sx={listItemTextStyleProps}
            />
          </ListItemButton>
        </SideBarButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <SideBarButton to="/logout">
          <ListItemButton sx={listItemButtonStyleProps}>
            <ListItemIcon sx={listItemIconStyleProps}>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Tela Inicial" sx={listItemTextStyleProps} />
          </ListItemButton>
        </SideBarButton>
      </ListItem>
    </List>
  )
}
