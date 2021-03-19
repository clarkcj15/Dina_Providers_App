const React = require('react');
const AppLayout = require('./AppLayout/AppLayout')
class Show extends React.Component{
    render() {
        return(
            <AppLayout
            title={`${this.props.children}`}
            stylesheet ="/css/show.css"
            >
                <p><h1>{this.props.provider.name}</h1></p>
                <p> Gender: {this.props.provider.gender}</p>
                <p> Specialty: {this.props.provider.specialty}</p>
                <p> Street: {this.props.provider.address[0]}</p>
                <p> City: {this.props.provider.address[1]}</p>
                <p> State: {this.props.provider.address[2]}</p>
                <p> Zip Code: {this.props.provider.address[3]}</p>
                <p> Phone Number: {this.props.provider.address[4]}</p>
            </AppLayout>
        )
    }
}

module.exports = Show;