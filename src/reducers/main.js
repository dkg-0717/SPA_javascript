function main(state, action) {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return {
        ...state,
        userData: {
          ...state.userData,
          currentPage: action.payload.page
        }
      }
    }
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
    case 'OPEN_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.payload.isOpen
        }
      }
    }
    case 'CLOSE_MODAL': {
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: action.payload.isOpen
        }
      }
    }
    case 'CURRENT_ITEM': {
      let currentItem = action.payload.currentItem
      // const divs = state.editor.divs
      // let item = {
      //   gridColumn: `span 2`,
      //   gridRow: `span 2`
      // }

      // divs.splice(currentItem, 1, item)

      return {
        ...state,
        editor: {
          ...state.editor,
          currentItem: currentItem,
        }
      }
    }

    case 'POSITION_ITEM': {
      let currentItem = state.editor.currentItem
      return {
        ...state,
        editor: {
          ...state.editor,
          divs: state.editor.divs.map((item, index) => {
            if (index == currentItem) {
              return {
                gridColumn: `span ${action.payload.columns}`,
                gridRow: `span ${action.payload.rows}`
              }
            }
            return item
          })
        }
      }
    }

    case 'SET_LOADING': {
      return {
        ...state,
        editor: {
          ...state.editor,
          isLoading: action.payload.isLoading
        }
      }
    }


    default:
      return state
  }
}

export default main