import React from 'react';
import Tasks from '../Tasks/Tasks';
import AddTask from '../Tasks/AddTask';
import Header from './Header';
import Footer from './Footer';
import Navigation from "./Navigation";

export default function HomePage() {
    return (
        <>
            <Header />
            <div className="body-container-width">
                <div className="body-container-flex">
                    <Navigation />
                    <div className="container">
                        <Tasks />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}