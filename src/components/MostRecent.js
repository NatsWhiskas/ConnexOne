import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { loadComic } from "../actions/actions"
import Comic from "./Comic"

const MostRecent = (props) => {
  useEffect(() => {
    props.dispatch(loadComic(0))
    // eslint-disable-next-line
  }, [])

  return (
    <section id="mostRecentComic">
      <Comic />
    </section>
  )
}

MostRecent.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default withRouter(connect(null, mapDispatchToProps)(MostRecent))
