const React = require('react');
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
class AppLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                <meta charSet="utf-8"/>
                <link rel="stylesheet" href={this.props.stylesheet}/>
                <title>Dina Care Providers</title>
                </head>
                <body>
                    <nav>
                        <ul className="bar" >
                                <a href="/providers">Home</a>
                                <Navbar bg="light" variant="light">
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-primary"href={`${this.props.children.providers}`}>Search</Button>
                                    </Form>
                                </Navbar>
                        </ul>
                    </nav>
                    <head><h1>Dina Care Providers</h1></head>
                    {this.props.children}
                    <foot><h5>Dina Care All Rights Reserved</h5></foot>
                </body>
            </html>
        )
    }
}

module.exports = AppLayout;