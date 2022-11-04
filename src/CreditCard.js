import React from 'react';
import './style.css';
import Chip from './chip.png';
import Visa from './visa.png';
import Box from '@mui/material/Box'

// A component that displays a sample credit card with the number, name, and expiration date provided
//  by its parent. The card also shows placeholders if there is not input
export default function CreditCard({ number, name, date }) {
    let returnArray = parseCreditNumber(number);

    return (
        <Box className="cardContainer" elevation={4}>
            <Box className="creditCardRow">
                <img src={Chip} class="chip" height={"50px"} />
                <img src={Visa} class="visa" height={"50px"} />
            </Box>
            <Box className="creditCardRow creditCardNumber">
                {returnArray.map((element, i) => {
                    return <span key={i} className="partCreditNum">{element}</span>
                })}
            </Box>
            <Box className="creditCardRow">
                <Box className="cardName">
                    <Box className="cardNameLabel cardText">
                        Card Holder
                    </Box>
                    <Box className="cardNameValue cardText">
                        {name !== "" && name ? name : "Dave Smith"}
                    </Box>
                </Box>
                <Box className="cardDate">
                    <Box className="cardDateLabel cardText">
                        Expires
                    </Box>
                    <Box className="cardDateValue cardText">
                        {date ? date : "2022/08" }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

// parses the credit card replacement that is displayed on the sample card
//  starting with all #, the first and last four digits are replaced with the actual numbers, while
//  the middle eight are replaced with *
// input: the number inserted in the credit card form in the parent component
// output: an array of length four containing the four segments of the displayed number
const parseCreditNumber = (number) => {
    let returnArray = ["####", "####", "####", "####"];
    if (number) {
        const numberArray = number.split(' ');
        let index = 0;

        if (numberArray) {
            while (index < numberArray.length) {
                if (index === 1 || index === 2) {
                    returnArray[index] = "*".repeat(numberArray[index].length) + "#".repeat((4 - numberArray[index].length));
                } else {
                    returnArray[index] = numberArray[index] + returnArray[index].substring(numberArray[index].length, 4);
                }
                index = index + 1;
            }
        }
    }
    return returnArray;
};