import type { UseFormRegister, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'

type FormValues = {
  'string-value': string
  'number-value': number
}

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

export const SomeForm = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StringValueInput label='string-value' register={register} />
      <StringValueInput label='number-value' register={register} />
      <input type='submit' />
    </form>
  )
}
