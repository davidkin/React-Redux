import React from 'react';

const Ninjas = ({ ninjas }) => {
    const ninjaKist = ninjas.map(
        ninja => (
            <div className="ninja" key={ ninja.id }>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
            </div>
        )
    );

    return (
        <div className="ninja-list">
            { ninjaKist }
        </div>
    )
}

export default Ninjas;