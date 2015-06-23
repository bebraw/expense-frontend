'use strict';
var React = require('react');
var moment = require('moment');


module.exports = React.createClass({
    displayName: 'Preview',

    render: function() {
        var today = moment().format('DD.MM.YYYY');
        var data = this.props.data;

        // arrays/objects may be undefined initially so extra checks are needed
        data.recipient = this.props.data.recipient || {};

        var services = calculateServices({
            initial: this.props.data.services,
            vat: 0.24
        });

        return (
            <div className="preview">
                <header>
                    <div className="sender">
                        <div className="company">Koodilehto Osk.</div>
                        <div className="name">Kulukorvauslomake</div>
                    </div>
                    <div className="extra">
                        <div className="date">{today}</div>
                    </div>
                </header>
                <article>
                    <div className="info">
                        <div className="description">{data.description}</div>
                    </div>
                    <table className="services">
                        <thead>
                            <tr>
                                <th>Korvattava (kuitit liitteenä)</th>
                                <th>Määrä</th>
                                <th>Yksikköhinta</th>
                                <th>Hinta</th>
                            </tr>
                        </thead>
                        <tbody>
                        {services.map(function(service, i) {
                            return <tr key={i}>
                                <td>{service.name}</td>
                                <td>{service.amount}</td>
                                <td>{service.cost}</td>
                                <td>{toFixed(service.total)}</td>
                            </tr>;
                        })}
                        </tbody>
                    </table>
                    <div className="info">
                        <div className="recipient">
                            <div className="company">{data.recipient.company}</div>
                            <div className="name">{data.recipient.name}</div>
                            <div className="address">{data.recipient.address}</div>
                            <div className="city">{data.recipient.postalCode} {data.recipient.city}</div>
                            <div className="phone">{data.recipient.phone}</div>
                            <div className="bankAccount">{data.recipient.bankAccount}</div>
                        </div>
                    </div>
                </article>
                <footer>
                    <div className="signing">
                        <div className="place">{data.place} {today}</div>
                        <div className="note">Tämä asiakirja on allekirjoitettu elektronisesti.</div>
                    </div>
                    <div className="approval">
                        <h3>Osuuskunta täyttää</h3>
                        <div className="paid">Maksettu</div>
                        <div className="approved">Hyväksytty</div>
                    </div>
                </footer>
            </div>
        );
    }
});

function calculateServices(o) {
    var services = o.initial || [];

    services = services.map(function(service) {
        var cost = service.cost || 0;

        return {
            name: service.name,
            amount: service.amount,
            cost: cost,
            total: service.amount * cost
        };
    });

    // calculate totals
    var total = sum(services, 'total');
    services.push({
        name: 'Yhteensä',
        cost: sum(services, 'cost'),
        total: total,
    });

    services.push({
        name: 'Yhteensä',
        total: total
    });

    return services;
}

function sum(d, prop) {
    return d.map(function(a) {
        return a[prop];
    }).reduce(function(a, b) {
        return a + b;
    }, 0);
}

function toFixed(a) {
    if(a) {
        return a.toFixed(2);
    }
}
