import { useSelector } from 'react-redux'

export default function HookCakeContainer() {
  const numberOfCakes = useSelector((state) => state.numOfCakes)
  return (
    <div>
      <h1>Number of cakes - {numberOfCakes}</h1>
      <button>buy cake</button>
    </div>
  )
}

