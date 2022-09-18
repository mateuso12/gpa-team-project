import { Info } from '@mui/icons-material'
import {
  Autocomplete,
  InputLabel,
  MenuItem,
  TextField,
  Tooltip,
} from '@mui/material'
import { Box } from '@mui/system'
import { HTMLInputTypeAttribute } from 'react'

interface TextInputProps {
  title: string
  type?: HTMLInputTypeAttribute
  tooltip?: boolean
  tooltipTitle?: string
}

const TextInput = ({
  title,
  type,
  tooltip = false,
  tooltipTitle = '',
}: TextInputProps) => (
  <Box sx={{ width: '100%' }}>
    <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
    {tooltip && (
      <Tooltip title={tooltipTitle} placement="right">
        <Info />
      </Tooltip>
    )}
    <TextField
      variant="standard"
      sx={{ mr: 1 }}
      helperText=" "
      fullWidth
      type={type}
    />
  </Box>
)

const SelectInput = ({
  title,
  options,
}: {
  title: string
  options: string[]
}) => (
  <>
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
      <TextField
        select
        defaultValue={options[0]}
        variant="standard"
        sx={{ mr: 1 }}
        helperText=" "
        fullWidth
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  </>
)

export function DialogForm() {
  return (
    <>
      <form>
        <TextField
          placeholder="Utilitário"
          variant="outlined"
          sx={{ minWidth: '30%' }}
        />
        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            marginTop: '20px',
          }}
        >
          <SelectInput
            title="Código da Transportadora"
            options={['teste1', 'teste2', 'teste3']}
          />
          <TextInput title="Nome da Transportadora" />
          <SelectInput
            title="Tipo de Transportadora"
            options={['teste1', 'teste2', 'teste3']}
          />
          <TextInput title="Franquia Km:" type="number" />
        </Box>

        <Box sx={{ display: 'flex', gap: '2rem', marginTop: '20px' }}>
          <TextInput title="Valor de Km após franquia:" type="number" />
          <TextInput title="Valor do pedido:" type="number" />
          <TextInput title="Ajudante:" type="number" />
          <TextInput title="Valor da Diária:" type="number" />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            marginTop: '20px',
          }}
        >
          <SelectInput
            title="Domingo/Feriado:"
            options={['test1', 'test', 'test3']}
          />
          <SelectInput
            title="Domingo/Feriado:"
            options={['test1', 'test', 'test3']}
          />
          <TextInput title="Adicional Noturno a Partir de:" type="time" />
          <div style={{ width: '100%' }} />
        </Box>

        <Autocomplete
          multiple
          id="tags-outlined"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          sx={{ width: '30%' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Lojas"
              InputLabelProps={{ shrink: true }}
            />
          )}
        />
      </form>
    </>
  )
}

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
]
