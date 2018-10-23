import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
// core components
import ChartistGraph from "react-chartist";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import avatar from "assets/img/faces/Male.jpeg";
import Grid from "@material-ui/core";

import {
  adherenceBreakdownChart1,
} from "variables/charts.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  notchedOutline: {
    borderColor: "blue"
  },
  notchedOutlineYellow: {
    borderColor: "orange"
  }
};

function UserProfile(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Detailed Information</h4>
              <p className={classes.cardCategoryWhite}>Adherence data</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Dispenser ID"
                    id="dispenser-id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue: "SD0501"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Refill ID"
                    id="refill-id"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue: "CD0231"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Prev Start Date"
                    id="prev-start-date"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: false,
                      defaultValue: "12-09-2018"
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    error
                    id="outlined-error"
                    label="Today's Dose Adherence"
                    defaultValue="Delayed"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-error"
                    label="Dose Completion"
                    defaultValue="24/28"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                     
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    id="outlined-error"
                    label="Upcoming Refill Start Date"
                    defaultValue="26-10-2018"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <h3 className={classes.cardTitle}>Medicines Information</h3>
                <Table
                  tableHeaderColor="info"
                  tableHead={[
                    "Name",
                    "Acronym",
                    "Form",
                    "Strength",
                    "Number of tablets"
                  ]}
                  tableData={[
                    ["Levofloxacin", "Lfx", "Tab", "1000", "2"],
                    ["Ethionamide", "Eto", "Tab", "1000", "4"],
                    ["Kanamycin", "Km", "Injection", "-", "-"],
                    ["Pyrazinamide", "Z", "Tab", "2000", "2"]
                  ]}
                />
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Card chart>
                    <CardHeader>
                      <ChartistGraph
                        className="ct-chart"
                        data={adherenceBreakdownChart1.data}
                        type="Pie"
                        options={adherenceBreakdownChart1.options}
                        responsiveOptions={
                          adherenceBreakdownChart1.responsiveOptions
                        }
                        listener={adherenceBreakdownChart1.animation}
                      />
                    </CardHeader>
                    <CardBody>
                      <h4 className={classes.cardTitle}>Adherence Breakdown</h4>
                      <p className={classes.cardCategory}>
                        <span className={classes.successText}>18/28</span> Doses
                        On-time
                      </p>
                    </CardBody>
                    <CardFooter chart>
                      <div className={classes.stats} />
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary">Update Profile</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle}>Swadesh Kumar</h4>
              <h4 className={classes.cardCategory}>Conventional MDR/RR TB</h4>
              <Info> DL-LNC-01-01-18-0171</Info>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Weightband</Primary>
                    72kg
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Phase</Primary>
                    Initial
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Medicines</Primary>
                    Lfx,Eto,Km,Cs
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Pills/Dose</Primary>
                    16
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Pouch/Dose</Primary>4
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <p className={classes.description}>
                    <Primary>Doctor</Primary>
                    Dr. Ashwini
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <p className={classes.description}>
                    <Primary>Location</Primary>
                    Delhi
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <p className={classes.description}>
                    <Primary>Mobile</Primary>
                    9204213212
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <p className={classes.description}>
                    <Primary>Mr.Ramesh</Primary>
                  </p>
                </GridItem>
                <GridItem xs={12} sm={12} md={5}>
                  <Button color="primary">Contact Worker</Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
