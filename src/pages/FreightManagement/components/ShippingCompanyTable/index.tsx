import { useState } from 'react'
import { Add, CloudDownload } from '@mui/icons-material'
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  // TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { ModalAddOrEditItem } from '../ModalAddOrEditItem'
import api from '../../../../services/global/api.js'
import * as Styled from './styles'

export function ShippingCompanyTable() {
  // const { data } = useQuery<Freight[]>('freights', async () => {
  //   const response = await api.get('/fulfillment/site/freight')
  //   return response.data
  // })
  const [openCreateModal, setOpenCreateModal] = useState(false)

  function handleClickOpenModal() {
    setOpenCreateModal(true)
  }

  function handleClickCloseModal() {
    setOpenCreateModal(false)
  }

  function handleClickEditFreight() {}

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Typography variant="body2">4 Itens selecionados</Typography>
        </div>
        <div>
          <Styled.DownloadTableButton>
            <CloudDownload /> Baixar Tabela
          </Styled.DownloadTableButton>
          <Styled.CreateButton onClick={handleClickOpenModal}>
            <Add />
            Criar
          </Styled.CreateButton>
        </div>
      </Styled.Header>
      <TableContainer component={Paper} sx={{ border: '1px solid #E0E0E0' }}>
        <Table sx={{ minWidth: 650, borderCollapse: 'collapse' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: '60px' }}>
                <Checkbox color="primary" />
              </TableCell>
              <TableCell>
                <Typography>Cod. Transp.</Typography>
              </TableCell>
              <TableCell>
                <Typography>Nome Transportadora</Typography>
              </TableCell>
              <TableCell>
                <Typography>Tipo Transportadora</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ width: '80px' }}>Loja</Typography>
              </TableCell>
              <TableCell>
                <Typography>Status</Typography>
              </TableCell>
              <TableCell>
                <Typography>Editar</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody sx={{ flex: 1 }}>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>row.content.carrierCode</TableCell>
              <TableCell>row.content.carrierName</TableCell>
              <TableCell>row.content.carrierType</TableCell>
              <TableCell>row.content.siteCode</TableCell>
              <TableCell>row.content.active</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        sx={{ display: 'flex', justifyContent: 'center' }}
        // count={rows.length}
        // rowsPerPage={rowsPerPage}
        // page={page}
        // onPageChange={handleChangePage}
        // onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      <ModalAddOrEditItem
        open={openCreateModal}
        handleClickCloseModal={handleClickCloseModal}
      />
    </Styled.Container>
  )
}
