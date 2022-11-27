import type { UseFormRegister, Path } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './SomeForm.scss'

const formValuesSchema = z.object({
    'string-value': z.string().regex(/^\D+$/, { message: 'the value is not string.' }),
    'number-value': z.string().regex(/^\d+$/, { message: 'the value is not number.' })
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
    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm<FormValues>({ resolver: zodResolver(formValuesSchema) })

    const onSubmit = (data: FormValues) => {
        const content = formValuesSchema.parse(data)
        console.log(content)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <StringValueInput label='string-value' register={register} />
            {(errors['string-value']?.message ?? '') && <p className='error-message'> {errors['string-value']?.message}</p>}
            <NumberValueInput label='number-value' register={register} />
            {(errors['number-value']?.message ?? '') && <p className='error-message'> {errors['number-value']?.message}</p>}
            <input type='submit' />
        </form>
    )
}
