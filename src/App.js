import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const App = ({ isOpen, currentPage, columns, rows }) => {

  return (
    <>
      <h1>Proyecto listo para iniciar</h1>
    </>
  )

}

function mapStateToProps(state, props) {
  return {
    currentPage: state.userData.currentPage,
    rows: state.editor.rows,
    columns: state.editor.columns,
    isOpen: state.modal.isOpen
  }
}

export default connect(mapStateToProps)(App);