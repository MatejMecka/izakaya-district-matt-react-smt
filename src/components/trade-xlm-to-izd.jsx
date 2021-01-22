import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import DialogTitle from '@material-ui/core/DialogTitle';
import albedo from "@albedo-link/intent";

export default function Trade_XLM_To_IZD() {
  const [open, setOpen] = React.useState(false);
  const [value, handleChange] = React.useState(0);
  const [SnackbarOpen, setOpenSnackbar] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlbedo = async () => {
  
    albedo.exchange({
      buy_asset_code: 'IZD',
      buy_asset_issuer: 'GACHXSM2GCZSLVKFD76D7MBLIIZARHRTO4R4OMZ5NNYRR3WCYNWGOFRK',
      amount: `${value}`,
      max_price: '200',
      network: 'testnet',
      horizon: 'https://horizon-testnet.stellar.org',
      submit: true
  }).then(res => {
    console.log(res.amount, res.max_price, res.sell_asset_code, res.sell_asset_issuer, res.buy_asset_code, res.buy_asset_issuer, res.memo, res.memo_type, res.signed_envelope_xdr, res.pubkey, res.tx_signature, res.network, res.horizon)
    setOpenSnackbar(true)
  
  })

  }
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Trade XLM
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Trade XLM to IZD</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="How Much XLM do you want to trade for IZD?"
              type="number"
              value={value}
              onChange = {e => handleChange(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAlbedo} color="primary">
              Sign with Albedo
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar open={SnackbarOpen} autoHideDuration={6000}>
        <Alert onClose={handleClose} severity="success">
          Transaction was succesful!
        </Alert>
      </Snackbar>
      </div>
    )
  
}
