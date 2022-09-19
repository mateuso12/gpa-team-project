import { Info } from '@mui/icons-material'
import {
  InputLabel,
  MenuItem,
  StandardTextFieldProps,
  TextField,
  Tooltip,
} from '@mui/material'
import { Box } from '@mui/system'
import { HTMLInputTypeAttribute } from 'react'

interface TextInputProps {
  id?: string
  title: string
  type?: HTMLInputTypeAttribute
  tooltip?: boolean
  tooltipTitle?: string
}

export const TextInput = ({
  title,
  type,
  tooltip = false,
  tooltipTitle = '',
  id,
}: TextInputProps) => (
  <Box sx={{ width: '100%' }}>
    <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
    {tooltip && (
      <Tooltip title={tooltipTitle} placement="right">
        <Info />
      </Tooltip>
    )}
    <TextField
      id={id}
      variant="standard"
      sx={{ mr: 1 }}
      helperText=" "
      fullWidth
      type={type}
    />
  </Box>
)

interface InputSelectProps extends StandardTextFieldProps {
  id?: string
  title: string
  options: string[]
}

export const SelectInput = ({
  id,
  title,
  options,
  ...props
}: InputSelectProps) => (
  <>
    <Box sx={{ width: '100%' }}>
      <InputLabel sx={{ marginBottom: 1 }}> {title} </InputLabel>
      <TextField
        id={id}
        select
        defaultValue={options[0]}
        variant="standard"
        sx={{ mr: 1 }}
        helperText=" "
        fullWidth
        {...props}
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
