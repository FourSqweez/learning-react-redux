import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <>
      <h1>Number of cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>buy cake</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numOfCakes,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
