import * as React from 'react';
import SearchResult from './SearchResult';
import { Input, Spin, Button } from 'antd';

import axios from 'axios';

export type State = {
    inputValue: string;
    items: any[];
    isloading: boolean;
};
type Props = {};

export default class ApiHendler extends React.Component<Props, State> {
    items: any[];
    constructor(props: Props) {
        super(props);
        this.items = [];
        this.state = {
            inputValue: '',
            items: [],
            isloading: false
        };
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    getResult = () => {
        this.setState({
            isloading: true
        });
        axios.get('https://api.github.com/search/users?q=' + this.state.inputValue).then(res => {
            this.items = [...res.data.items];
            this.setState({
                items: [...this.items],
                inputValue: '',
                isloading: false
            });
        });
    };
    _enterKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            this.getResult();
        }
    };

    public render() {
        return (
            <div className="main">
                <div className="container">
                    <div className="title"> Search users on Github</div>
                    <div className="form">
                        <Input
                            className="form__input"
                            size="large"
                            value={this.state.inputValue}
                            onChange={event => this.onChange(event)}
                            onKeyDown={this._enterKeyDown}
                            placeholder="Please input user account"
                        />
                        <Button onClick={this.getResult} size="large">
                            Search
                        </Button>
                    </div>

                    {this.state.isloading && (
                        <div className="spinner">
                            <Spin size="large" />
                        </div>
                    )}
                    <SearchResult items={this.state.items} />
                </div>
            </div>
        );
    }
}
