import React, {Component} from 'react';
import ReactDOM from 'react-dom';
//component import
import Header from './components/header';
import NewsList from './components/news_list';
import JSON from './db.json';


class App extends Component{
    state={
        news:JSON
    }
    render(){
        return(
            <div>
                <Header/>
                <NewsList news={this.state.news} name='ubaid'> News Alert </NewsList>

            </div>
    );
    }

}
// render 
ReactDOM.render(<App/>,document.querySelector("#root"));