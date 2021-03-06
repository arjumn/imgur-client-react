var React = require('react');
var Reflux = require('reflux');
var Link = require('react-router').Link;
var Api = require('../utils/api');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

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

  render: function() {
    return <div className="list-group">
      <h1>Topic List</h1>
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.map(function(topic){
      return <Link to={"topic/" + topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  },

  onChange: function(event, topics){
    this.setState({
      topics: topics
    });
  }
});
