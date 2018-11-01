import React,{Component} from 'react';
import './index.css';
import axios from 'axios';
import {request} from '../../function';
class AddNew extends Component{
    state={
        address:'',
        city:'',
        state:'',
        propertyType:'',
        parking:false,
        transport:false,
        description:'',
        ctname:'',
        ctphone:'',
        ctemail:'',
        profileimage:'',
        image1:'',
        image2:'',
        image3:'',
        image4:'',
        Selectprofileimage:'',
        Selectimage1:'',
        Selectimage2:'',
        Selectimage3:'',
        Selectimage4:'',
        price:null
        
    }

    onStateChange(key,event){
        switch(key){
            case 'address' :
                    this.setState({'address':event.target.value});
                    break;
            case 'city' :
                    this.setState({'city':event.target.value});
                    break;
            case 'state' :
                    this.setState({'state':event.target.value});
                    break;
            case 'propertyType' :
                    this.setState({'propertyType':event.target.value});
                    break;
            case 'parking' :
                    this.setState({'parking':!this.state.parking});
                    break;
            case 'transport' :
                    this.setState({'transport':!this.state.transport});
                    break;
            case 'description' :
                    this.setState({'description':event.target.value});
                    break;
            case 'ctname' :
                    this.setState({'ctname':event.target.value});
                    break;
            case 'ctphone' :
                    this.setState({'ctphone':event.target.value});
                    break;
            case 'ctemail' :
                    this.setState({'ctemail':event.target.value});
                    break;
            case 'profileimage' :
                    this.setState({'profileimage':event.target.value});
                    break; 
            case 'price' :
                    this.setState({'price':event.target.value});
            break;            
            default : 
                break;
        }
    }
    SubmitClick = (event) => {
        console.log(this.state)
        var setting = {
            url:'http://localhost:8080/homeDekho/add',
            payload:this.state,
            requestType:'POST',
        }
        request(setting,(err,res)=>{
          alert(res.message)
        })
        event.preventDefault();
    }
    SendFile = (fd,cb)=>{
        axios.post('http://localhost:8080/homeDekho/upload',fd)
        .then(res=>{
            alert(res.data.message);
            return(cb(res.data.name));
        })
    }
    UploadFile = (key,event) =>{
        const fd = new FormData();
        switch(key){
            case 'profileimage' :
                fd.append('fileName',event.target.files[0],event.target.files[0].name);
                this.SendFile(fd,(done)=>{
                    this.setState({'profileimage':done}); 
                })
                break;
        case 'image1' :
                fd.append('fileName',event.target.files[0],event.target.files[0].name);
                this.SendFile(fd,(done)=>{
                    this.setState({'image1':done}); 
                })
                break;
        case 'image2' :
                //this.setState({'Selectimage2':event.target.files[0]});
                fd.append('fileName',event.target.files[0],event.target.files[0].name);
                this.SendFile(fd,(done)=>{
                    this.setState({'image2':done}); 
                })
                break;
        case 'image3' :
                //this.setState({'Selectimage3':event.target.files[0]});
                fd.append('fileName',event.target.files[0],event.target.files[0].name);
                this.SendFile(fd,(done)=>{
                    this.setState({'image3':done}); 
                })
                break;
        case 'image4' :
                //this.setState({'Selectimage4':event.target.files[0]});
                fd.append('fileName',event.target.files[0],event.target.files[0].name);
                this.SendFile(fd,(done)=>{
                    this.setState({'image4':done});
                })
                break;
        default : 
                break; 
        }
        event.preventDefault();
    }

