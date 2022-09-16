import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material'
import { MouseEvent, useState } from 'react'
import { UserImage, HeaderContainer } from './styles'

export function NavItems() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  return (
    <>
      <HeaderContainer>
        <img src="src/assets/logo.svg" alt="Motoqueiro com baú" />
        <div>
          <UserImage alt="Imagem do usuário">MS</UserImage>
          <Typography>Mateus</Typography>

          <IconButton
            onClick={(e: MouseEvent<HTMLElement>) =>
              setAnchorEl(e.currentTarget)
            }
          >
            {!open ? <ExpandMore /> : <ExpandLess />}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>Editar Perfil</MenuItem>
            <MenuItem>Configurações</MenuItem>
          </Menu>
          <Divider
            orientation="vertical"
            color="white"
            sx={{ height: '16px' }}
          />
          <Link>Sair</Link>
        </div>
      </HeaderContainer>
    </>
  )
}
