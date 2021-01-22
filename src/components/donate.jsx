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


export default function Donate() {
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
  
    albedo.pay({
        amount: value,
        destination: 'GBCGF6VBJMM3FUYORTHN6DH46GM3QIXOHXI3O3U3O7A7XT6CFHLBTKR4',
        memo_type: "MEMO_TEXT",
        memo: "TeamTrees",
        network: 'testnet',
        asset_code: 'IZD',
        asset_issuer: 'GACHXSM2GCZSLVKFD76D7MBLIIZARHRTO4R4OMZ5NNYRR3WCYNWGOFRK',
        submit: true
    })
        .then(res => {
            console.log(res.amount, res.destination, res.asset_code, res.asset_issuer, res.memo, res.memo_type, res.signed_envelope_xdr, res.pubkey, res.tx_signature, res.network, res.horizon)
            setOpenSnackbar(true)
        }) .catch(e => {
                console.error(e)
            
        })

  }
  
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Donate to TeamTrees
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Donate to TeamTrees</DialogTitle>
          <DialogContent>
            <DialogContentText>
              
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="How Much IZD do you want to donate to TeamTrees?"
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
