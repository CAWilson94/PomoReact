import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

type TimerProps = {
    minute: string;
}
const Timer = ({ minute }: TimerProps) => {

    const pomodoro = () => {

    }
    const shortBreak = () => {

    }
    const longBreak = () => {

    }
    const timer = () => {
        
    }

    return (
        <div className="Container">
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src="https://i.pinimg.com/originals/e1/a1/17/e1a117e9cacfb963fbb70a805f3e0109.jpg">
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={minute + 'minute timer'}
                    subheader="Get some work done!"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image="https://i.pinimg.com/originals/e1/a1/17/e1a117e9cacfb963fbb70a805f3e0109.jpg"
                    alt="Tomato Here pls"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Something something practise here
                    </Typography>
                </CardContent>
                <CardActions className="StartStopButtons">
                   <Button>Start</Button>
                   <Button>Stop</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default Timer;