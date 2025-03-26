import './App.css';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid2';
import * as React from 'react';

function ScheduleComponent(props) {

  const [page,setPage] = useState(0)

  if (!props.games){
    return
  }

  function scheduleCard(game) {

    return(
      <React.Fragment>
        <Grid item size={100}>
          <Card className='gamesCard' sx={{width:'100%'}}>
            <CardContent>        
              <div>
                <Typography gutterBottom sx={{fontSize: 18}}>
                  {game.gameDate}
                </Typography>
              </div>
              <Box sx={{display: "flex", alignItems: 'center'}}>        
                  <Typography gutterBottom sx={{fontSize: 18, }}>
                    {game.awayTeam.abbrev}
                  </Typography>
                  <Typography gutterBottom sx={{fontSize: 18, }}>
                    {game.homeTeam.abbrev}
                  </Typography>
              </Box>
            </CardContent>     
          </Card>
        </Grid>
      </React.Fragment>      
    )

  }
  
  return(     
    <React.Fragment>      
      <Grid item size={1}>
        <Button className="scheduleBackBtn"
          variant='contained'
          sx={{height: '100%'}}
          onClick={() => setPage(page-4)}>        
        </Button>
      </Grid>    
      <Grid container item size={10}>
        <div className='gamesContainer' style={{display: "flex", width: '100%'}}>
          {props.games.slice(page, page+5).map(game => scheduleCard(game))}        
        </div>      
      </Grid>         
      <Grid item size={1}>
        <Button className="scheduleNextBtn"
          variant='contained'
          
          sx={{height: '100%'}}
          onClick={() => setPage(page+4)}
        >        
        </Button>
      </Grid>                   
    </React.Fragment>
  )
}

function App() {

  const [res, setRes] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/remainingSchedule", {
      method: "GET",      
    }).then((response) => response.json())
    .then((json) => {
      setRes(json);
    })
  }, [])

  return (
    <Box className="App">      
      <Grid container className="mainContainer">
        <Grid container item size={12}>
          <ScheduleComponent
            games={res.games}
          />              
        </Grid>        
      </Grid>        
    </Box>      
  );
}

export default App;
