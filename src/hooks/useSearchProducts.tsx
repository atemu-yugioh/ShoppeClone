import { Schema, schema } from 'src/utils/rules'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import useQueryConfig from './useQueryConfig'
import { useNavigate } from 'react-router'
import { omit } from 'lodash'
import { createSearchParams } from 'react-router-dom'
import path from 'src/constants/path'

type FormData = Pick<Schema, 'name'>
const nameSchema = schema.pick(['name'])

const useSearchProducts = () => {
  const queryConfig = useQueryConfig()
  const { handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(nameSchema)
  })
  const navigate = useNavigate()

  const onSubmitSearch = handleSubmit((data) => {
    const config = queryConfig.order
      ? omit(
          {
            ...queryConfig,
            name: data.name
          },
          ['order', 'sort_by']
        )
      : {
          ...queryConfig,
          name: data.name
        }
    navigate({
      pathname: path.home,
      search: createSearchParams(config).toString()
    })
  })
  return { onSubmitSearch, register }
}

export default useSearchProducts
