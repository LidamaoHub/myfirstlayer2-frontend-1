import Box from '@mui/material/Box';

const Container = ({ children, ...rest }) => (
  <Box maxWidth="1340px" width={1} margin={'0 auto'} paddingX={2} {...rest}>
    {children}
  </Box>
);

export default Container;
