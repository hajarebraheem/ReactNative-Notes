import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {login, loggout, notes, removeAllNotes, removeNote} from '../actions';

export const mapStateToProps = (state: {auth: any; notes: any}) => ({
  states: {
    auth: state.auth,
    notes: state.notes,
  },
});

const ActionCreators = {
  login,
  loggout,
  notes,
  removeAllNotes,
  removeNote,
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});
