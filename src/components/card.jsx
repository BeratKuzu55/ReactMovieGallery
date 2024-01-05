import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const MovieCard = (props) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={props.src}
      />
    }
    
  >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title= {props.title}
      description= {props.content}
    />
  </Card>
);
export default MovieCard;