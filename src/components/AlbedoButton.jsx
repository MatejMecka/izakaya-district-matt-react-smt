import React, { Component } from 'react';
import { Button } from "@material-ui/core";
import albedo from "@albedo-link/intent";

class LogInWithAlbedo extends Component {
  render() {
    return (
      <div>
        <div>
          <Button
            style={{ width: '207px', height: "40px" }}
            variant="contained"
            color="default"
            onClick={() => {
              albedo.publicKey({
              })
                .then(res => {
                  const {intent, pubkey, signature, signed_message} = res
                  localStorage.setItem('public_key', pubkey);
                  console.log({intent, pubkey, signature, signed_message})
                }) 
            }}> Login With Albedo
          </Button>
        </div>
      </div>
    )
  }
}

export default LogInWithAlbedo