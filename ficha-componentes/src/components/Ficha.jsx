import React from 'react';
import img from '../img/gäzpi.png';

function Ficha(props){
    return(
        <div className={'ficha'}>
            <h1>Ficha</h1>
            <div className={'container'}>
            <div>
                <img src={img} alt={'ImagenRara'}></img>
            </div>
            <div>
                <p><span>Nombre:</span> {props.nombre}</p>
                <p><span>Direccion:</span> {props.direccion}</p>
                <p><span>Localidad:</span> {props.localidad}</p>
                <p><span>CP:</span> {props.cp} </p>
            </div>
            </div>
        </div>
    );
}

export default Ficha;