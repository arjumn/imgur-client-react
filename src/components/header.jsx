var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Link = Router.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],

  getInitialState: function(){
    return {
      topics: []
    }
  },

  componentWillMount: function(){
    Actions.getTopics();
  },

  render: function(){
    return <nav className="navbar navbar-default header">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Imgur browser
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {this.renderItems()}
        </ul>
      </div>
    </nav>
  },

  onChange: function(event, topics){
    this.setState({
      topics: topics
    });
  },

  renderItems: function(){
    return this.state.topics.slice(0,4).map(function(topic){
      return <li key={topic.id}>
        <Link to={"topic/" + topic.id}>{topic.name}</Link>
      </li>
    });
  }
});
