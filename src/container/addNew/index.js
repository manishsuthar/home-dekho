import React,{Component} from 'react';
import './index.css';
class AddNew extends Component{
    state={
        address:'',
        city:'',
        state:'',
        propertyType:'',
        parking:'',
        transport:'',
        description:'',
        ctname:'',
        ctphone:'',
        ctemail:'',
        profileimage:'',
        image1:'',
        image2:'',
        image3:'',
        image4:''
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
                    this.setState({'parking':event.target.value});
                    break;
            case 'transport' :
                    this.setState({'transport':event.target.value});
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
            case 'image1' :
                    this.setState({'image1':event.target.value});
                    break;
            case 'image2' :
                    this.setState({'image2':event.target.value});
                    break;
            case 'image3' :
                    this.setState({'image3':event.target.value});
                    break;
            case 'image4' :
                    this.setState({'image4':event.target.value});
                    break;
            default : 
                break;
        }
    }

    SubmitClick(event){
        console.log(this.state);
        event.preventDefault();
    }

    render(){
       const {address,city,state,propertyType,parking,transport,description,ctname,ctphone,ctemail,profileimage,image1,image2,image3,image4} = this.state;
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
                                <th><input className="checkbox" onChange={this.onStateChange.bind(this,"parking")} value={parking} name="parking" type="checkbox"/></th>
                            </tr>
                            <tr>
                                <th className="text-right">Transport</th>
                                <th><input className="checkbox" name="transport" onChange={this.onStateChange.bind(this,"transport")} value={transport} type="checkbox"/></th>
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
                                <th className="text-right">Profile Image</th>
                                <td><input type="file" name="profileimage" onChange={this.onStateChange.bind(this,"profileimage")} placeholder="Profile" value={profileimage} /></td>
                            </tr>
                            <tr>
                                <th className="text-right">Cover Image</th>
                                <td>
                                    <input type="file" name="image1" onChange={this.onStateChange.bind(this,"image1")} value={image1}/>
                                    <input type="file" name="image2" onChange={this.onStateChange.bind(this,"image2")} value={image2}/>
                                    <input type="file" name="image3" onChange={this.onStateChange.bind(this,"image3")} value={image3}/>
                                    <input type="file" name="image4" onChange={this.onStateChange.bind(this,"image4")} value={image4}/>
                                </td>
                            </tr>
                            <tr>
                                
                                    <center><button type="submit" name="submit">Submit</button></center>
                                
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