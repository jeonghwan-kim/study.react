// jest.dontMock('../Header.react');

describe('Header component', function(){
    it('renders provided header text', function(){
        var React= require('react');
        var ReactDOM = require('react-dom');
        var TestUtils = require('react-addons-test-utils');
        var Header = require('../Header.react');

        var header = TestUtils.renderIntoDocument(
            <Header text="Testing..." />
        );

        var acturalHeaderText = ReactDOM.findDOMNode(header).textContent;
        expect(acturalHeaderText).toBe('Testing...');
    });
})