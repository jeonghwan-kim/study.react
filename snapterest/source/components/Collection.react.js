var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CollectionControls = require('./CollectionControls.react');
var TweetList = require('./TweetList.react');
var Header =require('./Header.react');
var CollectionUtils = require('../utils/CollectionUtils');
var CollectionStore = require('../stores/CollectionStore');

var Collection=React.createClass({
  getInitialState: function () {
    return {
      collectionTweets: CollectionStore.getCollectionTweets()
    }
  },
  createHtmlMarupStringOfTweetList:function(){
    var htmlString=ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );
    var htmlMarkup = {
      html: htmlString
    };
    return JSON.stringify(htmlMarkup);
  },
  getListOfTweetIds:function(){
    return Object.keys(this.props.tweets);
  },
  getNumberOfTweetsInCollction:function(){
    return this.getListOfTweetIds().length;
  },
  render:function(){
    var collectionTweets = this.state.collectionTweets;
    var numberOfTweetsInCollection = this.getNumberOfTweetsInCollction(collectionTweets);
    var htmlMarkup;

    if(numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarupStringOfTweetList();
      return(
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup} />
          <TweetList tweets={tweets} />
        </div>
      )
    }
    return <Header text="Your collection is empty" />
  }
});

module.exports = Collection;
