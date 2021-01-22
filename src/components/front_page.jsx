import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Trade_IZD_To_XLM from "./trade-izd-to-xlm";
import Trade_XLM_To_IZD from './trade-xlm-to-izd';
import Donate from './donate';
import Logo from './static/Logo.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.control} spacing={2}>
        <div class="imageContainer">
          <img src={Logo} alt="Logo" />
        </div>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[<Trade_IZD_To_XLM/>, <Trade_XLM_To_IZD/>, <Donate/>].map((value) => (
            <Grid key={value} item>
              
                {value}
              
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
