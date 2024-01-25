// src/App.js
import React from "react";
import { useState, useEffect } from 'react';
import ReviewCard from "/SDP/frontend/src/components/DoctorLIst/ReviewCard";

const DoctorList1 = () => {
    const [DoctorData, setDoctorData] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setDoctorData(data);
        });
    }, []);
  
  // const DoctorData = [
  //   {
  //     // _id: new ObjectId("657b3baf128a3df52da95435"),
  //     name: "Dr. Akmal",
  //     // mobile_no: 8745125487,
  //     // email: 'akmal3@gmail.com',
  //     // password: '$2a$10$ejohPnFGv/jq4knEHZ7TyeURBJTHkFeKHayfGkbxO/lKhFvUxpqhy',
  //     department: "Orthopedic",
  //     experience: "5",
  //     degree: ["MBBS", "MS(Ortho)"],
  //     fees: 1000,
  //     hospiatal_name: "Appolo",
  //     street_address: "Navrangpura",
  //     city: "Ahmedabad",
  //     state: "Gujarat",
  //     pincode: 380055,
  //     // speciality: [ 'Arthoplasty' ],
  //     time_slot: {},
  //     __v: 0,
  //   },
  //   {
  //     // _id: new ObjectId("657b3d9d14d814d9248fdbe8"),
  //     name: "Dr. Akmal",
  //     mobile_no: 8745125487,
  //     email: "akmal4@gmail.com",
  //     password: "$2a$10$tgfcMjqmSvFF3h4opQQuK.Z4P2FUBjY4ZDBI/2.CVB3A0ALs0Q43y",
  //     department: "Orthopedic",
  //     experience: "5",
  //     degree: ["MBBS", "MS(Ortho)"],
  //     fees: 1000,
  //     hospiatal_name: "Appolo",
  //     street_address: "Navrangpura",
  //     city: "Ahmedabad",
  //     state: "Gujarat",
  //     pincode: 380055,
  //     speciality: ["Arthoplasty"],
  //     // time_slot: [ new ObjectId("657b3d9d14d814d9248fdbeb") ],
  //     __v: 1,
  //   },
  //   {
  //     // _id: new ObjectId("659ea05047da0957f5f6adfe"),
  //     name: "Dr. Salah",
  //     mobile_no: 8745125487,
  //     email: "salah@gmail.com",
  //     password: "$2a$10$g0WgxezeTPa6vFhHs/W1jutlCXSDQFsbKA04Iyk4258.kX89N7Hge",
  //     department: "Cardiologist",
  //     experience: "5",
  //     degree: ["MBBS", "MS(Cardio)"],
  //     fees: 1000,
  //     hospiatal_name: "Appolo",
  //     street_address: "Miraroad",
  //     city: "Ahmedabad",
  //     state: "Gujarat",
  //     pincode: 380055,
  //     speciality: [
  //       " Ambulatory Blood Pressure Monitoring",
  //       " Preoperative Treatment",
  //       " Ankle Pain",
  //       " Primary Angiitis",
  //       " Restrictive Cardiomyopathy",
  //       " Screening For Coronary Artery Disease",
  //       " Heart Transplantation",
  //       " Cardiac Arrhythmias",
  //       " Orthostatic Hypotension",
  //       " Acute Pericarditis",
  //       " Primary Pulmonary Hypertension",
  //       " Blood Pressure Changes",
  //       " Plication Of The Inferior Vena Cava",
  //       " Acute Aortic Dissection",
  //       " Barth Syndrome",
  //     ],
  //     // time_slot: [ new ObjectId("659ea05047da0957f5f6ae01") ],
  //     __v: 1,
  //   },
  //   {
  //     // _id: new ObjectId("659f6314477684e82e7ee386"),
  //     name: "Dr. Salah",
  //     mobile_no: 8745125487,
  //     email: "salah1@gmail.com",
  //     password: "$2a$10$HrRKJT.i9tq1Hrgq1KOVYeKfudHhiu0jwuqv2lFTvu6O.pVc.KwLG",
  //     department: "Cardiologist",
  //     experience: "5",
  //     degree: ["MBBS", "MS(Cardio)"],
  //     fees: 1000,
  //     hospiatal_name: "Appolo",
  //     street_address: "Vaniyavad",
  //     city: "Ahmedabad",
  //     state: "Gujarat",
  //     pincode: 380055,
  //     speciality: [
  //       " Ambulatory Blood Pressure Monitoring",
  //       " Preoperative Treatment",
  //       " Ankle Pain",
  //       " Primary Angiitis",
  //       " Restrictive Cardiomyopathy",
  //       " Screening For Coronary Artery Disease",
  //       " Heart Transplantation",
  //       " Cardiac Arrhythmias",
  //       " Orthostatic Hypotension",
  //       " Acute Pericarditis",
  //       " Primary Pulmonary Hypertension",
  //       " Blood Pressure Changes",
  //       " Plication Of The Inferior Vena Cava",
  //       " Acute Aortic Dissection",
  //       " Barth Syndrome",
  //     ],
  //     // time_slot: [ new ObjectId("659f6314477684e82e7ee389") ],
  //     __v: 1,
  //   },
  //   {
  //     // _id: new ObjectId("659f6314477684e82e7ee386"),
  //     name: "Dr. Salah",
  //     mobile_no: 8745125487,
  //     email: "salah1@gmail.com",
  //     password: "$2a$10$HrRKJT.i9tq1Hrgq1KOVYeKfudHhiu0jwuqv2lFTvu6O.pVc.KwLG",
  //     department: "Cardiologist",
  //     experience: "5",
  //     degree: ["MBBS", "MS(Cardio)"],
  //     fees: 1000,
  //     hospiatal_name: "Appolo",
  //     street_address: "Vaniyavad",
  //     city: "Ahmedabad",
  //     state: "Gujarat",
  //     pincode: 380055,
  //     speciality: [
  //       " Ambulatory Blood Pressure Monitoring",
  //       " Preoperative Treatment",
  //       " Ankle Pain",
  //       " Primary Angiitis",
  //       " Restrictive Cardiomyopathy",
  //       " Screening For Coronary Artery Disease",
  //       " Heart Transplantation",
  //       " Cardiac Arrhythmias",
  //       " Orthostatic Hypotension",
  //       " Acute Pericarditis",
  //       " Primary Pulmonary Hypertension",
  //       " Blood Pressure Changes",
  //       " Plication Of The Inferior Vena Cava",
  //       " Acute Aortic Dissection",
  //       " Barth Syndrome",
  //     ],
  //     // time_slot: [ new ObjectId("659f6314477684e82e7ee389") ],
  //     __v: 1,
  //   },
  // ];

  return (
    <div className="App">
      {/* max-w-[570px] */}
      <h1 className="text-4xl font-normal	antialiased	text-center text-black tracking-wide font-sans decoration-green-200	underline">
        Doctors
      </h1>
      <div className="grid grid-cols-3 w-full gap-y-10">
        {DoctorData.map(
          (
            name,
            index,
            department,
            hospiatal_name,
            street_address,
            city,
            pincode,
            state,
            experience
          ) => (
            <ReviewCard
              key={index}
              {...name}
              {...department}
              {...hospiatal_name}
              {...street_address}
              {...city}
              {...pincode}
              {...state}
              {...experience}
            />
          )
        )}
      </div>
    </div>
  );
};

export default DoctorList1;