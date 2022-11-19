import type { UseFormRegister, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './SomeForm.scss'

// バリデーション方法がイケてないかも。
const formValuesSchema = z.object({
  'string-value': z.string().regex(/^\D+$/),
  'number-value': z.string().regex(/^\d+$/)
})

type FormValues = z.infer<typeof formValuesSchema>

type InputProps = {
  label: Path<FormValues>
  register: UseFormRegister<FormValues>
}

const StringValueInput = ({ label, register }: InputProps): JSX.Element => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label)}></input>
    </>
  )
}

const NumberValueInput = ({ label, register }: InputProps): JSX.Element => {
  return (
    <>
      <label>{label}</label>
      <input {...register(label)}></input>
    </>
  )
}

export const SomeForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => {
    const content = formValuesSchema.parse(data)
    console.log(content)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StringValueInput label='string-value' register={register} />
      <NumberValueInput label='number-value' register={register} />
      <input type='submit' />
    </form>
  )
}
