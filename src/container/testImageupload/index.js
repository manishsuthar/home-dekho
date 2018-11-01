import React,{Component} from 'react';
// import $ from 'jquery';
import axios from 'axios';

class TestImage extends Component{
    state = {
        selectedFile:null
    }
    ImageSelect = event => {
        this.setState({selectedFile:event.target.files[0]});
    }
    UploadImage = ()=> {
        const fd = new FormData();
        console.log(this.state.selectedFile)
        fd.append('fileName',this.state.selectedFile,this.state.selectedFile.name);
        axios.post('http://localhost:8080/homeDekho/upload',fd)
        .then(res=>{
            console.log(res)
        })
        // $.ajax({
        //     url: 'http://localhost:8080/homeDekho/upload',
        //     data: fd,
        //     cache: false,
        //     contentType: 'multipart/form-data',
        //     processData: false,
        //     type: 'POST',
        //     success: function(data){
        //         alert(data);
        //     }
        // });
        // var setting = {
        //     "async": true,
        //     "crossDomain": true,
        //     "url": 'http://localhost:8080/webapp/upload',
        //     "method": "post",
        //     "headers": {
        //       "Content-Type": "application/x-www-form-urlencoded",
        //     },
        //     "data":fd,
        //     "dataType": "json",
        //     "success":function(result){
        //        console.log(result)
        //     },
        //     "error":function(result){
        //         console.log(result)
        //     }
        //    }
        //    $.ajax(setting);
    }
    render(){
        return(
            <div>
                <div>
                    Testing Image<br/>
                    <input type="file" onChange={this.ImageSelect}/>
                    <button onClick={this.UploadImage}>Upload</button>
                </div>
            </div>
        );
    }
}


export default TestImage;