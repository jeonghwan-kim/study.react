var React = require('react');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionRenameForm = require('./CollectionRenameForm.react');
var CollectionExportForm = require('./CollectionExportForm.react');
var CollectionActionCreators = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

module.exports = React.createClass({
  getInitialState:function(){
    return {
      isEditingName: false
    };
  },
  getHeaderText:function(){
    var numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
    var text = numberOfTweetsInCollection;
    var name = CollectionStore.getCollectionName();

    if (numberOfTweetsInCollection === 1){
      text = text + ' tweet in your';
    } else {
      text = text + ' tweets in your';
    }

    return <span>{text} <strong>{this.state.name}</strong> collection</span>;
  },
  toggleEditCollectionName:function(){
    this.setState({isEditingName: !this.state.isEditingName});
  },
  removeAllTweetsFromCollection: function(){
    CollectionActionCreators.removeAllTweetsFromCollection();
  },
  render:function(){
    if(this.state.isEditingName){
      return (
        <CollectionRenameForm name={this.state.name} 
        onCancelCollectionNameChange={this.toggleEditCollectionName} />
      );
    }
    return (
      <div>
        <Header text={this.getHeaderText()} />
        <Button label="Rename collection" handleClick={this.toggleEditCollectionName} />
        <button label="Empty collection" handleClick={this.props.onRemoveAllTweetsFromCollection} />
        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
});
