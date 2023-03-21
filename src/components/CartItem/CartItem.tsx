import { Purchase } from 'src/types/purchase.type'
import { formatCurrency } from 'src/utils/utils'

interface Props {
  purchase: Purchase
}

const CartItem = ({ purchase }: Props) => {
  return (
    <div className='mt-4 flex hover:bg-gray-100'>
      <div className='flex-shrink-0'>
        <img src={purchase.product.image} alt={purchase.product.name} className='h-11 w-11 object-cover' />
      </div>
      <div className='ml-2 flex-grow overflow-hidden'>
        <div className='truncate'>{purchase.product.name}</div>
      </div>
      <div className='ml-2 flex-shrink-0'>
        <span className='text-orange'>{formatCurrency(purchase.product.price)}</span>
      </div>
    </div>
  )
}

export default CartItem
