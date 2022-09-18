import { Box, Button, styled } from '@mui/material'

export const Container = styled(Box)`
  padding: 80px 35px 9px 75px;

  h1 {
    margin-top: 30px;
  }
`
export const NavTitle = styled('div')`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  margin-left: 1rem;
`
export const SubtitlePage = styled('div')`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  margin-top: 37px;
`
export const SearchBox = styled(Box)`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;

  margin-top: 22px;

  button {
    color: #66605e;
  }
`

export const InputSearchButton = styled(Button)`
  display: flex;
  align-items: center;

  height: 36px;
  border: 1px solid #66605e;

  margin-left: 5px;
`
