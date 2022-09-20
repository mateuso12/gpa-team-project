import { Info } from '@mui/icons-material'
import {
  Autocomplete,
  InputLabel,
  MenuItem,
  StandardTextFieldProps,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { HTMLInputTypeAttribute } from 'react'
import { Control, Controller } from 'react-hook-form'
import * as Styled from './styles'

interface TextInputProps {
  id?: string
  title: string
  type?: HTMLInputTypeAttribute
  tooltip?: boolean
  tooltipTitle?: string
  name: string
  control: Control
}

export function TextInput({
  title,
  type,
  tooltip = false,
  tooltipTitle = '',
  id,
  name,
  control,
}: TextInputProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
      {tooltip && (
        <Tooltip title={tooltipTitle} placement="right">
          <Info />
        </Tooltip>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            id={id}
            variant="standard"
            sx={{ mr: 1 }}
            fullWidth
            type={type}
            {...field}
          />
        )}
      />
    </Box>
  )
}

interface InputSelectProps extends StandardTextFieldProps {
  id?: string
  title: string
  options: string[]
  name: string
  control: Control
}

export const SelectInput = ({
  id,
  title,
  options,
  name,
  control,
}: InputSelectProps) => (
  <>
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField
            id={id}
            select
            variant="standard"
            sx={{ mr: 1 }}
            helperText=" "
            fullWidth
            onChange={onChange}
            value={value}
          >
            {options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </Box>
  </>
)

export function SwitchToggle({ title, id, name, control }: TextInputProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Styled.StatusBox>
            <Typography>{title}</Typography>

            <Switch id={id} onChange={onChange} />
            {value ? (
              <Typography>Ativo</Typography>
            ) : (
              <Typography>Inativo</Typography>
            )}
          </Styled.StatusBox>
        )}
      />
    </Box>
  )
}

interface SearchMultipleSelectProps {
  id?: string
  title: string
  options: string[]
  name: string
  control: Control
}

export const SearchMultipleSelect = ({
  id,
  title,
  options,
  name,
  control,
}: SearchMultipleSelectProps) => (
  <>
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Autocomplete
            multiple
            id={id}
            options={options}
            filterSelectedOptions
            onChange={(e, newValue) => onChange(newValue)}
            value={value}
            sx={{ width: '30%' }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Lojas"
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        )}
      />
    </Box>
  </>
)
