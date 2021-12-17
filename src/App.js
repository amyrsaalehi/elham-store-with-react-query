import { Container, Box, Grid, Typography, Skeleton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useQuery } from "react-query";
import { PRODUCT_ENDPOINTS } from "./api/endpoints";
import { fetcher } from "./api/fetcher";

const App = () => {
  const { data, isLoading, isError } = useQuery('products', fetcher(PRODUCT_ENDPOINTS.getProducts()));
  const classes = useStyles();


  return (
    <Container maxWidth="lg">
      <Grid container gap={1} justifyContent={'center'}>
        {isLoading &&
          [0, 1, 2, 3, 4].map(i => (
            <Grid key={i} container style={{
              backgroundColor: '#ffc0cb52', borderRadius: 8, maxWidth: 250, height: 300,
              position: 'relative',
            }} pb={2} >
              <Grid item container style={{
                backgroundColor: '#ffc0cb52', borderRadius: 8, width: '100%', height: 50,
                position: 'absolute', bottom: 0,
              }} justifyContent={'space-between'} alignItems={'center'} px={2}>
                <Grid item >
                  <Skeleton variant="text" width={80} sx={{ bgcolor: 'pink' }} />
                </Grid>
                <Grid item >
                  <Skeleton variant="text" width={50} sx={{ bgcolor: 'pink' }} />
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
      <Grid container gap={1} justifyContent={'center'}>
        {
          data && data?.data.map(product => (
            <Grid item xs={12} md={4} lg={3} className={classes.box} style={{
              backgroundImage: `url(${product.image})`,
            }} >
              <Grid container p={2} className={classes.content} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item xs={6}>
                  <Typography variant="h5">
                    {product.title}
                  </Typography>
                </Grid>
                <Grid item xs={6} textAlign={'right'}>
                  <Typography>
                    {`\$${product.price}`}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  box: {
    position: 'relative',
    backgroundColor: '#277daf',
    borderRadius: 8,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: 300,
    '& p, & h5': {
      color: '#fff',
    }
  },
  content: {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%)',
    position: 'absolute',
    bottom: 0,
    borderRadius: 8,
  }
}))

export default App;