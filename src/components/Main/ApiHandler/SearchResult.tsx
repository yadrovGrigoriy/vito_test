import * as React from 'react';
import ListItem from './ListItem';
import { List } from 'antd';

type Props = {
    items: any[];
};

const SearchResult: React.FC<Props> = props => {
    return (
        <div className="search-result">
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        // console.log(page);
                    },
                    pageSize: 5
                }}
                dataSource={props.items}
                renderItem={item => <ListItem item={item} />}
            />
        </div>
    );
};
export default SearchResult;
