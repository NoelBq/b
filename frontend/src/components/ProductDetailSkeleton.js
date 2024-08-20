import React from 'react'
import { Grid, CardContent, Skeleton } from '@mui/material'

function ProductDetailSkeleton() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Skeleton variant="text" width="40%" />
      <Skeleton variant="rectangular" height={200} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <Skeleton variant="rectangular" height={200} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="100%" />
      </CardContent>
    </Grid>
  </Grid>
  )
}

export default ProductDetailSkeleton