import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Signup to Short Lnk</h1>
        <Link to="/">Have an account?</Link>
      </div>
    );
  }
}
