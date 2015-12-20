var React = require('react');

module.exports = React.createClass({
  getInitialState: function(){
      return {
        hovering: false
      }
  },

  render: function(){
    return <div
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}>
      {this.props.animated && this.state.hovering ? this.renderVideo() : this.renderImage()}
      {this.props.animated && !this.state.hovering ? this.renderIcon() : null}
      {this.state.hovering ? this.renderInset(): null}
    </div>
  },

  renderImage: function(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={link} />
  },

  renderVideo: function(){
    return <div>
      <video
        preload='auto'
        autoPlay='autoplay'
        loop='loop'
        webkit-playsinline>
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>
    </div>
  },

  renderIcon: function(){
    return <span className="glyphicon glyphicon-play"></span>
  },

  renderInset: function(){
    return <div className="inset">
      Views: {this.props.views}
      <br />
      Upvotes: {this.props.ups}
    </div>
  },

  handleMouseEnter: function(){
    this.setState({ hovering: true });
  },

  handleMouseLeave: function(){
    this.setState({ hovering: false });
  }
});
