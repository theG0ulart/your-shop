import React, { useState, useCallback, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Product from "../components/Product";
import SelectedCategoryList from "../components/FilterCategory";
import SearchInput from "../components/SearchInput";
import Box from "@mui/material/Box";

import api from "../services/productAPI";

function Products() {
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleProducts = useCallback((data) => {
    setProductList(data[0]);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  useEffect(() => {
    Promise.all([api.getProducts(selectedCategory)]).then(handleProducts);
  }, [selectedCategory]); // Only trigger effect when selectedCategory changes

  const filteredProducts = productList.filter((product) => {
    const categoryMatch = !selectedCategory || product.category === selectedCategory;
    const searchMatch = !searchQuery || (product.title && product.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return categoryMatch && searchMatch;
});


  return (
    <>
      <Container maxWidth="lg">
        <SearchInput onSearch={handleSearch} />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap-reverse",
            justifyContent: "space-between",
            margin: "auto",
          }}
          margin={"auto"}
        >
          <Grid container spacing={2} columnSpacing={1} maxWidth={"md"} margin={"auto"} key={`product-`}>
            {filteredProducts?.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
          </Grid>
          <SelectedCategoryList categoryId={selectedCategory} onSelectCategory={handleCategorySelect} />
        </Box>
      </Container>
    </>
  );
}

export default Products;
