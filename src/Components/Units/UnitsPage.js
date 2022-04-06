import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Slider from 'react-input-slider';
import '../../Styles/Units.scss';
import UnitsData from '../../data/age-of-empires-units.json';

import {  useDispatch } from 'react-redux';

function UnitsPage() {

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const [ages, setAges] = React.useState("All")
  const [woodcheck, setWoodcheck] = React.useState(false)
  const [woodslider, setWoodslider] = React.useState(200)

  const [foodcheck, setFoodcheck] = React.useState(false)
  const [foodslider, setFoodslider] = React.useState(200)

  const [goldcheck, setGoldcheck] = React.useState(false)
  const [goldslider, setGoldslider] = React.useState(200)

  let food = null;
  let wood = null;
  let gold = null;
  let foodCostamount = null;
  let woodCostamount = null;
  let goldCostamount = null;

  
  // Printing Units
  const UnitTable = (props) =>{
    return(
      <tr className="tabledata" onClick={(e) => goToUnitDetailPage(e, props)}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.food !== null ?props.food :null} {props.wood !== null ?props.wood :null} {props.gold !== null ?props.gold :null}</td>
      </tr>
    );
  }

  // Go Detail Page
  const goToUnitDetailPage = (e, data) => {
    let unitData;    
    // access unit data
    (UnitsData.units).map( val => {
      if(data.id === val.id){
        unitData = val;
      }  
    })

    // write data to global variable
    dispatch({type: 'PASS_UNIT', payload: {name: unitData}});

    // go unit detail page
    navigate("/unit-detail");
  }

  return (
    <div className="UnitsPage">
        <div className="Navbar">
            <p className="Header">Units Page</p>
            <div className="Link">
              <Link className="LinkHome" to="/">Home</Link>
              <Link className="LinkUnits" to="/units">Units</Link>
            </div>
        </div>

        <div className="containerblock">
              <div className="Filter">

                <p className="subHeaders">Ages</p>
                <div className="Buttons">
                  <button className="innerButton" onClick={() => setAges("All")} type="button" style={{ background: ages==='All' ? 'gray' : 'white' }}>All</button>
                  <button className="innerButton" onClick={() => setAges("Dark")} type="button" style={{ background: ages==='Dark' ? 'gray' : 'white' }}>Dark</button>
                  <button className="innerButton" onClick={() => setAges("Feudal")} type="button" style={{ background: ages==='Feudal' ? 'gray' : 'white' }}>Fedual</button>
                  <button className="innerButton" onClick={() => setAges("Castle")} type="button" style={{ background: ages==='Castle' ? 'gray' : 'white' }}>Castle</button>
                  <button className="innerButton" onClick={() => setAges("Imperial")} type="button" style={{ background: ages==='Imperial' ? 'gray' : 'white' }}> Imperial</button>
                </div>

                <p className="subHeaders" style={{marginBottom: 20}}>Costs</p>
                <div className="SlideFilter"> 
                  <input type="checkbox" onChange={() => {   
                    if(woodcheck===true){
                      setWoodslider(200)
                    }
                    setWoodcheck(!woodcheck)}}/>
                  <p  className="subHeaders" style={{marginLeft: 10, marginRight: 30}}>Wood</p>
                
                {
                  woodcheck?
                  <Slider
                  axis="x"
                  x={woodslider}
                  onChange={({ x }) => setWoodslider(x)}
                  xmin={0}
                  xmax={200}
                  />  
                  :
                  <Slider
                  disabled
                  axis="x"
                  x={woodslider}
                  onChange={({ x }) => setWoodslider(x)}
                  xmin={0}
                  xmax={200}
                  />  
                  }

                  <p style={{marginLeft: 20, fontSize: 28}}> 0 - {woodslider}</p>
                </div>

                <div className="SlideFilter"> 
                  <input type="checkbox" onChange={() => {
                    if(foodcheck===true){
                      setFoodslider(200)
                    }
                    setFoodcheck(!foodcheck)}}/>
                  <p className="subHeaders" style={{marginLeft: 10, marginRight: 30}}>Food</p>
                  
                  {
                    foodcheck?
                    <Slider
                    axis="x"
                    x={foodslider}
                    onChange={({ x }) => setFoodslider(x)}
                    xmin={0}
                    xmax={200}
                    />  
                    :
                    <Slider
                    disabled
                    axis="x"
                    x={foodslider}
                    onChange={({ x }) => setFoodslider(x)}
                    xmin={0}
                    xmax={200}
                    />  
                  }

                  <p style={{marginLeft: 20, fontSize: 28}}>0 - {foodslider}</p>
                </div>

                <div className="SlideFilter"> 
                <input type="checkbox" onChange={() => {
                  if(goldcheck===true){
                    setGoldslider(200)
                  }
                  setGoldcheck(!goldcheck)}}/>
                <p className="subHeaders" style={{marginLeft: 10, marginRight: 30}}>Gold</p>
                  {
                    goldcheck?
                    <Slider
                    axis="x"
                    x={goldslider}
                    onChange={({ x }) => setGoldslider(x)}
                    xmin={0}
                    xmax={200}
                    />  
                    :
                    <Slider
                    disabled
                    axis="x"
                    x={goldslider}
                    onChange={({ x }) => setGoldslider(x)}
                    xmin={0}
                    xmax={200}
                    />  
                  }
                  <p style={{marginLeft: 20, fontSize: 28}}> 0 - {goldslider} </p>
                </div>

              </div>

              <div className="Units">
                      <table className="table">
                          <thead>
                              <tr>
                                  <th className="tableid">id</th>
                                  <th className="tablename">name</th>
                                  <th className="tableage">age</th>
                                  <th className="tablecosts">costs</th>
                              </tr>
                          </thead>
                          <tbody>
                          {
                              (UnitsData.units).map( val => {
                                // Printing Costs
                                if(val.cost && val.cost.Food !== undefined){
                                  foodCostamount = val.cost.Food 
                                  food = "Food: " + val.cost.Food 
                                }
                                else{
                                  foodCostamount = null
                                  food = null
                                }

                                if(val.cost && val.cost.Wood !== undefined){
                                  woodCostamount = val.cost.Wood 
                                  wood = "Wood: " + val.cost.Wood 
                                }
                                else{
                                  woodCostamount = null
                                  wood = null
                                }

                                if(val.cost && val.cost.Gold !== undefined){
                                  goldCostamount = val.cost.Gold 
                                  gold = "Gold: " + val.cost.Gold 
                                }
                                else{
                                  goldCostamount = null
                                  gold = null
                                }

                                if( ages !== "All" )
                                {
                                  // Filter Ages
                                  if(ages === val.age){
                                    // Filter Empty Costs
                                    if( val.cost === null ){
                                      return(
                                        <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                      );
                                    }
                                    else{
                                      // Filter Costs
                                      if( foodCostamount !== null && goldCostamount !== null ){
                                          if(foodCostamount >= foodslider || goldCostamount >= goldslider ){
                                            return(
                                              null
                                            );
                                          }
                                          else{
                                            return(
                                              <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                            );
                                          }
                                      }
                                      else if( foodCostamount !== null && woodCostamount !== null ){
                                        if(foodCostamount >= foodslider || woodCostamount >= woodslider ){
                                          return(
                                            null
                                          );
                                        }
                                        else{
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                      }
                                      else if( woodCostamount !== null && goldCostamount !== null ){
                                        if(woodCostamount >= woodslider || goldCostamount >= goldslider ){
                                          return(
                                            null
                                          );
                                        }
                                        else{
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                      }
                                      else if( foodCostamount !== null ){
                                        if(foodCostamount <= foodslider ){
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                        else{
                                          return(
                                            null
                                          );
                                        }
                                      }
                                      else if( woodCostamount !== null ){
                                        if(woodCostamount <= woodslider ){
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                        else{
                                          return(
                                            null
                                          );
                                        }
                                      }
                                      else if( goldCostamount !== null ){
                                        if(goldCostamount <= goldslider ){
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                        else{
                                          return(
                                            null
                                          );
                                        }
                                      }
  
                                    }
                                    
                                    
                                  }
                                  else{
                                    return(
                                      null  
                                    );
                                  }
                                    
                                }
                                else{
                                  // Filter Empty Costs
                                  if( val.cost === null ){
                                    return(
                                      <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                    );
                                  }
                                  else{
                                    // Filter Costs
                                    if( foodCostamount !== null && goldCostamount !== null ){
                                        if(foodCostamount >= foodslider || goldCostamount >= goldslider ){
                                          return(
                                            null
                                          );
                                        }
                                        else{
                                          return(
                                            <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                          );
                                        }
                                    }
                                    else if( foodCostamount !== null && woodCostamount !== null ){
                                      if(foodCostamount >= foodslider || woodCostamount >= woodslider ){
                                        return(
                                          null
                                        );
                                      }
                                      else{
                                        return(
                                          <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                        );
                                      }
                                    }
                                    else if( woodCostamount !== null && goldCostamount !== null ){
                                      if(woodCostamount >= woodslider || goldCostamount >= goldslider ){
                                        return(
                                          null
                                        );
                                      }
                                      else{
                                        return(
                                          <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                        );
                                      }
                                    }
                                    else if( foodCostamount !== null ){
                                      if(foodCostamount <= foodslider ){
                                        return(
                                          <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                        );
                                      }
                                      else{
                                        return(
                                          null
                                        );
                                      }
                                    }
                                    else if( woodCostamount !== null ){
                                      if(woodCostamount <= woodslider ){
                                        return(
                                          <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                        );
                                      }
                                      else{
                                        return(
                                          null
                                        );
                                      }
                                    }
                                    else if( goldCostamount !== null ){
                                      if(goldCostamount <= goldslider ){
                                        return(
                                          <UnitTable id={val.id} name={val.name} age={val.age} food={food} wood={wood} gold={gold}  />
                                        );
                                      }
                                      else{
                                        return(
                                          null
                                        );
                                      }
                                    }

                                  }
                                    
                                }
                                    

                              })
                          }
                            
                          </tbody>
                      </table>
              </div>
        </div>
    </div>
  );
}

export default UnitsPage;
