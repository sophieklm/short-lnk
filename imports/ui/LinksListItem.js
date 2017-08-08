import React from 'react';
import PropTypes from 'prop-types';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  componentDidMount() {
    this.clipboard = new Clipboard(this.refs.copy);
    this.clipboard.on('success', () => {
      this.setState({copied: true});
      setTimeout(() => this.setState({copied: false}), 1000);
    }).on('error', () => {
      alert('Unable to copy');
    });
  }
  componentWillUnmount() {
    this.clipboard.destroy();
  }
  render() {
    return (
      <div>
        <p>{this.props.url}</p>
        <p>{this.props.shortUrl}</p>
        <p>{this.props.visitedCount}</p>
        <p>{this.props.lastVisitedAt}</p>
        <button ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.copied ? "Copied" : "Copy"}</button>
        <button onClick={() => {
          Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
        }}>
        { this.props.visible ? "Hide" : "Unhide" }
        </button>
      </div>
    );
  }
}

LinksListItem.propTypes = {
  _id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  shortUrl: PropTypes.string.isRequired,
  visitedCount: PropTypes.number.isRequired,
  lastVisitedAt: PropTypes.number
};
