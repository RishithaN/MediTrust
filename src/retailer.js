import React , { useState } from "react";
import {Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from './config';
import './retailer.css'

const MediTrust = () => {
    

    const [name , setName] = useState('');
    const [id , setId] = useState('');
    const [loc , setLoc] = useState('');
    const [date , setDate] = useState('');


const handleSubmit = async e => {

        e.preventDefault();


        const web3 = new Web3("HTTP://127.0.0.1:7545")
        const accounts = await web3.eth.getAccounts()
        //this.setState({ account: accounts[0] })
        const mt = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)

        //const nm = await mt.methods.newMed(name , mrp , exp , date).send({ from: accounts[0], gas:'1000000'});
        const nm = await mt.methods.addRetailer(id, date, loc, name).send({ from: accounts[0], gas:'1000000'});

        console.log(nm)

        fetch('http://localhost:3000/retailer/addRetail', {
          method: 'POST',
          // redirect: 'manual',
          body: JSON.stringify({medid : id , name : name , loc : loc}),
          headers: {
            'Content-Type': 'application/json'
          }
      })
      .then((res) => res.json())
      .then((data) => {

        alert(data.sending);

        alert(id)

        if(data.sending === "Already added" || data.sending === "Added new retailer"){

          alert("Added retailer");

          fetch("http://localhost:3000/retailer/addAvail" , {

            method : 'POST',
            body: JSON.stringify({name : name , id : id}),
            headers: {
              'Content-Type': 'application/json'
            }

          })
          .then((res2) => res2.json())
          .then((data2) => {
              alert(data2.sending);
          })


        }


      })

        alert('Purchase successful!')
    }

    const handleId = event => {

        setId(event.target.value);


    }

    const handleLoc = event => {

        setLoc(event.target.value);


    }

    const handleDate = event => {

        setDate(event.target.value);


    }

    const handleName = event => {

        setName(event.target.value);


    }

 
    return (
      <div id="content">
        <h1>Purchase Medicine</h1>
        <form onSubmit={handleSubmit}>

            Medicine ID : 
            <input type='number' onChange={handleId}></input>

            <br/>

            Retailer Name : 
            <input type='text' onChange={handleName}></input>

            <br/>

            Date :
            <input type='text' onChange={handleDate}></input>

            <br/>

            Location : 
            <input type='text' onChange={handleLoc}></input>

            <br/>
            <br/>

            <Button
              className="button"
              type="submit"
            >
              Buy now
            </Button>


        </form>
        
      </div>
    );
  }

function Retailer() {
    return (
        <>
        <MediTrust/>
        </>
    );
}

export default Retailer;


