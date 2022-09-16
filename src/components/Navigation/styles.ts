import { styled } from '@mui/material/styles'
import { Box, Avatar } from '@mui/material'

export const HeaderContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  position: fixed;

  width: 100%;

  height: 4rem;

  /* align-items: space-between; */
  justify-content: space-between;

  img {
    width: 55px;
    height: 63px;
    margin: 0 auto;
  }

  > div {
    display: flex;

    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-right: 4rem;
  }

  a,
  button {
    padding: 0;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
`
export const UserImage = styled(Avatar)`
  height: 26px;
  width: 26px;
`
