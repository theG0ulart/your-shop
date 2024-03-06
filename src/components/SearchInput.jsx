import React, { useState } from "react";
import Textfield from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchInput({ onSearch }) {
    const [searchParams, setSearchParams] = useState({ search: "" });

    const handleChange = (e) => {
        const newSearchParams = { ...searchParams, search: e.target.value };
        setSearchParams(newSearchParams);
        onSearch(newSearchParams.search);
    }

    return (
        <Box my={2} maxWidth={'sm'}>
            <Textfield id="search" label="Search product" value={searchParams.search} variant="outlined" fullWidth onChange={handleChange}/>
        </Box>
    );
}

export default SearchInput;
