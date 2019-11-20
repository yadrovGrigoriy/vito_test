import * as React from 'react';
import { Icon } from 'antd';
import Menu from './Menu';

type State = {
    menuIsActive: boolean;
};

type Props = {};

export default class App extends React.Component<Props, State> {
    state = {
        menuIsActive: false
    };
    activeMenu = () => {
        this.setState({
            menuIsActive: !this.state.menuIsActive
        });
    };
    public render() {
        return (
            <header className="header">
                {!this.state.menuIsActive && (
                    <div className="header__menu-icon" onClick={() => this.activeMenu()}>
                        <Icon type="menu" />
                        <span className="header__menu-text">Menu</span>
                    </div>
                )}
                {this.state.menuIsActive && (
                    <div className="header__menu-icon header__menu-icon--close " onClick={() => this.activeMenu()}>
                        <Icon type="close" />
                        {this.state.menuIsActive && <Menu />}
                    </div>
                )}
            </header>
        );
    }
}
