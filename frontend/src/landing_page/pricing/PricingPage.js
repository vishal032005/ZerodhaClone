import React from 'react';



import Hero from"./Hero";
import Brokerage from "./Brokerage";
import Equity from './Equity';
import Currency from './Currency';
import Commodity from './Commodity';



import { Outlet } from 'react-router-dom';
import ChargeAcOp from './ChargeAcOp';
import MaintenanceCharge from './MaintenanceCharge';
import ChargeOptional from './ChargeOptional';
import ChargesExplained from './ChargesExplained';

function PricingPage() {
    return ( 
        <>
        <Hero />
        <Brokerage />
        <Outlet />
        <div className='container text-center mb-5'>
            <h4>Calculate your costs upfront using our brokerage calculator</h4>
        </div>
        <ChargeAcOp />
        <MaintenanceCharge />
        <ChargeOptional />
        <ChargesExplained />

        
        
        </>
     );
}

export default PricingPage;