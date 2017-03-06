var HelloWidget = React.createClass({
    getInitialState: function() {
        return {
            name: ''
        };
    },
    handleChange: function(e) {
        this.setState({
            name: e.target.value
        });
    },
    render: function() {
        return ( <div className="widget">
            <Logo className="center" src="//goo.gl/fx5Zwn"/>
            <Label className="default-label" name={this.state.name} />
            <Input className="default-input" onChange={this.handleChange} /> </div>);
    }
});

React.render(<HelloWidget />, document.getElementById('container'));
