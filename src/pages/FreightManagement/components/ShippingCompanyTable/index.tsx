// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState, useContext } from 'react'
import { Add, CloudDownload } from '@mui/icons-material'
import {
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material'
import { ModalAddOrEditItem } from '../ModalAddOrEditItem'
import * as Styled from './styles'
import { GpaContext } from '../../../../providers/gpa'
import { Freight } from '../../../../interfaces/gpa/freight'
import editIcon from '../../../../assets/edit.svg'

export function ShippingCompanyTable() {
  const gpaContext = useContext(GpaContext)
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    gpaContext.loadFreights()
  }, [])

  function handleClickOpenCreateFreightModal() {
    gpaContext.setAction({ id: gpaContext.ACTIONS.CREATE_FREIGHT })
    setOpenModal(true)
  }

  function handleClickOpenEditFreightModal(id: string) {
    gpaContext.setAction({
      id: gpaContext.ACTIONS.UPDATE_FREIGHT,
      data: {
        freightId: id,
      },
    })
    setOpenModal(true)
  }

  function handleClickCloseFreightModal() {
    setOpenModal(false)
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <div>
          <Typography variant="body1">4 Itens selecionados</Typography>
        </div>
        <div>
          <Styled.DownloadTableButton>
            <CloudDownload /> Baixar Tabela
          </Styled.DownloadTableButton>
          <Styled.CreateButton
            id="create-freight-button"
            onClick={handleClickOpenCreateFreightModal}
          >
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

          <TableBody sx={{ flex: 1, height: 300 }}>
            {gpaContext?.freights?.content?.map((freight: Freight) => {
              return (
                <TableRow key={freight.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{freight.carrierCode}</TableCell>
                  <TableCell>{freight.carrierName}</TableCell>
                  <TableCell>{freight.carrierType}</TableCell>
                  <TableCell>{freight.siteCode}</TableCell>
                  {freight.active ? (
                    <TableCell>
                      <Typography color="secondary">Ativo</Typography>
                    </TableCell>
                  ) : (
                    <TableCell>Inativo</TableCell>
                  )}
                  <TableCell>
                    <IconButton
                      onClick={() =>
                        handleClickOpenEditFreightModal(freight.id)
                      }
                    >
                      <img src={editIcon} alt="" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          sx={{ display: 'flex', justifyContent: 'center' }}
          count={10}
          rowsPerPage={10}
          labelRowsPerPage="Itens por página"
          page={1}
          // onPageChange={handleChangePage}
          // onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableFooter>
      <ModalAddOrEditItem
        open={openModal}
        handleClickCloseModal={handleClickCloseFreightModal}
      />
    </Styled.Container>
  )
}
