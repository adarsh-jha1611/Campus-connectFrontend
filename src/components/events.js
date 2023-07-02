import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ted from '../assets/images/ted.png';

export default function ImgMediaCard() {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.from(Array(6).keys()).map((index) => (
          <Card key={index} sx={{ maxWidth: 345, margin: '10px' }}>
            <CardMedia
              component="img"
              alt="ted"
              height="240"
              image={ted}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Event {index + 1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Join us for an exciting evening of live music and entertainment, featuring renowned artists from around the world. Get ready for an unforgettable experience filled with captivating performances and a vibrant atmosphere.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small"> Register</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
