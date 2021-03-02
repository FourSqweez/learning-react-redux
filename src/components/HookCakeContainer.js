import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export default function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  )
}
