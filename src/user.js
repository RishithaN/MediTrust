import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config';


import Prescrip from "./prescrip";
import './user.css'


const User = () => {

    const [isPres, setIsPres] = useState(false);
    const [isMedi, setIsMedi] = useState(false);
    const [isDoc, setIsDoc] = useState(false);

    const [isShow, setIsShow] = useState(false);

    const [docArray , updateDocArray] = useState([]);

    const [medid , setMedid] = useState('');
    const [info,setInfo] = useState('');
    const [arr,setArr] = useState([]);


const handleSubmit = async e => {

        e.preventDefault();


        const web3 = new Web3("HTTP://127.0.0.1:7545")
        const accounts = await web3.eth.getAccounts()
        //this.setState({ account: accounts[0] })
        const mt = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)

        //const nm = await mt.methods.newMed(name , mrp , exp , date).send({ from: accounts[0], gas:'1000000'})

        const nm = await mt.methods.medInfo(medid).call();
        const array = nm.split('\n');
        const arr = array.filter(function(entry) { return entry.trim() != ''; });
        console.log(arr);
        setArr(arr);
        setInfo(nm);
        setIsShow(true);


    }

    const handleMedid = event => {

        setMedid(event.target.value);


    }




    const handlePres = async () => {

        setIsPres(true);
        setIsMedi(false);
        setIsDoc(false);

    }

    const handleMedi = async () => {

        setIsPres(false);
        setIsMedi(true);
        setIsDoc(false);
    }

    const handleDoc = async () => {

        setIsPres(false);
        setIsMedi(false);
        setIsDoc(true);
        setIsShow(false);
        getDoctors();

    }


    const getDoctors = async () => {

        fetch('http://localhost:3000/doctors', {
        method: 'GET',
        // redirect: 'manual',
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json())
    .then((data) => {
    

      console.log(data.result_data.rows[0])

      updateDocArray(data.result_data.rows)


    })

        

    }



  return (
    <div>
        <div className="options">
            <h1 onClick={handlePres}>Prescription</h1>
            <h1 onClick={handleMedi}>Medicine details</h1>
            <h1 onClick={handleDoc}>Doctors</h1>
        </div>
        


        {isPres && (

            <div>

                {/* Prescription */}

                <Prescrip/>


            </div>

        )}


        {isMedi && (
        <div>

            {/* Medicine info */}


            <div id="content">

        <form onSubmit={handleSubmit}>

            

            <label>Enter medicine ID : </label>
            <input type='number' onChange={handleMedid}></input>

            <br/>
            <br/>

            <input type='submit' className="button"></input>


        </form>

      </div>

           {isShow && (
            <>
            <h1 className='heading' style="text-align:center">TRACK MEDICINE</h1>
            <div className="timeline">
                <ul>
                    <li>
                        <div className="content">
                        <h2>
                            <time>Manufacturer name: {arr[2]}</time>
                        </h2>
                        <p>Manufactured Date: {arr[3]}</p>
                        <p>Expiry Date: {arr[4]}</p>
                        </div>
                    </li>
                    <li>
                        <div className="content">
                        <h2>
                            <time>Retailer name: {arr[5]}</time>
                        </h2>
                        <p>Purchase Date: {arr[6]}</p>
                        <p>Location: {arr[7]}</p>
                        </div>
                    </li>
                </ul>
            </div>
            </>
            )}

        </div>
        
        )}

        {isDoc && (

        <div>

            {/* Doctors */}

            <h1>Doctors</h1>

            <br></br>

            <div>
                {/* <img src= "//www.jquery-az.com/html/images/banana.jpg" alt="doc"></img>

                <p>Name : </p>

                <p>Experience : </p>

                <p>Specialization : </p>

                <p>Mobile : </p>

                <p>Email : </p> */}


                {
                                    docArray.map((row) =>
                                    <ul style={{listStyleType: "none"}}>
                                        <img src= "//www.jquery-az.com/html/images/banana.jpg" alt="doc"></img>
                                          <li><b><u>Name: {row.name}</u></b></li>
                                          <li>Experience: {row.experience}</li>
                                          <li>Specialization: {row.specilization}</li>
                                          <li>Mobile: {row.mobile}</li>
                                          <li>Email: {row.email}</li>

                                          <br/>

                                  </ul>

                                        
                                    )

                }

            </div>


        </div>

        )}



 </div>
      
  );
};

export default User;


