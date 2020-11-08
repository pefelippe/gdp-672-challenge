import React from "react";

import Header from '../components/Header';

import Content from '../components/Content';

import Footer from '../components/Footer';

import 'fontsource-montserrat/latin.css';

import './App.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

{/* <CardContainer countryCode = { countryCode } countriesDict = {countriesDict} startDate = {startDate} endDate = {endDate}/> */ }
