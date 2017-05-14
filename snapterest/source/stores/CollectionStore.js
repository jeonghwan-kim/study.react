var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CHANGE_EVENT = 'change';
var collectionTweets = {};
var collectionName = 'new';

function addTweetToCollection(tweet) { collectionTweets[tweet.id] = tweet }
function removeTweetFromColleciton(tweetId) { delete collectionTweets[tweetId]; }
function removeAllTweetsFromCollection(){ collectionTweets = {}; }
function setCollectionName(name) { collectionName = name; }
function emitChagne() { collectionStore.emit(CHANGE_EVENT); }

var CollectionStore = assign({}, EventEmitter.prototype, {
    addChagneListen: function(cb) { this.on(CHANGE_EVENT, cb); },
    removeChagneListen: function(cb) { this.removeListener(CHANGE_EVENT, cb); },
    getCollectionTweets: function() { return collectionTweets; },
    getCollectionName: function() { return collectionName; }
});

function handleAction(action) {
    switch(action.type) {
        case "add_tweet_to_collection":
            addTweetToCollection(actions.tweet);
            emitChagne();
            break;
        case 'remove_tweet_from_collection':
            removeTweetFromColleciton(action.tweetId);
            emitChagne();
            break;
        case 'remove_all_tweets_from_collection':
            removeAllTweetsFromCollection();
            emitChagne();
            break;
        case 'set_collection_name':
            setCollectionName(action.collectionName);
            emitChagne();
            break;
        default:
    }
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction);
module.exporjts = CollectionStore;