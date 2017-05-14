var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');

var StreamTweet = React.createClass({
  getInitialState: function () {
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },
  addTweetToCollection:function(tweet){
    CollectionActionCreators.addTweetToCollection(tweet);
  },
  componentWillMount: function () {
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Lastest public photo from Twitter'
    });
    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  },
  componentDidMount: function () {
    var componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  },
  componentWillReceiveProps: function (nextProps) {
    var currentTweetLength = this.props.tweet.text.length;
    var nextTweetLength = nextProps.tweet.text.length;
    var isNumberOfCharactersIncreasing = nextTweetLength > currentTweetLength;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing,
      headerText: isNumberOfCharactersIncreasing ? 'Number of characters is increasing' : 'Latest public photo from Twitter'
    });

    window.snapterest.numberOfReceivedTweets++;
  },
  shouldComponentUpdate: function (nextProps, nextState) {
    return nextProps.tweet.text.length > 1;
  },
  componentWillUpdate: function (nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: componentWillUpdate');
  },
  componentDidUpdate: function (prevProps, prevSate) {
    console.log('[Snapterest] StreamTweet: componentDidUpdate');
  },
  render: function () {
    return (
        <section>
          <Header text={this.state.headerText} />
          <Tweet tweet={this.props.tweet} onImageClick={this.addTweetToCollection}/>
        </section>
    );
  }
});

module.exports = StreamTweet;
