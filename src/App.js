import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import HookIceCreamContainer from './components/HookIceCreamContainer'
import IceCreamContainer from './components/IceCreamContainer'
import ItemsContainer from './components/ItemsContainer'
import NewCakeContainer from './components/NewCakeContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemsContainer cake />
        <ItemsContainer iceCream/>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App
