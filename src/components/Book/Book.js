import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
const Book = props => {
  const classes = useStyles();
  const bookList = props.bookData.items.map(book => {
    const {title, description, subtitle} = book.volumeInfo
    let thumbnail;
    let smallThumbnail;
    if(book.volumeInfo.imageLinks) {
      smallThumbnail =  book.volumeInfo.imageLinks.smallThumbnail;
      thumbnail =  book.volumeInfo.imageLinks.thumbnail;
    }
 
   
    return (
      <Grid item xs={6}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={smallThumbnail === undefined ? 'https://upload.wikimedia.org/wikipedia/commons/7/75/No_image_available.png': smallThumbnail}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {title}
            </Typography>
            <Typography variant="subtitle" color="textSecondary" component="p">
             {subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </Grid>
    );
  });
  return <React.Fragment>{bookList}</React.Fragment>;
};

export default Book;
