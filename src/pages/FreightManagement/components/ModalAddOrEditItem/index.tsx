import { Close, LocalShipping } from '@mui/icons-material'
import {
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Switch,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { DialogForm } from './DialogForm'
import * as Styled from './styles'
import { useState } from 'react'

interface AddOrEditItemProps {
  open: boolean
  handleClickCloseModal: () => void
  // handleClickEditModal: (id: string) => void
}

export function ModalAddOrEditItem({
  open,
  handleClickCloseModal,
}: AddOrEditItemProps) {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const [activeFreight, setActiveFreight] = useState(false)

  function toggleActiveFreight() {
    if (!activeFreight) {
      setActiveFreight(true)
    } else {
      setActiveFreight(false)
    }
  }

  return (
    <Dialog
      open={open}
      fullWidth={true}
      fullScreen={fullScreen}
      maxWidth={'lg'}
    >
      <Styled.PaperContainer>
        <Styled.DialogTitleContainer>
          <Typography variant="h1">
            <LocalShipping color="primary" /> Cadastro de Frete
          </Typography>
          <Styled.StatusBox>
            <Typography>Status de Frete:</Typography>
            <Switch onClick={toggleActiveFreight} />
            {activeFreight ? (
              <Typography>Ativo</Typography>
            ) : (
              <Typography>Inativo</Typography>
            )}
          </Styled.StatusBox>
          <IconButton onClick={handleClickCloseModal}>
            <Close />
          </IconButton>
        </Styled.DialogTitleContainer>
        <Divider />
        <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
          <DialogForm />
        </DialogContent>
        <Divider />
        <Styled.FooterButtonsContainer>
          <Styled.CancelButton>Cancelar</Styled.CancelButton>
          <Styled.CreateButton>Concluir</Styled.CreateButton>
        </Styled.FooterButtonsContainer>
      </Styled.PaperContainer>
    </Dialog>
  )
}
