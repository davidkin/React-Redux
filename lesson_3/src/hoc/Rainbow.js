import React from 'react'

const Rainbow = (WrappedComoponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = `${randomColour}-text`;

    return (props) => {
        return (
            <div className={ className }>
                <WrappedComoponent { ...props }/>
            </div>
        )
    }
}

export default Rainbow;