import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
// import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
  const { state: { video } } = useLocation();
  return (
    <div>
      <iframe
        id="player"
        type="text/html"
        width="100%"
        height="640"
        src={`http://www.youtube.com/embed/${video.id}`}
        title={video.title}
      />
      <ChannelInfo id={video.snippet.channelId} />
      {/* <RelatedVideos id={video.id} /> */}
    </div>
  );
}
