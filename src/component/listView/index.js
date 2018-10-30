import React from 'react';

const ListItems = (listData)=>{
    return(
        <div>
            List View is Here
        </div>
    );
}


const List = (props) =>{
    return(
        <div>
           <div className="list-group">
                {  props.data.map(data=>(
                    <ListItems task={data} key={data.id}/>
                ))}
            </div> 
        </div>
    );
}

export default List;