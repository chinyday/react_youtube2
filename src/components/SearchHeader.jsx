import React, { useState, useEffect } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SearchHeader() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { keyword } = useParams();

  useEffect(() => {
    setInput(keyword || '');
  }, [keyword]);

  const handelChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // 검색 키워드 경로로 이동
    navigate(`/videos/${input}`);
  };

  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link className="flex items-center" to="/">
        <FaYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2">YOUYUBE</h1>
      </Link>
      <form onSubmit={handelSubmit} className="flex w-full justify-center">
        <input type="text" onChange={handelChange} value={input} className="w-7/12 p-2 outline-0 bg-black text-gray-50" />
        <button type="button" aria-label="send" className="bg-zinc-600 px-4"><FaSearch /></button>
      </form>
    </header>
  );
}

export default SearchHeader;
