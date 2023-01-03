import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating name="no-value" value={null} />
    </Box>
  );
}