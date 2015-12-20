var React = require('react');
var Api = require('../utils/api');
var TopicStore = require('../stores/topic-store');

module.exports = React.createClass({
  getInitialState: function(){
      return {
        topics: []
      }
  },

  componentWillMount: function(){
    TopicStore.getTopics()
      .then(function(data){
        this.setState({ topics: TopicStore.topics });
      }.bind(this));
  },

  render: function() {
    return <div className="list-group">
      Topic List
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.map(function(topic){
      return <li>
        {topic}
        </li>
    });
  }
});
