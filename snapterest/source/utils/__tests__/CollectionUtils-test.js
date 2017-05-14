// jest.autoMockOff();
describe('Collection utils module', function(){
    var CollectionUtils = require('../CollectionUtils');
    var collectionTweetsMock = {
        collectionTweet7: {},
        collectionTweet8: {},
        collectionTweet9: {},
    };

    it('returns a number of tweets in colleciton', function(){
        var actualNumberOfTweetsInCollection =  CollectionUtils.getNumberOfTweetsInCollection(collectionTweetsMock);
        var expectedNumberOfTweetsInCollection = 3;
        expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);
    });

    it('cehcks if collection is not empty', function(){
        var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);
        expect(actualIsEmptyCollectionValue).toBeDefined();
        expect(actualIsEmptyCollectionValue).toBe(false);
        expect(actualIsEmptyCollectionValue).not.toBe(true);
    })
})