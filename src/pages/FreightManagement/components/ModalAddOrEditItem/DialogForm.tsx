// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Divider, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useForm } from 'react-hook-form'

import {
  SearchMultipleSelect,
  SelectInput,
  SwitchToggle,
  TextInput,
} from './Inputs'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import * as Styled from './styles'

const newFreightFormValidationSchema = zod.object({
  active: zod.boolean(),
  assistant: zod.string(),
  carrierCode: zod.number(),
  carrierName: zod.string().min(1, 'Informe o nome da transportadora'),
  carrierType: zod.string().min(1, 'Informe um tipo de transportadora'),
  dailyValue: zod.string(),
  postFranchiseKmValue: zod.string(),
  kmFranchise: zod.string(),
  nightSurcharge: zod.number(),
  nightSurchargeFrom: zod.string(),
  orderValue: zod.string(),
  sites: zod.array(zod.string()),
  sundayHoliday: zod.number(),
})

type NewFreightData = zod.infer<typeof newFreightFormValidationSchema>

interface DialogFormProps {
  onSuccess: (data: Object) => void
}

export function DialogForm({ onSuccess }: DialogFormProps) {
  const newFreightForm = useForm<NewFreightData>({
    resolver: zodResolver(newFreightFormValidationSchema),
    defaultValues: {
      active: false,
    },
  })

  const { handleSubmit, control } = newFreightForm

  return (
    <>
      <form onSubmit={handleSubmit(onSuccess)}>
        <SwitchToggle
          id="active-switch"
          name="active"
          title="Status do frete:"
          control={control}
        />
        <Divider />
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
            id="carrier-code-select"
            title="Código da Transportadora"
            options={[1, 2, 3]}
            name={'carrierCode'}
            control={control}
          />
          <TextInput
            id="carrier-name-field"
            title="Nome da Transportadora"
            name={'carrierName'}
            control={control}
          />
          <SelectInput
            id="carrier-type-select"
            title="Tipo de Transportadora"
            options={['teste1', 'teste2', 'teste3']}
            name={'carrierType'}
            control={control}
          />
          <TextInput
            id="km-franchise-field"
            title="Franquia Km:"
            type="number"
            name={'kmFranchise'}
            control={control}
          />
        </Box>

        <Box sx={{ display: 'flex', gap: '2rem', marginTop: '20px' }}>
          <TextInput
            id="post-franchise-km-value-field"
            title="Valor de Km após franquia:"
            type="number"
            name={'postFranchiseKmValue'}
            control={control}
          />
          <TextInput
            id="order-value-field"
            title="Valor do pedido:"
            type="number"
            name={'orderValue'}
            control={control}
          />
          <TextInput
            id="assistant-field"
            title="Ajudante:"
            type="number"
            name={'assistant'}
            control={control}
          />
          <TextInput
            id="daily-value-field"
            title="Valor da Diária:"
            type="number"
            name={'dailyValue'}
            control={control}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '2rem',
            marginTop: '20px',
          }}
        >
          <SelectInput
            id="sunday-holiday-select"
            title="Domingo/Feriado:"
            options={[10, 20, 30]}
            name={'sundayHoliday'}
            control={control}
          />
          <SelectInput
            id="night-surcharge-select"
            title="Adicional Noturno:"
            options={[10, 20, 30]}
            name={'nightSurcharge'}
            control={control}
          />
          <TextInput
            id="night-surcharge-from-field"
            title="Adicional Noturno a Partir de:"
            type="time"
            name={'nightSurchargeFrom'}
            control={control}
          />
          <div style={{ width: '100%' }} />
        </Box>

        <SearchMultipleSelect
          id="sites-multiple-select"
          name="sites"
          control={control}
          options={['teste1', 'teste2', 'teste3']}
        />

        <Styled.FooterButtonsContainer>
          <Styled.CancelButton id="cancel-freight-button">
            Cancelar
          </Styled.CancelButton>
          <Styled.CreateButton id="submit-freight-button" type="submit">
            Concluir
          </Styled.CreateButton>
        </Styled.FooterButtonsContainer>
      </form>
    </>
  )
}
