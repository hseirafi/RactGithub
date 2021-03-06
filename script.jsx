var Card = React.createClass({
    getInitialState:function(){
        return{};
    },
    componentDidMount: function(){
        var component= this;
        $.get("https://api.github.com/users/"+ this.props.login, function(data){
            component.setState(data);
        })
    },
    render: function () {
        return (
            <div>
                <img src={this.state.avatar_url} width="80" />
                <h3>{this.state.name}</h3>
                <hr/>
                </div>
        );
    }
});
var Main = React.createClass({
    getInitialState: function() {
        return {logins: ['zpao', 'fisherwebdev']};
    },
        render: function(){
            var cards = this.state.logins.map(function(login){
                return(<Card login={login} />);
            });
            return(
            <div>
                {cards}

            </div>
            )
        }
});



React.render(<Main/>, document.getElementById("root"));