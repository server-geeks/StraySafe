import './App.css';
import React from 'react';
import Home from './pages/Home';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { Fragment } from 'react';	
import { Navbar, Button } from 'flowbite-react';
import Adoption from './pages/Adoption';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyCYQ1UslAf68Fs_xuHuvC5vW8mkQny4rvU",
  authDomain: "straycare-e039c.firebaseapp.com",
  projectId: "straycare-e039c",
  storageBucket: "straycare-e039c.appspot.com",
  messagingSenderId: "56175970134",
  appId: "1:56175970134:web:39b96a2a468395f57ef8f7",
  measurementId: "G-R2GM26ZXYM",
  databaseURL: "https://straycare-e039c-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, year) {
  const db = getDatabase();
  set(ref(db, "pets/" + userId), {
    name: name,
    born: year
  });
}

function readUserData() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `pets/`)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      console.log(data[0].name);
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Fragment>
      <div className='mb-5 z-10 fixed w-full'>
      <Navbar
        fluid={true}
      >
        <Navbar.Brand href="https://flowbite.com/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Stray Care
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 mr-10">
          <Button>
            <span>Donate Now</span>
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="/" active={true}>
              <span className='text-lg lg:m-5'>Home</span>
            </Navbar.Link>

            <Navbar.Link className="text-3xl" href="/about">
              <span className='text-lg lg:m-5'>About</span>
            </Navbar.Link>

            <Navbar.Link href="/adoption">
              <span className='text-lg lg:m-5'>Adoption</span>
            </Navbar.Link>

            <Navbar.Link href="/services">
              <span className='text-lg lg:m-5'>Services</span>
            </Navbar.Link>

            <Navbar.Link href="/services">
              <span className='text-lg lg:m-5'>Volunteers</span>
            </Navbar.Link>

            <Navbar.Link href="/contact-us">
              <span className='text-lg lg:m-5'>Contact us</span>
            </Navbar.Link>
        
            {/* 
          </BrowserRouter> */}
          </Navbar.Collapse>
        </Navbar>
        </div>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/adoption' element={<Adoption />}></Route>
          <Route exact path='/about' element={<Adoption />}></Route>
          <Route exact path='/services' element={<Adoption />}></Route>
          <Route exact path='/contact' element={<Adoption />}></Route>
        </Routes>
    </Fragment>
    </BrowserRouter>
      
    </div>
  );
}

export default App;