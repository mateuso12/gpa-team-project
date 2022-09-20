// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Close, LocalShipping } from '@mui/icons-material'
import {
  Alert,
  Dialog,
  DialogContent,
  IconButton,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { DialogForm } from './DialogForm'
import * as Styled from './styles'
import { useContext, useState } from 'react'
import { GpaContext } from '../../../../providers/gpa'

interface AddOrEditItemProps {
  open: boolean
  handleClickCloseModal: () => void
}

export function ModalAddOrEditItem({
  open,
  handleClickCloseModal,
}: AddOrEditItemProps) {
  const [openSuccessSnackbar, setOpenSuccessSnackbar] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const gpaContext = useContext(GpaContext)

  async function handleSubmitFreight(payload: Object) {
    try {
      gpaContext.postFreight(payload)
      handleClickCloseModal()
      setOpenSuccessSnackbar(true)
    } catch (err) {}
    // if (status === 200) {
    // }
  }

  return (
    <>
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
            <IconButton onClick={handleClickCloseModal}>
              <Close />
            </IconButton>
          </Styled.DialogTitleContainer>
          <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
            <DialogForm onSuccess={handleSubmitFreight} />
          </DialogContent>
        </Styled.PaperContainer>
      </Dialog>
      <Snackbar
        open={openSuccessSnackbar}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={() => setOpenSuccessSnackbar(false)}
      >
        <Alert
          id="post-freight-success"
          onClose={() => setOpenSuccessSnackbar(false)}
          severity="success"
          color="secondary"
          sx={{ width: '100%' }}
        >
          Cadastro criado com Sucesso!
        </Alert>
      </Snackbar>
    </>
  )
}
