import * as React from 'react';
import { Input, Button } from 'antd';
import Card from './Card';

export type Image = {
    id: number;
    url: string;
};

type State = {
    images: Image[];
    inputValue: string;
};
type Props = {};

export default class ImageHandler extends React.Component<Props, State> {
    images: Image[];
    currentUrl: string;
    constructor(props: Props) {
        super(props);
        this.currentUrl = '';
        this.images = [];
        this.state = {
            images: [],
            inputValue: ''
        };
    }

    addLink = () => {
        if (!this.state.inputValue) return;
        const imageId = this.images.length ? this.images[this.images.length - 1].id + 1 : 0;
        this.currentUrl = this.state.inputValue;
        this.images.push({
            id: imageId,
            url: ''
        });
        this.setState({
            images: [...this.images],
            inputValue: ''
        });
        //timout for test delay
        setTimeout(() => {
            this.images = this.images.filter(image => image.url !== '');
            this.images.push({
                id: imageId,
                url: this.currentUrl
            });
            this.setState({
                images: [...this.images]
            });
        }, 1500);
    };
    componentDidMount() {
        this.setState({
            images: [...this.images]
        });
    }

    removeImage = (item: Image) => {
        this.images = this.images.filter(image => item.id !== image.id);
        this.setState({
            images: [...this.images]
        });
    };

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: event.target.value
        });
    };
    _enterKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            this.addLink();
        }
    };
    public render() {
        return (
            <div className="main">
                <div className="title">Images List</div>
                <div className="form">
                    <Input
                        className="form__input"
                        size="large"
                        value={this.state.inputValue}
                        onChange={event => this.onChange(event)}
                        onKeyDown={this._enterKeyDown}
                        placeholder="Please input Image URL"
                    />

                    <Button onClick={this.addLink} size="large">
                        Add
                    </Button>
                </div>
                <ul className="cards">
                    {this.state.images.map((item: Image, index) => (
                        <Card removeImage={this.removeImage} key={index} item={item} />
                    ))}
                </ul>
            </div>
        );
    }
}
