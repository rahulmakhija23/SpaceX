
import React from 'react'

export default function Spacecard(props) {
   return (
      <div className="content-list">
      {
      (props.state.isLoaded) ?
         props.state.notFound=== false ?
         props.state.spaceships.map((data , i) => 
         <div className="spaceBox" key={i}>
            <figure>
               <img src={data.links.mission_patch} alt={data.mission_name} />                        
            </figure>
            <h3>{data.mission_name}</h3>
            <ul>
               <li>Mission IDS:
                  {data.mission_id? 
                  <ul className="mission_id_list">{
                     data.mission_id.map((mission_id , id_i)=> 
                        <li key={id_i} >{mission_id }</li>
                     )
                  }
                  </ul>
                  :
                  ''   
               }
               </li>
               <li>Launch Year: <span> {data.launch_year} </span> </li>
               <li>Successful Launch:  <span> {data.launch_success? 'True' : 'False' } </span> </li>
               <li>Successful Landing: <span> {data.rocket.first_stage.cores[0].land_success === null || data.rocket.first_stage.cores[0].land_success === false? 'False' :'True'}</span> </li>
            </ul>
         </div>
      )
      :
         <div >not found </div>      
      :                             
         <div>Please Wait...</div>
      }
   </div>
   )
}
