function editor(state, action) {
  switch (action.type) {
    case 'SET_GRID_CONFIG': {
      return {
        ...state,
        editor: {
          ...state.editor,
          rows: action.payload.rows,
          columns: action.payload.columns,
          divs: action.payload.divs
        }
      }
    }
    default:
      return state
  }
}

export default editor