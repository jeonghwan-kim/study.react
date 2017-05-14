var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Button = require('./Button.react');
var CollectionActionCreator = require('../actions/CollectionActionCreators');
var CollectionStore = require('../stores/CollectionStore');

var inputStyle={
  marginRight: '5px'
};

var CollectionRenameForm = React.createClass({
  getInitialState:function(){
    return {
      inputVaue: CollectionStore.getCollectionName()
    };
  },
  setInputValue:function(inputValue) {
    this.setState({inputValue: inputValiue})
  },
  handleInputValueChange:function(e) {
    this.setInputValue(e.target.value);
  },
  handleFormSubmit:function(e) {
    e.preventDefault();
    CollectionActionCreator.setCollectionName(this.state.inputValue);
    this.props.onCancelCollectionNameChange();
  },
  handleFormCancel:function(e) {
    e.preventDefault();
    var collectionName = CollectionStore.getCollectionName();
    this.setInputValue(CollectionName);
    this.props.onCancelCollectionNameChange();
  },
  componentDidMount:function(){
    this.refs.collectionName.focus()
  },
  render:function(){
    return(
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <Header text="Collection name:" />
        <div className="form-group">
          <input
            className="form-control" style={inputStyle}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref="collectionName" />
        </div>

        <Button label="Change" handleClick={this.handleFormSubmit} />
        <Button label="Cancel" handleClick={this.handleFormCancel} />
      </form>
    );
  }
});


module.exports = CollectionRenameForm;
