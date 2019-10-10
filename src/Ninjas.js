import React from 'react';
import './Ninjas.css';

const Ninjas = ({ ninjas, onDeleteNinja }) => {
    return (
        <div className="ninja-list">
            { 
                ninjas.map( ninja => {
                    return ninja.age < 25 ? (
                        <div className="ninja" key={ ninja.id }>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>

                            <button onClick={ () => onDeleteNinja(ninja.id) }>Delete ninja</button>
                        </div>
                    ) : null
                })
             }
        </div>
    )
}

export default Ninjas;