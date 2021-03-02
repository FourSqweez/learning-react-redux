import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return (
    <>
      <h1>Number of Ice cream - {props.numberOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>buy ice cream</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numOfIceCreams,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