    render(){
       const {address,city,state,propertyType,description,ctname,ctphone,ctemail,price} = this.state;
        return(
        <div className="mainDiv">
            <div className="childDiv">
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <th className="text-right">Address</th>
                                <th><textarea placeholder="Address" value={address} onChange={this.onStateChange.bind(this,"address")} name="address"></textarea></th>
                            </tr>
                            <tr>
                                <th className="text-right">City</th>
                                <th><input type="text" name="city" onChange={this.onStateChange.bind(this,"city")} value={city} placeholder="City"/></th>
                            </tr>
                            <tr>
                                <th className="text-right">State</th>
                                <th><input type="text" name="state" onChange={this.onStateChange.bind(this,"state")} value={state} placeholder="State"/></th>
                            </tr>
                            <tr>
                                <th className="text-right">Type</th>
                                <th>
                                    <select name="propertyType" onChange={this.onStateChange.bind(this,"propertyType")} value={propertyType}>
                                        <option selected disabled>Select Type</option>
                                        <option>Single Room</option>
                                        <option>1 BHK</option>
                                        <option>2 BHK</option>
                                        <option>3 BHK</option>
                                    </select>
                                </th>
                            </tr>
                            <tr>
                                <th className="text-right">Parking</th>
                                <th><input className="checkbox" onChange={this.onStateChange.bind(this,"parking")} name="parking" type="checkbox"/></th>
                            </tr>
                            <tr>
                                <th className="text-right">Transport</th>
                                <th><input className="checkbox" name="transport" onChange={this.onStateChange.bind(this,"transport")} type="checkbox"/></th>
                            </tr>
                            <tr>
                                <th className="text-right">Description</th>
                                <th>
                                    <textarea placeholder="Description Max(200)" onChange={this.onStateChange.bind(this,"description")} name="description" value={description} rows="6"></textarea>
                                </th>
                            </tr>
                            <tr>
                                <th className="text-right">Contact Person Name</th>
                                <td><input type="text" name="ctname" onChange={this.onStateChange.bind(this,"ctname")} placeholder="Name" value={ctname} /></td>
                            </tr>
                            <tr>
                                <th className="text-right">Contact Number</th>
                                <td><input type="number" name="ctphone" onChange={this.onStateChange.bind(this,"ctphone")} placeholder="Phone" value={ctphone} /></td>
                            </tr>
                            <tr>
                                <th className="text-right">Contact Email</th>
                                <td><input type="text" name="ctemail" onChange={this.onStateChange.bind(this,"ctemail")} placeholder="Email" value={ctemail} /></td>
                            </tr>
                            <tr>
                                <th className="text-right">Price</th>
                                <td><input type="number" name="price" onChange={this.onStateChange.bind(this,"price")} placeholder="Price" value={price} /></td>
                            </tr>
                            <tr>
                                <th className="text-right">Profile Image</th>
                                <td><input type="file" name="profileimage" onChange={this.UploadFile.bind(this,"profileimage")} placeholder="Profile"/></td>
                            </tr>
                            <tr>
                                <th className="text-right">Cover Image</th>
                                <td>
                                    <div className="input-inline">
                                        <input type="file" name="image1" onChange={this.UploadFile.bind(this,"image1")}/>
                                        {/* <button type="button" onClick={this.UploadFile(this,"image1")}>Upload</button> */}
                                    </div>
                                    <div className="input-inline">
                                        <input type="file" name="image2" onChange={this.UploadFile.bind(this,"image2")}/>
                                        {/* <button type="button" onClick={this.UploadFile(this,"image2")}>Upload</button> */}
                                    </div>
                                    <div className="input-inline">
                                        <input type="file" name="image3" onChange={this.UploadFile.bind(this,"image3")}/>
                                        {/* <button type="button" onClick={this.UploadFile(this,"image3")}>Upload</button> */}
                                    </div>
                                    <div className="input-inline">
                                        <input type="file" name="image4" onChange={this.UploadFile.bind(this,"image4")}/>
                                        {/* <button type="button" onClick={this.UploadFile(this,"image4")}>Upload</button> */}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                
                                    <center><button type="button" onClick={this.SubmitClick} name="submit">Submit</button></center>
                                
                            </tr>
                        </tbody>
                    </table>  
                </form>
            </div> 
        </div>
        );
    }
}


export default AddNew;