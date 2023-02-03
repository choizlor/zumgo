
import React, { useState } from "react";
import LiveReservation from "../components/Live/LiveReservation.jsx";
import LiveStart from "../components/Live/LiveStart.jsx";
import BottomNavDark from "../components/Nav/BottomNavDark.jsx";
import styles from "./styles/Live.module.css";
import SellLive from '../components/Live/SellLive';
import BuyLive from "../components/Live/BuyLive.jsx";

export default function Live() {
  //toggle 상태 표시
  const [toggle, settoggle] = useState(false);
  // toggle을 클릭하면 toggle 바꿔주기
  const toggleMode = ()=> {
    settoggle(!toggle);
    console.log(toggle) // toggle 바꿔주는 함수  //toggle에 따라 컴포넌트 변하는 함수
  };

  return (
    <div className={styles.body}>
      <div className={styles.logo}>LIVE</div>
      { 
        toggle ? <SellLive/> : <BuyLive/>
      }
      {/* <div className={styles.text}>예약 대기</div>
      <LiveReservation />
      <div className={styles.text}>라이브 시작 가능</div>
      <LiveStart /> */}
      {/* toggle 사용 */}
      <button className={styles.livebtn} onClick={toggleMode}>
        <input type="checkbox" className={styles.custom_input}/>
        <label for="custom_input" className={styles.toggle_btn_label}>
          <span></span>
        </label>
      </button>
      <BottomNavDark />
    </div>
  );
};

// function updatettogle(toggle) {
//   if (toggle) { // toggle 이면 sellLIve 컴포넌트 보여주기
//     <sellLive/>
//   }
//   else {
//     <buyLive/>
//   }
// }
             