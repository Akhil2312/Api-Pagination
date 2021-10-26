import React from 'react'
import './App.css'
const Pagination = ({data,pageHandler}) => {

    let pageNumbers =[];
    for(let i=1;i<(Math.ceil(data.length/10)+1);i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            <center>{pageNumbers.map(page=>
                    <div class="pagebutton" onClick={()=>pageHandler(page)}>{page}</div>)}
            </center>
        </div>
    )
}

export default Pagination;
