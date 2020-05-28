import React from 'react';
import TopFive from "../TopFive/TopFive";
import styled from 'styled-components';
import TopSong from '../TopFive/TopSong';
import { wait } from '@testing-library/react';

const ListLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const CenterTopSong = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const TrackOfTheWeek = styled.div`
  text-align: center;
  font: "Helvetica Narrow";
  font-size: 190%;
  margin-top: 120px;
  margin-bottom: 45px;

  color: #8d8d8d;
`;

const NothingPlaying = styled.div`
  font: "Helvetica Narrow";
  font-weight: light;
  font-size: 320%;
  color: #8d8d8d;
`;

const WeeklyStats = styled.div`
  text-align: center;
  font: "Helvetica Narrow";
  font-size: 190%;
  margin-top: 80px;
  margin-bottom: 20px;

  color: #8d8d8d;
`;

const Bold = styled.span`
 font-weight: bold;
`;

const BackgroundColor = styled.div`
.body {
  background-color: blue;
}
`;

var testArray1 = ["Losing It - Fisher", "Despacito - Justin Bieber", "Saint Pablo - Kanye West", "Jewel - Flume", "Surfin USA - The Beach Boys"];
var testArray2 = ["Hi This Is Flume - Flume", "Worlds - Porter Robinson", "Yeezus - Kanye West", "IGOR - Tyler, The Creator", "VOID - RL Grime"];
var testArray3 = ["Kanye West", "Chrome Sparks", "Joe Pesci", "Dillon Francis", "Boards of Canada"];

class Feed extends React.Component {

  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 1 };
    this.handleClick = this.handleClick.bind(this);

    this.state = {UserObject: 0};
    this.state = {ready: false};
  }

  handleClick() {
    this.setState({counter: this.state.counter+1});
  }

  //runs when page loads
  async componentDidMount(){
    //make initial call to API
    //this.getData();
    this.getData();
    console.log("Initial data received");
    setInterval(() => this.getData(), 10000);
  }


  componentDidUpdate(){
  
  }
  
  async getData() {

    //console.log("TEST: " + window.location.href);

    var unParsed = window.location.href;
    var AuthKey = unParsed.substring(unParsed.lastIndexOf("=") + 1);
    console.log("AUTHKEY: " + AuthKey);
    
    const request = await fetch('http://localhost:8080/spotifyAPI/token?code=' + AuthKey);
    const json = await request.json();
    this.setState({UserObject: json, ready: true});
    
    // create a new XMLHttpRequest
    // var xhr = new XMLHttpRequest()

    // // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here
    //   console.log("RESPONSE: " + xhr.responseText)
    //   this.setState({UserObject: JSON.parse(xhr.responseText)})
    //   this.setState({ready: true})
    // })
    // // open the request with the verb and the url
    // //xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/'+this.state.counter);
    // xhr.open('GET', 'http://localhost:8080/spotifyAPI/token?code=' + AuthKey);
    // // send the request
    // xhr.send()
  }

  render() {
    if (!this.state.ready) {
      return <div />
    }

    return (
      <div>
        {this.state.UserObject.currentlyPlaying 
          ? <div>
            <TrackOfTheWeek> You're <Bold> listening </Bold> to: </TrackOfTheWeek>
            <CenterTopSong>
              <TopSong song={this.state.UserObject.currentlyPlaying}/>
            </CenterTopSong> 
          </div>
        : <div>
            <TrackOfTheWeek> You're <Bold> listening </Bold> to: </TrackOfTheWeek>
            <CenterTopSong>
              <NothingPlaying> nothing for now :) </NothingPlaying>
            </CenterTopSong>
          </div>
        }



        <WeeklyStats> Your monthly <Bold>stats</Bold>: </WeeklyStats>
        
        {(this.state.UserObject.topSongs[0] || this.state.UserObject.topArtists[0])
        ? <div>
          <ListLayout>
              <TopFive type={"Tracks"} items={this.state.UserObject.topSongs} />
              <TopFive type={"Artists"} items={this.state.UserObject.topArtists} />
          </ListLayout>
        </div>
        : <WeeklyStats>Uh oh! You don't have enough listens to view data yet :(</WeeklyStats>
        }
      </div>
    );
  }
}
export default Feed