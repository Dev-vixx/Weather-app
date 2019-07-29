import React from 'react';

const Dock = ({Display}) =>
{
    return(
        <div className={ `${Display === true ? "dock show" : "hd"}`}>
            ok
        </div>
    )
}

export default Dock;