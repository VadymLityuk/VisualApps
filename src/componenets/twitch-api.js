/*import React from 'react';

     fetch("https://api.twitch.tv/helix/users?login=Machinex_RDHT", {
    
        mode: 'cors',
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
           Token: "sfg999666t673t7t82",
           Authorization:' Bearer lemyelxi96pnvc2u9xacgijg22wmp4',
           "Client-Id":' 05qvogorbv8wiqldvu669c6kesercm',
       },
      method: "GET"
      })   
*/

import axios from 'axios'
let api = axios.create({
  headers: {
    'Client-ID': '05qvogorbv8wiqldvu669c6kesercm',
    'Authorization' : 'Bearer lemyelxi96pnvc2u9xacgijg22wmp4'
  }
})
export default api