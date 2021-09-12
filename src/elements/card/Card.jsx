import React from 'react';



export const Card = (props) => {
    return (
        <Card className={props.className}>{props.children}</Card>
    )
}

export default Card