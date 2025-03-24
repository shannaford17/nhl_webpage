import logo from './logo.svg';
import './App.css';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useEffect, useState } from 'react';

function ScheduleComponent(props) {

  if (!props.games){
    return
  }

  function scheduleCard(game) {

    return(
      <Card sx={{width:300}}>
        <CardContent>        
          <div>
            <Typography gutterBottom sx={{fontSize: 18}}>
              {game.gameDate}
            </Typography>
          </div>
          <Box sx={{display: "flex", alignItems: 'center', pl: 1, pb: 1 }}>        
              <Typography gutterBottom sx={{fontSize: 18, width: 100}}>
                {game.awayTeam.abbrev}
              </Typography>
              <Typography gutterBottom sx={{fontSize: 18, width: 100}}>
                {game.homeTeam.abbrev}
              </Typography>
          </Box>
        </CardContent>     
      </Card>
    )

  }
  
  return( 
    <div style={{display: "flex"}}>
      {props.games.map(game => scheduleCard(game))}
    </div>    
  )
}

function App() {

  const [res, setRes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/weeklySchedule", {
      method: "GET",      
    }).then((response) => response.json())
    .then((json) => {
      setRes(json);
    })
  }, [])

  return (
    <div className="App">      
      <div className="mainContainer">
        <ScheduleComponent 
          games={res.games}
        />
      </div>
    </div>
  );
}

export default App;
