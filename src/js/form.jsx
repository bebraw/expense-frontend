'use strict';
var React = require('react');
var LocalStorageMixin = require('react-localstorage');
var validate = require('plexus-validate');
var Form = require('plexus-form');

var i18n = require('./i18n');
var schema = require('./schema');
var translator = require('./translator');

var LanguageSelector = require('./language_selector.jsx');
var Preview = require('./preview.jsx');


module.exports  = React.createClass({
    displayName: 'Form',
    mixins: [LocalStorageMixin],

    getInitialState: function() {
        // TODO: initial language could be moved to props
        return {
            schema: translator.translate(i18n.en, schema),
            values: {}
        };
    },
    onSubmit: function(output) {
        this.setState({
            values: output
        });
    },
    render: function() {
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
                <LanguageSelector languages={translator.parse(i18n)} />
            </div>
        );
    }
});
