import React, {useState, useCallback, useEffect} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import PropTypes from 'prop-types'
import api from '../services/productAPI'

function Product({productData: {id, title, price, category, description, image}}) {

  const renderDescription = (description) => <Typography variant="subtitle2" color="success">{description.substring(0, 25)} ... More</Typography>

    return (
      <Grid item xs={12}  md={6} lg={4}>
      <Card variant="elevation" sx={{padding: 2, m: 1}}>
        <CardMedia title="" image={image} sx={{ height: "200px", borderRadius: 2 }} />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0
          }}
        >
          <Chip label={category} variant="outlined" sx={{mt: 1}}/>
          <Typography variant="subtitle1" color="primary" sx={{mt: 1, textAlign:'left'}}>
            {title.substring(0, 25)}
          </Typography>
          {renderDescription(description)}
        </CardContent>

        <Grid
          container
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          alignContent="stretch"
          wrap="nowrap"
          sx={{mt:"1px"}}
          
        >
          <Grid item md={4} textAlign={"left"}>
            <Typography variant="body2" color="initial">
              Preço
            </Typography>
            <Typography variant="body2" color="initial">
              $ {price}
            </Typography>
          </Grid>
          <Grid item md={8} justifySelf={"flex-end"} textAlign={"right"}>
            Add To Cart
          </Grid>
        </Grid>
      </Card>
      </Grid>
    )
  }


export default Product;

