import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import HookIceCreamContainer from './components/HookIceCreamContainer'
import IceCreamContainer from './components/IceCreamContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
      </div>
    </Provider>
  )
}

export default App
