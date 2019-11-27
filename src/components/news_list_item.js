import React from 'react';

const NewsItems = ({item,key})=>{
    return(
             <div>
                <h1>{item.title}</h1>
                <p>{item.feed}</p>
            </div>
        
    );
}
export default NewsItems;