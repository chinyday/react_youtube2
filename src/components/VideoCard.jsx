import React from 'react';
import { format } from 'timeago.js';

export default function VideoCard({ video }) {
  const {
    channelTitle, title, publishedAt, thumbnails,
  } = video.snippet;

  return (
    <li>
      <img className="w-full" src={thumbnails.medium.url} alt={title} />
      <div>
        <div className="font-semibold my-2 line-clamp-2">{channelTitle}</div>
        <div className="text-sm opacity-80">{title}</div>
        <div className="text-sm opacity-80">{format(publishedAt)}</div>
      </div>
    </li>
  );
}
