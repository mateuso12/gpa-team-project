import { Autocomplete, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'

import { SelectInput, TextInput } from './Inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newFreightFormValidationSchema = zod.object({
  active: zod.boolean(),
  assistant: zod.number(),
  carrierCode: zod.number(),
  carrierName: zod.string().min(1, 'Informe o nome da transportadora'),
  carrierType: zod.string().min(1, 'Informe um tipo de transportadora'),
  dailyValue: zod.number(),
  kmFranchise: zod.number(),
  nightSurcharge: zod.number(),
  nightSurchargeFrom: zod.string(),
  orderValue: zod.number(),
  site: zod.object({
    id: zod.number(),
    storeId: zod.string(),
  }),
  sundayHoliday: zod.number(),
  valuePerOrder: zod.number(),
})

type NewFreightData = zod.infer<typeof newFreightFormValidationSchema>

export function DialogForm() {
  const newFreightForm = useForm<NewFreightData>({
    resolver: zodResolver(newFreightFormValidationSchema),
  })

  const { register } = newFreightForm

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
            id="carrierCode"
            title="Código da Transportadora"
            options={['teste1', 'teste2', 'teste3']}
          />
          <TextInput id="carrierName" title="Nome da Transportadora" />
          <SelectInput
            id="carrierType"
            title="Tipo de Transportadora"
            options={['teste1', 'teste2', 'teste3']}
          />
          <TextInput id="kmFranchise" title="Franquia Km:" type="number" />
        </Box>

        <Box sx={{ display: 'flex', gap: '2rem', marginTop: '20px' }}>
          <TextInput
            id="postFranchiseKmValue"
            title="Valor de Km após franquia:"
            type="number"
          />
          <TextInput id="orderValue" title="Valor do pedido:" type="number" />
          <TextInput id="assistant" title="Ajudante:" type="number" />
          <TextInput id="dailyValue" title="Valor da Diária:" type="number" />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            marginTop: '20px',
          }}
        >
          <SelectInput
            id="sundayHoliday"
            title="Domingo/Feriado:"
            options={['test1', 'test', 'test3']}
          />
          <SelectInput
            id="nightSurcharge"
            title="Adicional Noturno:"
            options={['test1', 'test', 'test3']}
          />
          <TextInput
            id="nightSurchargeFrom"
            title="Adicional Noturno a Partir de:"
            type="time"
          />
          <div style={{ width: '100%' }} />
        </Box>

        <Autocomplete
          multiple
          id="site"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          filterSelectedOptions
          sx={{ width: '30%' }}
          {...register('site')}
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
