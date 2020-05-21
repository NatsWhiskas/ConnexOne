import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

const Comic = (props) => {
  const { error, loading, loadingMessage, comic } = props

  if (error) {
    return (
      <div>
        <h1>Error! {error.message}</h1>
      </div>
    )
  }

  if (loadingMessage) {
    return (
      <div>
        <h1>Please type in a comic number</h1>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{comic.title}</h1>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`http://xkcd.com/${comic.num}`}
      >
        <img src={comic.img} title={comic.alt} alt={comic.alt} />
      </a>
    </div>
  )
}

Comic.defaultProps = {
  error: {},
  loading: false,
  loadingMessage: false,
}

Comic.propTypes = {
  error: PropTypes.instanceOf(Object),
  loading: PropTypes.bool,
  loadingMessage: PropTypes.bool,
  comic: PropTypes.instanceOf(Object).isRequired,
}

const mapStateToProps = (state) => ({
  comic: state.comic,
  loading: state.loading,
  loadingMessage: state.loadingMessage,
  error: state.error,
})

export default connect(mapStateToProps)(Comic)
