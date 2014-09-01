'use strict';
var React = require('react');
var LocalStorageMixin = require('react-localstorage');
var validate = require('plexus-validate');
var Form = require('plexus-form');

var schema = require('./schema');
var LanguageSelector = require('./language_selector.jsx');
var Preview = require('./preview.jsx');


module.exports  = React.createClass({
    displayName: 'FormDemoPage',
    mixins: [LocalStorageMixin],

    getInitialState: function() {
        return {
            schema: schema,
            values: {}
        };
    },
    onSubmit: function(output) {
        this.setState({
            values: output
        });
    },
    render: function() {
        var languages = {
            en: 'English',
            fi: 'Suomi'
        };

        // TODO: wire up initial language + language change -> update schema
        return (
            <div>
                <div className="fields">
                    <Form
                        buttons={[]}
                        schema={this.state.schema}
                        validate={validate}
                        submitOnChange={true}
                        onSubmit={this.onSubmit}
                        values={this.state.values}
                    />
                </div>
                <Preview data={this.state.values} />
                <LanguageSelector languages={languages} />
            </div>
        );
    }
});
