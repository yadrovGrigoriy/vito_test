import * as React from 'react';
import { Image } from '.'; //typeProp
import { Spin } from 'antd';

type Props = {
    item: Image;
    removeImage: Function;
};

const Card: React.FC<Props> = ({ item, removeImage }) => {
    return (
        <li className="card">
            <span onClick={() => removeImage(item)} className="card__delete-image">
                +
            </span>
            {!item.url && <Spin className="image__spin" tip="Loading..." size="large" />}
            <img src={item.url} alt="" />
        </li>
    );
};

export default Card;
