import React from 'react';


class SearchBox extends React.Component {

    state = {term : ''};

    onInputSubmit = (event) => {
            event.preventDefault();
            this.props.onSubmit(this.state.term);
    }

    onInputChange  = (event)  =>   {
        this.setState({term : event.target.value});
    }

    

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onInputSubmit}>
                    <div className="field">
                        <label>Search</label>
                        <input type="text"  value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
    
}


export default SearchBox;