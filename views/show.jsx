const React = require('react');
const AppLayout = require('./AppLayout/AppLayout')
class Show extends React.Component{
    render() {
        return(
            <AppLayout
            title={`${this.props.children}`}
            stylesheet ="./public/CSS/show.css"
            >
                <p> Gender: {this.props.provider.gender}</p>
                <p> Specialty: {this.props.provider.specialty}</p>
                
                <p> Address: {this.props.provider.address[0]}</p>
                <p> {this.props.provider.address[1]}</p>
                <p> {this.props.provider.address[2]}</p>
                <p> {this.props.provider.address[3]}</p>
                <p> {this.props.provider.address[4]}</p>
            </AppLayout>
        )
    }
}

module.exports = Show;