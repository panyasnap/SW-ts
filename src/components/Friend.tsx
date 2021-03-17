import React from 'react';
//@ts-ignore
import style from "../css_modules/friend.module.css";
import {Link} from "react-router-dom";
import {characters, homePage} from "../utils/constants";
//@ts-ignore
import styled from 'styled-components'

interface heroNum{
    hero: string;
    number: number ;
}

const ImgFriend = styled.img<heroNum>`
  border-bottom-left-radius: ${({number}) => number === 7 ? '1rem' : 'auto'};
  border-bottom-right-radius: ${({number}) => number === 9 ? '1rem' : 'auto'}
`

const Friend = ({hero, number}: heroNum) => {
    //  let styles = 'w-100 p-1 ';
    // if (number === 7) {
    //     styles += style.bottomLeft;
    // }
    // if (number === 9) {
    //     styles += style.bottomRight;
    // }
    return (
        <Link className='col-4' to={`/${homePage}/${hero}`}>
            <ImgFriend hero={hero} number={number} className='w-100 p-1 ' src={characters[hero].img} alt={characters[hero].name}/>
        </Link>
    );
};
//className={styles}
export default Friend;