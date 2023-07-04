import React from 'react'

export default function Games() {

const Games= ["bowling", "athletics","freestyle wrestling", 
  "weightlifting", 
  "fencing", 
 " archery", 
  "badminton", 
  "field hockey", 
  "diving", 
  "cricket",];
  let cgpa= 4;

  return (
    <div className='py-5 text-center bg-light mb-5 Games'>
    <div className="containe">
        <div className="row">
            <div className="col">
                <h1>Games section</h1>
                <p className='text-center fw-bold'>{cgpa >=4 ? "Good" : "fail"}</p>
                <div className="text-center">
                  <ul>
                    {
Games.map((Game, i)=>{
return <li key={i} className='fw-bold '>{i + 1 } {Game}</li>

})


}
                  </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
