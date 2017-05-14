var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {
    addTweetToCollection: function(tweet) {
        AppDispatcher.dispatch({
            type: 'add_tweet_to_collection',
            tweet: tweet
        })
    },
    removeTweetFromColleciton: function(tweetId) {
        AppDispatcher.dispatch({
            type: 'remove_tweet_from_collection',
            tweetId: tweetId
        })
    },
    removeAllTweetsFromCollection: function() {
        AppDispatcher.dispatch({
            type: 'remove_all_tweets_from_collection',
        })
    },
    setCollectionName: function(collectionName) {
        AppDispatcher.dispatch({
            type: 'set_collection_name',
            collectionName: collectionName
        })
    }
}