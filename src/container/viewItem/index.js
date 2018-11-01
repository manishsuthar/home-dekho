import React,{Component} from 'react';
import { request } from '../../function';
import './index.css';
class View extends Component{
    state={data:{"date":"NONE","parking":true,"image3":"NONE.png","address":"234","image4":"NONE.jpg","city":"NONE",
                      "description":"NONE","ctphone":"NONE","type":"NONE","image1":"NONE.jpg","image2":"NONE.jpg",
                      "profileimage":"NONE.JPG","ctemail":"NONE","station":true,
                      "ctname":"NONE","id":"NONE","state":"NONE"}}
    componentWillMount(){
        const id = this.props.match.params.id;
        var setting = {
            url:'http://localhost:8080/homeDekho/view',
            requestType:'GET',
            payload:{id:id}
        }
        request(setting,(err,res)=>{
            if(res){
                this.setState({data:res.data[0]});
            }
        })
    }

    render(){
        const id = this.props.match.params.id;
        console.log(id);
        return(
            <div className="headerDiv">
               <div className="fullWidthSilder">
                   Slider Images
               </div>
               <div className="ViewMain">
                    <div className="leftDiv"> 
                        <img src={this.state.data.profileimage} alt=""/>
                    </div>
                    <div className="rightDiv">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="pull-right">
                                    <b>Posted Date</b><b>{this.state.data.date}</b> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pull-left"><b>Address</b>{this.state.data.address}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pull-left"><b>City</b>{this.state.data.city}</p>
                                    </td>
                                    <td>
                                        <p className="pull-left"><b>State</b>{this.state.data.state}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="pull-left"><b>Description</b>{this.state.data.description}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="pull-left"><p><b>Price</b>{this.state.data.price}</p></td>
                                </tr>
                                <tr>
                                    <td>Contact Details</td>
                                </tr>
                                <tr>
                                    <td><p className="pull-left"><b>Name</b>{this.state.data.ctname}</p></td>
                                    <td><p className="pull-left"><b>Phone</b>{this.state.data.ctphone}</p></td>
                                </tr>
                                <tr>
                                    <td><p className="pull-left"><b>Email</b>{this.state.data.ctemail}</p></td>
                                    {/* <td><p className="pull-left"><b>Phone</b>{this.state.data.ctphone}</p></td> */}
                                </tr>
                            </tbody>
                        </table>
                    </div>
               </div>
            </div>
        );
    }
}

export default View;