import React from 'react';
import { format } from 'timeago.js';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const {
    channelTitle, title, publishedAt, thumbnails,
  } = video.snippet;

  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li className={isList && 'xl:flex mr-5 ml-5 mb-5'} role="presentation" onClick={() => { navigate(`/videos/watch/${video.id}`, { state: { video } }); }}>
      <img
        className={isList ? 'sm:w-full xl:w-60 mr-2' : 'w-full'}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <div className="font-semibold my-2 line-clamp-2">{channelTitle}</div>
        <div className="text-sm opacity-80">{title}</div>
        <div className="text-sm opacity-80">{format(publishedAt)}</div>
      </div>
    </li>
  );
}
