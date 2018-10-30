import React,{Component} from 'react';
import $ from 'jquery';

class TestImage extends Component{
    state={
        selecdFile:null
    }
    ImageSelect(event){
        this.setState({selecdFile:event.target.files[0]})
    }
    UploadImage(){
        const fd = new FormData();
        fd.append('image',this.state.selecdFile,this.state.selecdFile.name)
        var setting = {
            "async": true,
            "crossDomain": true,
            "url": 'http://localhost:8080/',
            "method": "post",
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            "data":fd,
            "dataType": "json",
            "success":function(result){
               console.log(result)
            },
            "error":function(result){
                console.log(result)
            }
           }
           $.ajax(setting);
    }
    render(){
        return(
            <div>
                <div>
                    Testing Image<br/>
                    <input type="file" onChange={this.ImageSelect}/>
                    <button>Upload</button>
                </div>
            </div>
        );
    }
}


export default TestImage;