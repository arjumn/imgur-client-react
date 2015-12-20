var React = require('react');

module.exports = React.createClass({
  render: function(){
    return <div>
      {this.renderImage()}
    </div>
  },

  renderImage: function(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={link} />
  }
})
