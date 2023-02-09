import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeContext';

export default function ChannelInfo({ id }) {
  const { youtube } = useYoutubeApi();
  const { data } = useQuery(['channel', id], () => youtube.channelDetial(id));
  const [datas, setData] = useState('');

  console.log('datas', data);

  useEffect(() => {
    const {
      channelTitle, title, description, publishedAt, thumbnails,
    } = data;

    setData(channelTitle, title, description, publishedAt, thumbnails);
  }, [data]);

  return (
    <div>
      {datas}
      {/* <div className="">{title}</div>

      <div className="">
        <img
          className=""
          src={thumbnails.default.url}
          alt={title}
        />
        <span>{channelTitle}</span>
      </div>
      <div className="">{description}</div>
      <div>{publishedAt}</div> */}
    </div>

  );
}
