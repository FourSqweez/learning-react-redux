import { Provider } from 'react-redux'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HookCakeContainer from './components/HookCakeContainer'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  )
}

export default App
