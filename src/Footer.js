import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

class Footer extends Component {

  render() {
    const props = {
      name: ''
    }

    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          {this.props.name}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
        {" All rights reserved."}
      </Typography>
    );
  }
}

export default Footer;
