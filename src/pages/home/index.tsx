import { Divider, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react'
import { Card } from '../../components/card';


export function Home(){

  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState('15');

  const pexels_api_key = '563492ad6f9170000100000154edb61a49424ade9debf61a30962166'

  const getImages = async () => {

    if(search === ""){
      return
    }

    const data = await fetch (`https://api.pexels.com/v1/search?query=${search}&per_page=${page}`, {
      headers: {
        Authorization: pexels_api_key,
      },
    }) 

    const dataJson = await data.json()
    console.log(dataJson);
    setImages(dataJson.photos)
  }
  
  console.log(images);
  
  return (
    
      <Grid container>
        <Grid container flexDirection={'column'} gap={2} margin={3}>
          <Typography variant='h3'>PEXELS API IMAGES</Typography>
          <TextField variant='outlined' label='Enter Key Word' placeholder='Search Images' value={search} onChange={(e) => setSearch(e.target.value)} />
          <Grid container gap={2}>
            <TextField variant='outlined' label='Number of Images (max-80)' value={page} onChange={(e) => setPage(e.target.value)} />
            <Button variant='contained' size='large' onClick={getImages}>Search</Button>
          </Grid>
          <Divider/>
        </Grid>
      
        <Grid container mt={3} alignItems={'center'} justifyContent={"space-around"}>
          
            {
              images.map((item, index)=> {
                return (
                  <div key={index}>
                    <Card img={item}/>
                  </div>
                )
              })
            }
          
        </Grid>
      </Grid>
  )
}