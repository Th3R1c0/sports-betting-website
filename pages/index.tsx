import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
const axios = require('axios');
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7e05395df3msh6779d5457952854p1c05d3jsn48afd316226d',
        'X-RapidAPI-Host': 'odds.p.rapidapi.com',
      },
    };

    fetch('https://odds.p.rapidapi.com/v4/sports?all=true', options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center  p-2">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="pb-10">
        <h1 className="text-6xl"> sports betting backend </h1>
        <p>click one to fetch, PYTHON_BACKEND_ONLINE </p>
      </div>
      <div className="w-full h-full flex flex-col space-y-4 ">
        {data.length > 0 ? (
          data.map((sport) => {
            return (
              <div
                onClick={() => router.push(`/odds/${sport.key}`)}
                className="w-full h-max p-2 rounded-md border-black border-2 hover:cursor-pointer hover:bg-gray-100 text-4xl font-bold"
                key={sport.key}
              >
                <p>
                  {sport.description} - {sport.title}
                </p>
              </div>
            );
          })
        ) : (
          <div className="flex items-center text-center justify-center text-4xl">
            {' '}
            <p>loading</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
