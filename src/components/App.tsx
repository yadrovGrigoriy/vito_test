import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import AppRouter from './AppRouter';

interface Props {}
interface State {}

export default class Home extends Component<Props, State> {
    render() {
        return (
            <div className="app">
                <Header />
                <AppRouter />
                <Footer />
            </div>
        );
    }
}
