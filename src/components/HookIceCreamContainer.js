import { buyIceCream } from '../redux'
import { useSelector, useDispatch } from 'react-redux'

export default function HookIceCreamContainer() {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h1> Hook Number of iceCream - {numOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  )
}
