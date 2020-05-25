import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {popupShow} from './../store/actions/popupActions';
// import * as booleanActions from './../store/actions/popupActions';
// import * as actions from './../store/actions/popupActions';
import { proposalChangeStep } from './../store/actions/proposalActions';
import { WorkStep } from '../components/WorkStep/WorkStep';

const mapStateToProps = (state) => {
   return {
      boolean: state.popupReducer
   }
};

const mapDispatchToProps = dispatch => {
   // const { popupShow } = bindActionCreators(actions, dispatch);
   return {
      popupShow: () => {
         dispatch (popupShow());
         dispatch (proposalChangeStep (1));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkStep);