import { Close } from '@mui/icons-material'
import {
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Input,
  InputLabel,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import * as Styled from './styles'

interface AddOrEditItemProps {
  open: boolean
  title: string
  handleClickCloseModal: () => void
}

export function ModalAddOrEditItem({
  open,
  title,
  handleClickCloseModal,
}: AddOrEditItemProps) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Styled.ModalContainer open={open} fullScreen={fullScreen}>
      <>
        <Styled.PaperContainer>
          <DialogTitle>
            <Typography>{title}</Typography>
            <Typography>Status de Frete</Typography>
            <Switch />
            <Typography>Ativo</Typography>
            <Typography>Inativo</Typography>
            <IconButton onClick={handleClickCloseModal}>
              <Close />
            </IconButton>
          </DialogTitle>
          <Divider />
          <DialogContent>
            <Input placeholder="Utilitário" />
            <InputLabel>Código da Transportadora</InputLabel>
          </DialogContent>
        </Styled.PaperContainer>
      </>
    </Styled.ModalContainer>
  )
}
