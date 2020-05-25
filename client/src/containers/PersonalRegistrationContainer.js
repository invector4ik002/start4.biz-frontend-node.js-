import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as booleanActions from './../store/actions/popupActions';
import * as actions from '../store/actions/popupActions';
import { PersonalRegistration } from '../components/PersonalRegistration/PersonalRegistration';

const mapStateToProps = (state) => {
   return {
      boolean: state.popupReducer
   }
};

const mapDispatchToProps = dispatch => {
   const { popupShow } = bindActionCreators(actions, dispatch);
   return {
      popupShow
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalRegistration);