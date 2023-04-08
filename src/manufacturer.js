import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config';
import './retailer.css'

const MediTrust = () => {
    

    const [name , setName] = useState('');
    const [mrp , setMrp] = useState('');
    const [exp , setExp] = useState('');
    const [date , setDate] = useState('');
    const [man , setMan] = useState('');


const handleSubmit = async e => {

        e.preventDefault();


        const web3 = new Web3("HTTP://127.0.0.1:7545")
        const accounts = await web3.eth.getAccounts()
        //this.setState({ account: accounts[0] })
        const mt = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)

        const nm = await mt.methods.newMed(name , mrp , exp , date , man).send({ from: accounts[0], gas:'1000000'})

        console.log(nm)

        const nq = await mt.methods.getId().call(); //has medId

        alert(nq)

              fetch('http://localhost:3000/manufacturer/addMed', {
                method: 'POST',
                // redirect: 'manual',
                body: JSON.stringify({medid : nq , name : name , exp : exp , mrp : mrp , date : date , man : man}),
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            .then((res) => res.json())
            .then((data) => {



              if(data.sending === "success"){
                alert("Medicine added");
              }
              else{
                alert("Not added")
              }
            

          
              

            })

    }

    const handleMrp = event => {

        setMrp(event.target.value);


    }

    const handleExp = event => {

        setExp(event.target.value);


    }


    const handleMan = event => {
      setMan(event.target.value);
    }

    const handleDate = event => {

        setDate(event.target.value);


    }

    const handleName = event => {

        setName(event.target.value);


    }

 
    return (
      <div id="content">
        <h1>New medicine</h1>
        <form onSubmit={handleSubmit}>

            Name : 
            <input type='text' onChange={handleName}></input>

            <br/>

            Expiry date : 
            <input type='text' onChange={handleExp}></input>

            <br/>

            Date :
            <input type='text' onChange={handleDate}></input>

            <br/>

            Mrp : 
            <input type='number' onChange={handleMrp}></input>


            <br/>

            Manufacturer Name : 
            <input type='text' onChange={handleMan}></input>

            <br/>
            <br/>

            <Button
              className="button"
              type="submit"
            >
              Submit
            </Button>


        </form>
        
      </div>
    );
  }

function Manufacturer() {
    return (
        <>
        <MediTrust/>
        </>
    );
}

export default Manufacturer;


