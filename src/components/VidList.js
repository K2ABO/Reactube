import React from 'react'
import { Grid  } from "@material-ui/core";
import VidItem from './VidItem'
function VidList({video,onVideoSelect}) { 
const listOfVideos = video.map ((param,id) =>  <VidItem key={id}  video = {param}  onVideoSelect={onVideoSelect} />)

    return (
        <Grid  container spacing ={8}>
            {listOfVideos} 
        </Grid>
    )  
    
}

export default VidList

