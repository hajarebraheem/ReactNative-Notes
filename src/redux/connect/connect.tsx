import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {login, logout, notes, removeAllNotes, removeNote} from '../actions';

export const mapStateToProps = (state: {auth: any; notes: any}) => ({
  states: {
    auth: state.auth,
    notes: state.notes,
  },
});

const ActionCreators = {
  login,
  logout,
  notes,
  removeAllNotes,
  removeNote,
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
