import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"

const image = "https://picsum.photos/200/300"

function ProductDetails() {
    return(
       <>
       <Container maxWidth="lg">
       <Card variant="elevation" sx={{padding: 2}}>
        <CardMedia title="" image={image} sx={{ height: "200px", borderRadius: 2 }} />

        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0
          }}
        >
          <Chip label="Categoria" variant="outlined" sx={{mt: 1}}/>
          <Typography variant="subtitle1" color="primary" sx={{mt: 1}}>
            Título do Produto
          </Typography>
          <Typography variant="subtitle2" color="success">
            Descrição do produto
          </Typography>
        </CardContent>

        <Grid
          container
          spacing={1}
          direction="row"
          justify="space-between"
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
              $ 120
            </Typography>
          </Grid>
          <Grid item md={8} justifySelf={"flex-end"} textAlign={"right"}>
            Add To Cart
          </Grid>
        </Grid>
      </Card>
       </Container>
       </>
    )
}

export default ProductDetails