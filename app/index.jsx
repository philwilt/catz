import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'

const amountTypes = { SAW_CATS: 'SAW_CATS' }

function amountReducer(state = { amount: 0 }, action) {
  switch(action.type) {
    case amountTypes.SAW_CATS:
      return {
        amount: state.amount + 1
      }

    default:
      return state
  }
}

function sawCats(amount) {
  return {
    type:   amountTypes.SAW_CATS,
    amount: amount
  }
}

const connectAmountToSawCats = connect(({amount}) => ({amount}), {sawCats})

const counterComponent = ({amount, sawCats, ...props}) => {
  return (
    <div>
      <CatsSeen amount={amount} />
      <button className="cat-button" onClick={() => sawCats(1)}>Saw a cat</button>
    </div>
  )
}

const CatCounter = connectAmountToSawCats(counterComponent)

const CatsSeen = ({amount}) => {
  return (
    <h2>
      Ive seen {amount} cats
    </h2>
  )
}

CatsSeen.propTypes = {
  amount: React.PropTypes.number
}

const store = createStore(amountReducer)

ReactDOM.render(
  <Provider store={store}>
    <CatCounter />
  </Provider>,
  document.getElementById('app')
);
