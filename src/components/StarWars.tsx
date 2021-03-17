import React from 'react';
import {starsWarsInfo} from "../utils/constants";
import FarGalaxyText from "../styled_componetns/FarGalaxyText";


const StarWars: React.FC = ():JSX.Element => {
    return (
        <FarGalaxyText>
            <p>{starsWarsInfo}</p>
        </FarGalaxyText>
    );
};

export default StarWars;