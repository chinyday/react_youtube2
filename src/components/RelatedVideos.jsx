import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeContext';

function RelatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const { data } = useQuery(['related', id], () => youtube.relatedVideos());
  console.log('RelatedVideos data', data);
  return (
    <div>{id}</div>
  );
}

export default RelatedVideos;
