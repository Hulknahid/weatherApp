// import React from "react";
// import "./Temp.css";
// import { WiDaySunny } from "react-icons/wi";
// import {
//   FaBattleNet,
//   FaCanadianMapleLeaf,
//   FaEnvira,
//   FaJoomla,
// } from "react-icons/fa";
// const Temp = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="wrap">
//           <div className="search">
//             <input type="search" placeholder="Search..." id="search" />
//           </div>
//           <button className="btn">Search</button>
//         </div>
//         <div className="card">
//           <div className="icon">
//             <WiDaySunny />
//           </div>
//           <div className="cloud">
//             <div className="cloud_left">
//               <h1>28.66&deg;</h1>
//               <div className="para">
//                 <h1>Clouds</h1>
//                 <p>Tokyo, JP</p>
//               </div>
//             </div>
//             <div className="cloud_right">
//               <h3>{new Date().toLocaleString()}</h3>
//             </div>
//           </div>
//           <div className="content">
//             <div className="down">
//               <div className="items">
//                 <FaBattleNet />
//               </div>
//               <div className="title">
//                 <p className="m-0">15:26PM</p>
//                 <p className="m-0">Sunset</p>
//               </div>
//               <p></p>
//             </div>
//             <div className="down">
//               <div className="items">
//                 <FaCanadianMapleLeaf />
//               </div>
//               <div className="title">
//                 <p className="m-0">15:26PM</p>
//                 <p className="m-0">Sunset</p>
//               </div>
//               <p></p>
//             </div>
//             <div className="down">
//               <div className="items">
//                 <FaEnvira />
//               </div>
//               <div className="title">
//                 <p className="m-0">15:26PM</p>
//                 <p className="m-0">Sunset</p>
//               </div>
//               <p></p>
//             </div>
//             <div className="down">
//               <div className="items">
//                 <FaJoomla />
//               </div>
//               <div className="title">
//                 <p className="m-0">15:26PM</p>
//                 <p className="m-0">Sunset</p>
//               </div>
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Temp;

import React, { useEffect, useState } from "react";
import "./Temp.css";
import { WiDaySunny } from "react-icons/wi";
import {
  FaBattleNet,
  FaCanadianMapleLeaf,
  FaEnvira,
  FaJoomla,
} from "react-icons/fa";
const Temp = () => {
  const [searchValue, setSearchValue] = useState("Bangladesh");
  const getWeatherInfo = () => {};
  useEffect(() => {}, []);
  return (
    <>
      <div className="container">
        <div className="wrap">
          <div className="search">
            <input
              type="search"
              placeholder="Search..."
              id="search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
          <button className="btn" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        <div className="card">
          <div className="icon">
            <WiDaySunny />
          </div>
          <div className="cloud">
            <div className="cloud_left">
              <h1>28.66&deg;</h1>
              <div className="para">
                <h1>Clouds</h1>
                <p>Tokyo, JP</p>
              </div>
            </div>
            <div className="cloud_right">
              <h3>{new Date().toLocaleString()}</h3>
            </div>
          </div>
          <div className="content">
            <div className="down">
              <div className="items">
                <FaBattleNet />
              </div>
              <div className="title">
                <p className="m-0">15:26PM</p>
                <p className="m-0">Sunset</p>
              </div>
              <p></p>
            </div>
            <div className="down">
              <div className="items">
                <FaCanadianMapleLeaf />
              </div>
              <div className="title">
                <p className="m-0">15:26PM</p>
                <p className="m-0">Sunset</p>
              </div>
              <p></p>
            </div>
            <div className="down">
              <div className="items">
                <FaEnvira />
              </div>
              <div className="title">
                <p className="m-0">15:26PM</p>
                <p className="m-0">Sunset</p>
              </div>
              <p></p>
            </div>
            <div className="down">
              <div className="items">
                <FaJoomla />
              </div>
              <div className="title">
                <p className="m-0">15:26PM</p>
                <p className="m-0">Sunset</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Temp;
