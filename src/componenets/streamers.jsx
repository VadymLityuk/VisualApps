import React,{useEffect,useState} from 'react'
import api from './twitch-api'
import moment from 'moment'


export function Streamers(){
 const[streams,setStreams] = useState([])

 useEffect(()=>{
    // here we gonna declare the data fetching function 
    const fetchData = async()=>{
    const result = await api.get("https://api.twitch.tv/helix/streams",{params:{first: 50}})
    const streamsData = [];
    const firstThirty = result?.data.data?.slice(0,30)// this will allow us to take first 30 streams because twitch data show always one more
          firstThirty?.forEach(x=>{
            const streamStartTime = moment(x.started_at) 
            streamsData.push({
                userName: x.user_name,
                viewersNumber: x.viewer_count,
                game: x.game_name,
                startTime: streamStartTime.format('LLL'),
                streamDuration: streamStartTime.fromNow()
            })
         })
   console.log(streamsData)
   setStreams(streamsData)
}
fetchData()
 },[])

    return(
        <div>
            <div className="App">
                <div className="App-header">
                    {streams && streams.length> 0 ?   streams.map((value,index)=>
                    <div className="streamersCard">
                    <h1>{value.userName}</h1>
                    <p>Viewers: {value.viewersNumber}</p>
                    <p>Game:{value.game}</p>
                    <p>Started:{value.startTime},{value.streamDuration}</p>
                     </div>) :
                        <div className="streamersCard">
                        <h1>No Streams Found</h1>
                        </div>
                     }
                </div>
            </div>
        </div>
    )
}

