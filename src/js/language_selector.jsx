'use strict';
var React = require('react');
var zip = require('annozip');


module.exports = React.createClass({
    displayName: 'Preview',

    getInitialState: function() {
        return {
            language: null
        };
    },
    render: function() {
        var that = this;
        var languages = zip(this.props.languages);

        return (
            <ul className="language-selector">
                {languages.map(function(lang) {
                    return <li key={lang[0]} onClick={that.onClick.bind(null, lang[0])}>{lang[1]}</li>;
                })}
            </ul>
        );
    },
    onClick: function(language) {
        this.setState({
            language: language
        });
    }
});
