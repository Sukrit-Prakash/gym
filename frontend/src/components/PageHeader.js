import React from 'react'
import PropTypes from 'prop-types'

export default function PageHeader(props) {

  const myStyle = {

    minHeight: '400px'

  };
  return (
    <div className="container-fluid page-header mb-5">
      <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={myStyle}>
        <h4 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase font-weight-bold">{props.title}</h4>
        <div className="d-inline-flex">
          <p className="m-0 text-white">Home</p>
          <p className="m-0 text-white px-2">/</p>
          <p className="m-0 text-white">{props.title}</p>
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
};