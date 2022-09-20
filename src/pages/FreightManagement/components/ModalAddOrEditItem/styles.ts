import {
  Box,
  Button,
  DialogTitle,
  styled,
  Typography,
  Divider as MuiDivider,
  TextField as MuiTextField,
} from '@mui/material'

export const PaperContainer = styled('div')`
  padding: 55px 55px;
  overflow-y: hidden;
`

export const DialogTitleContainer = styled(DialogTitle)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  height: 100%;
`

export const ToggleContainer = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: center;

  margin-right: 4rem;
`
export const ToggleStatus = styled(Typography)`
  width: 2rem;
`
export const TextFieldDisabled = styled(MuiTextField)`
  width: 30%;
  margin-bottom: 3rem;
`

export const ToggleLabel = styled(Typography)(
  ({ theme }) => `
  font-size: 1rem;
  line-height: 26px;
  letter-spacing: 0.15px;
  font-weight: 500;
  color: ${theme.palette.grey['600']}

  margin-right: 0.75rem;
`,
)

export const FooterButtonsContainer = styled('footer')`
  display: flex;
  width: 100%;

  justify-content: space-between;
`

const ButtonBase = styled(Button)(
  ({ theme }) => `
  display: flex;
  width: 286px;
  height: 54px;
  
  border-radius: 8px;
  margin-top: 42px;
  `,
)

export const CreateButton = styled(ButtonBase)(
  ({ theme }) => `
    color: white;
  background: ${theme.palette.primary.main};
  &:hover {
    background: #0062a3;
  }
  `,
)
export const CancelButton = styled(ButtonBase)(
  ({ theme }) => `
  border: 0.5px solid ${theme.palette.grey};
  box-shadow: 0 1px 5px rgba(0,0,0,0.4);
`,
)

export const InputWrapper = styled(Box)`
  margin-bottom: 2rem;
  width: 100%;
`
export const FormRow = styled(Box)`
  display: flex;
  gap: 3rem;
`

export const FormBodyContainer = styled(Box)`
  overflow-y: auto;
  overflow-x: hidden;

  max-height: 25rem;
  padding-top: 2rem;
`
