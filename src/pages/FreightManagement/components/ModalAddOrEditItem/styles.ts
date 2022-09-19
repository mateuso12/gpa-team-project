import { Box, Button, DialogTitle, styled } from '@mui/material'

export const PaperContainer = styled('div')`
  padding: 55px 55px;
`

export const DialogTitleContainer = styled(DialogTitle)`
  display: flex;

  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding-bottom: 66px;
`

export const StatusBox = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;

  top: 60px;
  left: 260px;
`
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
