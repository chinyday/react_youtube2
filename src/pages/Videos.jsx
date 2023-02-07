import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();

  return (
    <div>
      Videos
      {keyword ? '검색한 리스트' : '그냥 리스트'}
    </div>
  );
}
