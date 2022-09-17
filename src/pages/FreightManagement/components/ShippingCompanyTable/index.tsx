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
  TableRow,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { ModalAddOrEditItem } from '../ModalAddOrEditItem'
import * as Styled from './styles'

export function ShippingCompanyTable() {
  const [openModal, setOpenModal] = useState(false)

  function handleClickOpenModal() {
    setOpenModal(true)
  }

  function handleClickCloseModal() {
    setOpenModal(false)
  }

  return (
    <Styled.Container>
      <Styled.ButtonsContainer>
        <Styled.DownloadTableButton>
          <CloudDownload /> Baixar Tabela
        </Styled.DownloadTableButton>
        <Styled.CreateButton onClick={handleClickOpenModal}>
          <Add scale={50} />
          Criar
        </Styled.CreateButton>
      </Styled.ButtonsContainer>
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
              <TableCell>123124</TableCell>
              <TableCell>Transportadora 1</TableCell>
              <TableCell>Tecnologia</TableCell>
              <TableCell>1721 </TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>123124</TableCell>
              <TableCell>Transportadora 1</TableCell>
              <TableCell>Tecnologia</TableCell>
              <TableCell>1721 </TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>123124</TableCell>
              <TableCell>Transportadora 1</TableCell>
              <TableCell>Tecnologia</TableCell>
              <TableCell>1721 </TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>123124</TableCell>
              <TableCell>Transportadora 1</TableCell>
              <TableCell>Tecnologia</TableCell>
              <TableCell>1721 </TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>123124</TableCell>
              <TableCell>Transportadora 1</TableCell>
              <TableCell>Tecnologia</TableCell>
              <TableCell>1721 </TableCell>
              <TableCell>Ativo</TableCell>
              <TableCell>
                <IconButton>
                  <img src="/src/assets/edit.svg" alt="" />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <ModalAddOrEditItem
        open={openModal}
        title={'Editar Item Cadastrado'}
        handleClickCloseModal={handleClickCloseModal}
      />
    </Styled.Container>
  )
}
