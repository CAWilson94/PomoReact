import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';

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
            <Card className='TimerCard'>
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
                <CardActions className="StartStopButtons">
                    <Button sx={{ color: 'red' }} variant="text">Pomodoro</Button>
                    <Button sx={{ color: 'red' }} variant="text">Short Break</Button>
                    <Button sx={{ color: 'red' }} variant="text">Long Break</Button>
                </CardActions>
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
                    <IconButton aria-label="play">
                        <PlayArrowRoundedIcon fontSize="large" sx={{color: 'red'}}/>
                    </IconButton>
                    <IconButton aria-label="play">
                        <PauseRoundedIcon fontSize="large" sx={{color: 'red'}}/>
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
}

export default Timer;