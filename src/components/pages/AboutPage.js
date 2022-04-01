import React from 'react';
import Card from '../shared/Card';
import Footer from './Footer';
import Header from './Header';
import Navigation from "./Navigation";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className="body-container-width">
                <div className="body-container-flex">
                    <Navigation />
                    <div className="container">
                        <Card>
                            <h1>About This Application</h1>
                            <p>
                                This is a task manager application. You are able to add, edit, check off, and  delete your tasks from the list. You can search for individual tasks in the list.
                            </p>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}