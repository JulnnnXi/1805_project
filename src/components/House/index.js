import { connect } from 'react-redux'
import UI from './UI'
import store from '@/store'
import action from './action'

const Com = connect(
  (state) => {
    return {
      prolist: state.homedata.prolist,
      houselist: state.House.houselist
    }

  },
  (dispatch) => {
    return {
      getdata () {
        store.dispatch(action.getprolist)
        store.dispatch(action.getbannerlist)
      }

    }
  }
)(UI)

export default Com
