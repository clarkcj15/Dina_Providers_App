const React = require('react');
const AppLayout = require('./AppLayout/AppLayout')
class Index extends React.Component{
    render() {
        console.log(this.props.provider)
        return(
            <AppLayout
            title="Provider Index Page"
            stylesheet ="/CSS/index.css"
            >
            <div> 
            <ul className="index-page">
                {
                    this.props.provider.map((provider) => {
                        return(
                            <li className="prov-list" style={{listStyle: "none"}}>
                                <ul>
                                <a href={`/Dina_Providers_App/providers/${provider.id}`}>{provider.name}</a>
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
            </div>
            </AppLayout>
        )
    }
}

module.exports = Index;