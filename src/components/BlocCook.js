import React from 'react';

const BlocCook = ({c}) => {
    
   console.log(c);
    return (
        <div className='bloc-cook'>
          <div>
                <div >
                    <h2>{c.strMeal}</h2>
                </div> 
                <div>
                    <h4>Orgine : {c.strArea}</h4>
                </div>
                <div className="img-container">
                    <img src={c.strMealThumb} alt="" /> 
                </div>
                <div className="info-container">
                    <span>
                        {c.strInstructions}
                        {/* {c.strInstructions.substring(0, 390)+" ..."} */}
                    </span>
                </div>
            </div>    
        </div>
        
        

    );
};

export default BlocCook;