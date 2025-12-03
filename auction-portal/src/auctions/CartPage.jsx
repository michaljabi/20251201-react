import { useSelector } from 'react-redux'
import { selectAllItems } from './cart/cartSlice.js'

export function CartPage() {

  const items = useSelector(selectAllItems)

  return (
    <div>
      CartPage
      {
        JSON.stringify(items)
      }
    </div>
  )
}
