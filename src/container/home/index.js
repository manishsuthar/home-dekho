import React,{Component} from 'react';
import List from '../../component/listView';
import {request} from '../../function';
class Home extends Component{
    state={listData:[{"date":"NONE","parking":true,"image3":"NONE.png","address":"234","image4":"NONE.jpg","city":"NONE",
                      "description":"NONE","ctphone":"NONE","type":"NONE","image1":"NONE.jpg","image2":"NONE.jpg",
                      "profileimage":"NONE.JPG","ctemail":"NONE","station":true,
                      "ctname":"NONE","id":"NONE","state":"NONE"}]}
    componentWillMount(){
        var setting = {
            url:"http://localhost:8080/homeDekho/getting",
            requestType:'GET',
            data:null
        }
     request(setting,(err,res)=>{
         if(res)
         {
             this.setState({listData:res.data});
         }
     })
    }   
    render(){
        return(
            <div>
                <div>
                    <h3>Home Page</h3>
                </div>
                <div className="headerDiv">
                    <List data={this.state.listData}/>
                </div>
            </div>
        );
    }
}

export default Home;