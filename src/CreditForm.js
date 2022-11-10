import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreditCard from './CreditCard';
import Box from '@mui/material/Box';

// A component that shows a sample credit card along with the credit card form beneath
//  The sample card is handled by the CreditCard component located in CreditCard.js
export default function CreditForm() {
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [expiration, setExpiration] = React.useState("");
  const [cvv, setCVV] = React.useState();

  const regex = new RegExp("[0-9]{4}|[0-9]{1,3}", "g");

  // uses regex match to match the pattern for the credit card number, fires for onChange of the cardNumber field
  const cardNumberChange = (newValue) => {
    if (newValue.length > 0) {
      console.log(cardNumber);
      var updatedValue = newValue.match(regex);
      if (updatedValue) {
        console.log("regex passed somehow")
        setCardNumber(updatedValue.join(' '));
      }
      // catches the edge case of deleting when the field is empty
    } else {
      console.log("length is zero")
      setCardNumber(newValue);
    }
  };

  // handles the updating of the CVV field, restricting it to a length of 3
  const cvvChange = (newValue) => {
    if (newValue.length < 4) {
      setCVV(newValue);
    }
  };

  // would need to be async if post request went through
  const onSubmit = (event) => {
    console.log({ "Card Number": cardNumber, "Card Name": cardName, "Expiration": expiration, "CVV": cvv });
    // let response = await axios.post('{INSERT_SERVER}/submit', {"Card Number": cardNumber, "Card Name": cardName, "Expiration": expiration, "CVV": cvv });
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flex: '1'
    }}>
      <Box className="creditForm" elevation={5} sx={{
        width: '50vw',
        height: '50vh',
        maxWidth: '600px'
      }}>
        <CreditCard name={cardName} number={cardNumber} date={expiration} />
        <Box className="outerContainer">
          <TextField
            value={cardNumber}
            onChange={(e) => cardNumberChange(e.target.value)}
            label="Card Number"
            inputProps={{
              maxLength: 19
            }}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Box>

        <Box className="outerContainer">
          <TextField
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            label="Cardholder Name"
            inputProps={{
              maxLength: 50
            }}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Box>

        <Box className="outerContainer">
          <Box className="innerContainer">
            <TextField
              value={expiration}
              onChange={(e) => setExpiration(e.target.value)}
              label="Expiration Date"
              inputProps={{
                type: "month"
              }}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>

          <Box className="innerContainer">
            <TextField
              value={cvv}
              onChange={(e) => cvvChange(e.target.value)}
              label="CVV"
              inputProps={{
                type: "number"
              }}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          fullWidth
          onClick={(e) => onSubmit()}
        >Submit</Button>
      </Box>
    </Box>
  );
}
