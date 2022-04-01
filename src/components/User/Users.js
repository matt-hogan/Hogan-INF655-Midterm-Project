import React from 'react';
import Card from '../shared/Card';
import { useParams } from 'react-router-dom';
import Footer from '../pages/Footer';
import Header from '../pages/Header';
import Navigation from "../pages/Navigation";

export default function Users() {
    const params = useParams();
    return (
        <>
            <Header />
            <div className="body-container-width">
                <div className="body-container-flex">
                    <Navigation />
                    <div className="container">
                    <Card>
                        <h1>Welcome to the Task Manager, {params.name}</h1>
                        <h3>Your ID is {params.id}.</h3>
                    </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

