import * as React from 'react';
import { List, Avatar, Collapse, Spin } from 'antd';
import axios from 'axios';

const { Panel } = Collapse;

type Props = {
    item: any;
};
type State = {
    repos: any[];
    isloading: boolean;
};

export default class ListItem extends React.Component<Props, State> {
    state: State = {
        repos: [],
        isloading: false
    };
    requestRepos = (url: string) => {
        this.setState({
            isloading: true,
            repos: []
        });

        axios.get(url).then(res => {
            this.setState({
                isloading: false,
                repos: [...res.data]
            });
        });
    };
    public render() {
        return (
            <div className="search-result__list-item">
                <List.Item key={this.props.item.id}>
                    <List.Item.Meta
                        avatar={<Avatar src={this.props.item.avatar_url} />}
                        title={<a href={this.props.item.html_url}>{this.props.item.login}</a>}
                    />
                    <Collapse onChange={() => this.requestRepos(this.props.item.repos_url)}>
                        <Panel header="Open Repositories" key={this.props.item.id}>
                            {this.state.isloading && <Spin size="large" />}
                            {this.state.repos.length ? (
                                this.state.repos.map(repo => (
                                    <p key={repo.id}>
                                        <a href={repo.html_url}>{repo.name}</a>
                                    </p>
                                ))
                            ) : (
                                <div>Empty</div>
                            )}
                        </Panel>
                    </Collapse>
                </List.Item>
            </div>
        );
    }
}
