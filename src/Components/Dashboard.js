import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import Spacecard from './Spacecard'


class Dashboard extends React.Component{
  
  launch_success = '';
  landing_success = '';
  launch_year = '';
    constructor(props){
        super(props)
        this.state={
            spaceships:[],
            isLoaded:false,
            notFound:true,
        }
    }
    componentDidMount(){
        axios.get('https://api.spacexdata.com/v3/launches?limit=100')
        .then(res => {
            const space = res.data;
            this.setState({ 
            spaceships:space,
            isLoaded:true,
          notFound:false });
          })
      }
   
 
    updatedSpaceships=(e,type,value)=>{
      this.setState({
        spaceships:[],
        isLoaded:false,
        notFound:true
      })
      var params="?limit100";
      if(type==="launch_year"){
        this.launch_year=`&${type}=${value}`
      }
      else if(type==="landing_success"){
        this.landing_success=`&${type}=${value}`
      }
      else if(type==="launch_success"){
        this.launch_success=`&${type}=${value}`
      }
      params+=this.launch_year+this.landing_success+this.launch_success
      const url='https://api.spacexdata.com/v3/launches'
      axios.get(`${url+params}`)
      .then(res=>
        {
          const space=res.data;
          res.data.length>1?
            this.setState({
            spaceships:space,
            isLoaded:true,
            notFound:false,
          }):
          this.setState({
            isLoaded:false,
            notFound:true,
          })
        })
    }

    render(){

        return(
           <>
           <main id="page-wrapper">
            <h1 >Space X Launch Programs</h1>
            <div className="filters-content-list">
            <div className="filters" >
           <h3> Filters</h3>
          <div className="launch-year common-filter-styling">
            <h4>Launch</h4>
             <ul>
               <li>
                 <div>
                 <input type="radio" name="years" id="2006" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2006)}/>
                 <label htmlFor="2006">2006</label>
               </div>
              </li>
             
              <li>
                 <div>
                 <input type="radio" name="years" id="2007" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2007)}/>
                 <label htmlFor="2007">2007</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2008" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2008)}/>
                 <label htmlFor="2008">2008</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2009" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2009)}/>
                 <label htmlFor="2009">2009</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2010" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2010)}/>
                 <label htmlFor="2010">2010</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2011" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2011)}/>
                 <label htmlFor="2011">2011</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2012" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2012)}/>
                 <label htmlFor="2012">2012</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2013" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2013)}/>
                 <label htmlFor="2013">2013</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2014" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2014)}/>
                 <label htmlFor="2014">2014</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2015" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2015)}/>
                 <label htmlFor="2015">2015</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2016" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2016)}/>
                 <label htmlFor="2016">2016</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2017" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2017)}/>
                 <label htmlFor="2017">2017</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2018" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2018)}/>
                 <label htmlFor="2018">2018</label>
               </div>
              </li>


              <li>
                 <div>
                 <input type="radio" name="years" id="2019" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2019)}/>
                 <label htmlFor="2019">2019</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2020" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2020)}/>
                 <label htmlFor="2020">2020</label>
               </div>
              </li>

              <li>
                 <div>
                 <input type="radio" name="years" id="2020" onClick={(e)=>this.updatedSpaceships(e,'launch_year',2020)}/>
                 <label htmlFor="2020">2020</label>
               </div>
              </li>
              </ul>
              </div>
              <div className="successful-launch common-filter-styling">
                     <h4>Successful Launch</h4>
                     <ul>
                        <li>
                           <div>
                              <input type="radio"  onClick={ (e)=> {this.updatedSpaceships(e, 'launch_success' , true)}}  name="launch" id="success-true" />
                              <label htmlFor="success-true"> True </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio"  onClick={ (e)=> {this.updatedSpaceships(e, 'launch_success' , false)}}  name="launch" id="success-false" />
                              <label htmlFor="success-false"> False </label>                                 
                           </div>
                        </li>                        
                     </ul>
                  </div>
                  <div className="successfull-landing common-filter-styling">
                     <h4>Successful Landing</h4>
                     <ul>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.updatedSpaceships(this, 'land_success' , true)}}  name="landing" id="landing-true" />
                              <label htmlFor="landing-true"> True </label>                                 
                           </div>
                        </li>
                        <li>
                           <div>
                              <input type="radio"  onClick={ ()=> {this.updatedSpaceships(this, 'land_success', false)}} name="landing" id="landing-false" />
                              <label htmlFor="landing-false"> False </label>                                 
                           </div>
                        </li>                        
                     </ul>
                  </div>    
              </div>
              <Spacecard state={this.state}/>
          </div>
          <div><p>Developed By:Rahul Makhija</p></div>
      </main>
 </>

        )
    }
}
export default Dashboard