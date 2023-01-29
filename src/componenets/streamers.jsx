import React, { useEffect,useState }  from 'react';
import moment from 'moment'
import api from './twitch-api'

export function Streamers() {
  const [streams, setStreams] = useState([]);

 
useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const result = await api.get("https://api.twitch.tv/helix/streams", { params: { first: 50 } })
    const streamsData = [];
    if(result){
      const firstThirty = result?.data?.data?.slice(0,30) //take first 30 streams, because twitch return not exact number of streams
      firstThirty?.forEach(x=>
        {
          const streamStartTimeFormat = moment(x.started_at)
          streamsData.push({
            userName: x.user_name,
            viewersNumber: x.viewer_count,
            game: x.game_name,
            startTime: streamStartTimeFormat.format('LLL'),
            streamDuration: streamStartTimeFormat.fromNow()
          })
        }
      )
    }
    console.log(streamsData)
    setStreams(streamsData)
  }

  fetchData()
}, [])


      return (
        <div>
          <div className="App">
        <div className="App-header">
        {streams && streams?.length > 0 ? streams.map( (stream, index) => ( 
        <div className="StylerCard">
          <div>Stream #{index+1}:<p style={{fontWeight: 'bold'}}>{stream.userName} </p>now streaming {stream.game}</div>
          <div>Viewers: {stream.viewersNumber}</div>
          <div>Started {stream.startTime} {stream.streamDuration}</div>
        </div>
        )):
        <div>No streams found</div>
        }  
        </div>
      </div>
        </div>
      );
  }
