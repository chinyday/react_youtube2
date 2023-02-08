import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['videos', keyword], () => youtube.search(keyword));

  // useQuery를 통해서 관심있는 변수를 가져올거야,
  // 캐시키를 가지고 ~~  전체적인 'videos'안에 keyword별로 캐시가 되도록 가지고 온다
  return (
    <div>
      {isLoading && <p>로딩중이에용</p>}
      {error && <p>에러에용</p>}
      {videos && (
        <ul>
          {videos?.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </div>

  );
}
