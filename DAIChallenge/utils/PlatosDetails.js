import React from 'react';
import { usePlatos } from './PlatosContext';

function PlatosDetails(){
    const {platosData} = usePlatos();

    if(!platosData){
        return <div>Loading...</div>
    }
    
    return JSON.parse.platosData; //CREO QUE SERIA ASI, hay que importarlo como json 
}

export default PlatosDetails;