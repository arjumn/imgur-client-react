var Reflux = require('reflux');
var Api = require('../utils/api');

module.exports = React.createStore({
  getTopics: function(){
    return Api.get('topics/defaults')
      .then(function(json){
        this.topics = json.data;
        this.trigger('change', this.topics);
      }.bind(this));
  }
});
