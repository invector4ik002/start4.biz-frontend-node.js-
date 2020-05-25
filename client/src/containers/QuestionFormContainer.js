import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booleanActions from '../store/actions/popupActions';
import { QuestionForm } from '../components/QuestionForm/QuestionForm';

const mapStateToProps = (state) => { 
   return {
      isHidden: state.popupReducer
   };
};

const mapDispatchToProps = (dispatch) => {
   const { popupHide } = bindActionCreators(booleanActions, dispatch);
   return {
      popupHide,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);