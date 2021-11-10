const notes = (state = [], action: {type: any; note: any; date: any}) => {
  switch (action.type) {
    case 'INSERT':
      // console.log('from notes');
      // console.log(state);
      return [...state, [action.note, action.date]];

    case 'DELETE-ALL':
      // Delete all notes
      return (state = []);

    case 'DELETE':
      return [...state.filter(note => note !== action.note)];

    default:
      return state;
  }
};

export default notes;
