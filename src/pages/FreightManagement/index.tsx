import { Info, LocalShipping } from '@mui/icons-material'
import { Button, Input, Tooltip, Typography } from '@mui/material'
import { ShippingCompanyTable } from './components/ShippingCompanyTable/index'
import * as Styled from './styles'

export function FreightManagement() {
  return (
    <Styled.Container>
      <Styled.NavTitle>
        <LocalShipping />
        <Typography variant="subtitle1">Gestão de Frete</Typography>
      </Styled.NavTitle>

      <Typography variant="h1">Gestão de Frete</Typography>
      <Styled.SubtitlePage>
        <Typography variant="subtitle1" color="primary">
          Busque pela informação desejada
        </Typography>
        <Tooltip title="Filtre por código de transportadora" placement="right">
          <Info color="primary" />
        </Tooltip>
      </Styled.SubtitlePage>
      <Styled.SearchBox>
        <Typography>Código Transportadora</Typography>
        <Input />
        <Styled.InputSearchButton>Consultar</Styled.InputSearchButton>
        <Button>Limpar</Button>
      </Styled.SearchBox>

      <ShippingCompanyTable />
    </Styled.Container>
  )
}
