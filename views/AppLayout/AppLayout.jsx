const React = require('react');

class AppLayout extends React.Component {
    render() {
        return(
            <html>
                <head>
                <meta charSet="utf-8"/>
                <title>Dina Care Providers</title>
                </head>
                <body>
                    <nav>
                        <ul>
                            <li>
                                <a href="/providers">Home</a>
                            </li>
                        </ul>
                    </nav>
                    <head><h1>Dina Care Providers</h1></head>
                    {this.props.children}
                    <foot><h5>Dina Care All Right Reserved</h5></foot>
                </body>
            </html>
        )
    }
}

module.exports = AppLayout;