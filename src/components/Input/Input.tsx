import type { UseFormRegister, RegisterOptions } from 'react-hook-form'
interface Props {
  type: React.HTMLInputTypeAttribute
  errorMessage?: string
  placeholder?: string
  className?: string
  name: string
  register: UseFormRegister<any>
  rules?: RegisterOptions
  autoComplete?: string
}
const Input = ({ type, autoComplete, name, register, className, errorMessage, placeholder, rules }: Props) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        {...register(name, rules)}
      />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errorMessage}</div>
    </div>
  )
}

export default Input
