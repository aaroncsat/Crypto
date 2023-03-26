import React from 'react';
import styled from 'styled-components';

const CoinSection = styled.section`


box-shadow: 0 3px 7px rgba(0,0,0,0.3);
border-radius: 5px;
padding: 25px 15px;
margin-top: 20px;
width: 400px;
background: rgb(239, 235, 235);
height: 300px;
width: 400px;
`;

const Button = styled.button`

border-radius: 5px;
background: rgb(103, 80, 230);
color: #fff;
cursor: pointer;
padding: 6px 18px;
font-size: 15px;
outline: none;
border: none;
letter-spacing: 1px;

`

const Img = styled.img`

    width:70px;
    height: 70px;

`

const Coin = ({ name, symbol, price, icon, websiteUrl}) => {
    return (
        <CoinSection>
            <h2>Név: {name}</h2>
            <Img src={icon} alt={name} />
            <p><strong>Ár: {new Intl.NumberFormat('hu-HU', { style: 'currency', currency: 'HUF' }).format(price*377)}</strong></p>
            <p><strong>Rövidítése: {symbol}</strong></p>
            <p>Weboldala: <a href={websiteUrl}>{websiteUrl}</a></p>
            <Button>Vétel</Button>

        </CoinSection>
    )
}

export default Coin