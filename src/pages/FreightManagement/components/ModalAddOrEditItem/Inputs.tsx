import { Info } from '@mui/icons-material'
import {
  Autocomplete,
  InputLabel,
  MenuItem,
  StandardTextFieldProps,
  Switch,
  TextField,
  Tooltip,
} from '@mui/material'
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
    <Styled.InputWrapper>
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
    </Styled.InputWrapper>
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
  <Styled.InputWrapper>
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
  </Styled.InputWrapper>
)

export function SwitchToggle({ title, id, name, control }: TextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <>
          <Styled.ToggleLabel>{title}</Styled.ToggleLabel>

          <Switch id={id} onChange={onChange} />
          <Styled.ToggleStatus>
            {value ? 'Ativo' : 'Inativo'}
          </Styled.ToggleStatus>
        </>
      )}
    />
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
  <Styled.InputWrapper>
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
  </Styled.InputWrapper>
)
