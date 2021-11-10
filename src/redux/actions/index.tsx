export const login = (name: any) => ({
  type: 'LOGIN',
  payload: name,
});

export const loggout = () => ({
  type: 'LOGOUT',
  payload: null,
});

export const notes = (note: any, date: any) => ({
  type: 'INSERT',
  note,
  date,
});

export const removeAllNotes = () => ({
  type: 'DELETE-ALL',
});

export const removeNote = (note: any) => ({
  type: 'DELETE',
  note,
});
