import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({ info }) {
    const IMG = "https://images.unsplash.com/photo-1596627008830-41d373a44a96?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return (
        <div className='infoBox'>
            <h1>Weather Card</h1>
          <div className='card'>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={IMG}
              title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}</p>
                <p>Min_Temp = {info.tempMin}&deg;C</p>
                <p>Max_Temp = {info.tempMax}&deg;C</p>
                <p>
                  The Weather Can be Described as{" "}<i>{info.weather}</i> and it feels like {info.feelsLike}&deg;
                </p>
              </Typography>
            </CardContent>
          </Card>
          </div>
        </div>
    )
}