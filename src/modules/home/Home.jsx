import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
