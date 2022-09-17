import { Button, styled } from '@mui/material'

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow: auto;

  margin-top: 10px;
`

export const ButtonsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 17px;
`

const ButtonBase = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  letter-spacing: 1.25px;

  height: 36px;
  margin-bottom: 10px;
  gap: 0.5rem;

  border-radius: 4px;
`

export const DownloadTableButton = styled(ButtonBase)`
  background: #004878;

  &:hover {
    background: #0062a3;
  }
`
export const CreateButton = styled(ButtonBase)`
  background: #409a3c;

  &:hover {
    background: #54ba4f;
  }
`
