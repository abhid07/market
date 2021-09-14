import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cardlayout.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardLayout({ getQuantity, img, name, available, price, category, vendor, buyProduct, quantity }) {
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title={name}
                />
                <CardContent>
                    <div className="flex">
                        <Typography variant="body1" color="textPrimary" component="p">
                            Available quantity:<span className="card-span">{available}</span>
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            Category:<span className="card-span">{category}</span>
                        </Typography>
                    </div>
                    <div className="flex" style={{ marginTop: "20px" }}>
                        <Typography variant="body1" color="textPrimary" component="p">
                            Price:<span className="card-span">{price}</span>
                        </Typography>
                        <Typography variant="body1" color="textPrimary" component="p">
                            Vendor:<span className="card-span">{vendor}</span>
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <input type="number" onChange={(e) => getQuantity(e, name)} min={1} id={name} value={quantity[name]} />
                <Button className="buy-btn" onClick={(e) => buyProduct(e, name, price)}>
                    Buy
                </Button>
            </CardActions>
        </Card>

    );
}
