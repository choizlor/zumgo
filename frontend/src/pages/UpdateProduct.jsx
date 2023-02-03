import { useLocation, useNavigate } from "react-router";
import React, { useState } from "react";
import styles from "./styles/AddProduct.module.css";
import { ChevronLeftIcon, CameraIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import testImg from "../assets/images/kim.png";
// import { useSelector } from "react-redux";

export default function UpdateProduct() {
  // redux 사용하기
  // const user = useSelector((state) => { return state.user});
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [reservation, setReservation] = useState(product.reservation);
  const [photo, setPhoto] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleReservationChange = (e) => {
    setReservation(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  // 수정하기 api 요청
  const handleUpdate = () => {
    axios.put(`http://localhost:8080/product/${product.id}`,{
        title,
        price,
        description,
        reservation : '2010-10-14',
        photo : '아직이용',
    })
    .then((res) => { navigate(`/detail/${product.id}`)})
    .catch((err) => { console.log(err)});
  };

  return (
    <div className={styles.body}>
      <div className={styles.nav}>
        <ChevronLeftIcon className="w-6 h-6 text-black-100" />
        <div className={styles.title}>상품 정보 수정하기</div>
      </div>
      <div className={styles.container}>
        <div className={styles.button}>
          <CameraIcon className={styles.camera} />
          <div className={styles.num}>0/5</div>
        </div>
        <input
          className={styles.file}
          type="file"
          accept="image/*"
          capture="camera"
          multiple
        />
        {/* <div className={styles.addbtn}> */}
        <input
          className={`${styles.input} ${styles.titleinput}`}
          onChange={handleTitleChange}
          type="text"
          placeholder="제목"
          defaultValue={title}
        />
        <input
          className={styles.input}
          onChange={handlePriceChange}
          type="number"
          placeholder="$ 가격 (0원 가능)"
          defaultValue={price}
        />
        <textarea
          className={styles.textarea}
          onChange={handleReservationChange}
          placeholder="라이브 가능 시간 &#13;(ex - 10:00~12:00, 18:00~19:00)"
          value={reservation}
        >
        </textarea>
        <textarea
          className={`${styles.textarea} ${styles.descinput}`}
          onChange={handleDescriptionChange}
          placeholder="상품 설명(300자 이내)"
          value={description}
        >
        </textarea>
        <div className={styles.addbtn} onClick={handleUpdate}>
          <span>수정하기</span>
        </div>
      </div>
    </div>
  );
}
