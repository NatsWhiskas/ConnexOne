import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components"
import { loadComic, comicPreLoad } from "../actions/actions"
import Comic from "./Comic"

const Input = styled.input`
  height: 30px;
  padding: 0 15px;
  border-radius: 5px;
  border: 0;
  margin-top: 1rem;
`

const FindComic = (props) => {
  const handleChange = (event) => {
    if (event.target.value > 1) {
      props.dispatch(loadComic(event.target.value))
    } else {
      props.dispatch(comicPreLoad())
    }
  }

  useEffect(() => {
    props.dispatch(comicPreLoad())
    // eslint-disable-next-line
  }, [])

  return (
    <section id="findComic">
      <Input type="number" onChange={handleChange} />
      <Comic />
    </section>
  )
}

FindComic.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default withRouter(connect(null, mapDispatchToProps)(FindComic))
