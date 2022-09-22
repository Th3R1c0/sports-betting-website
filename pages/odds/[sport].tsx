import { useRouter } from 'next/router';

function RenderOdds({ sport, data }) {
  const router = useRouter();
  const data_fake = [
    {
      id: 'e9f3b0a74212ae5e0df0594e3bfade95',
      sport_key: 'aussierules_afl',
      sport_title: 'AFL',
      commence_time: '2022-09-24T04:30:00Z',
      home_team: 'Geelong Cats',
      away_team: 'Sydney Swans',
      bookmakers: [
        {
          key: 'sportsbet',
          title: 'SportsBet',
          last_update: '2022-09-22T07:36:11Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.47,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.62,
                },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.9,
                  point: -12.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 1.9,
                  point: 12.5,
                },
              ],
            },
          ],
        },
        {
          key: 'tab',
          title: 'TAB',
          last_update: '2022-09-22T07:29:40Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.65,
                },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.9,
                  point: -13.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 1.9,
                  point: 13.5,
                },
              ],
            },
          ],
        },
        {
          key: 'betfair',
          title: 'Betfair',
          last_update: '2022-09-22T07:35:22Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.52,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.88,
                },
              ],
            },
            {
              key: 'h2h_lay',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.53,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.9,
                },
              ],
            },
          ],
        },
        {
          key: 'ladbrokes',
          title: 'Ladbrokes',
          last_update: '2022-09-22T07:29:49Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.46,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.75,
                },
              ],
            },
          ],
        },
        {
          key: 'neds',
          title: 'Neds',
          last_update: '2022-09-22T07:30:22Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.46,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.75,
                },
              ],
            },
          ],
        },
        {
          key: 'bluebet',
          title: 'BlueBet',
          last_update: '2022-09-22T07:32:07Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.6,
                },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.9,
                  point: -11.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 1.9,
                  point: 11.5,
                },
              ],
            },
          ],
        },
        {
          key: 'pointsbetau',
          title: 'PointsBet (AU)',
          last_update: '2022-09-22T07:31:42Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.65,
                },
              ],
            },
          ],
        },
        {
          key: 'unibet',
          title: 'Unibet',
          last_update: '2022-09-22T07:35:08Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.48,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.7,
                },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.9,
                  point: -12.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 1.9,
                  point: 12.5,
                },
              ],
            },
          ],
        },
        {
          key: 'topsport',
          title: 'TopSport',
          last_update: '2022-09-22T07:33:08Z',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.48,
                },
                {
                  name: 'Sydney Swans',
                  price: 2.7,
                },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                {
                  name: 'Geelong Cats',
                  price: 1.85,
                  point: -12.5,
                },
                {
                  name: 'Sydney Swans',
                  price: 1.95,
                  point: 12.5,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const ReturnHomeButton = () => {
    return (
      <button
        onClick={() => router.push('/')}
        type="button"
        class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
        Return Home
      </button>
    );
  };

  if (!data[0]) {
    return (
      <div className="flex flex-col space-y-4 p-4 items-center justify-center text-center text-4xl w-full h-full">
        {' '}
        <p>no data avaliable for</p> {sport} <ReturnHomeButton />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center w-full space-y-6 px-12 text-2xl">
      <h1 className="font-bold text-8xl">{data[0]?.sport_key}</h1>
      <div className="font-semibold text-4xl text-center">
        <p>commence time: {data[0]?.commence_time}</p>
        <p>home team: {data[0]?.home_team}</p>
        <p>away team: {data[0]?.away_team}</p>
      </div>
      <div className="w-full flex space-y-12 flex-col py-6">
        {data[0]?.bookmakers.map((bookmaker) => {
          return (
            <div
              key={bookmaker.key}
              className=" h-full flex space-x-24 justify-start  hover:bg-gray-100 bg-white rounded-md border-2 border-black p-4"
            >
              <div className="w-[30%]">
                <p className="text-4xl font-bold">
                  bookmaker: {bookmaker.title}
                </p>
                <p>last update: {bookmaker.last_update}</p>
              </div>
              <div>
                {bookmaker.markets.map((market) => {
                  return (
                    <div key={market.key}>
                      <p className="text-4xl font-bold"> {market.key} </p>
                      {market.outcomes.map((team) => {
                        return (
                          <div key={team.price}>
                            <p>team: {team.name}</p>
                            <p>price:{team.price}</p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <ReturnHomeButton />
      </div>
    </div>
  );
}

// this function only runs on the server by Next.js
export const getServerSideProps = async ({ params }) => {
  var { sport } = params;
  console.log(sport);
  const region = 'uk,us,eu,au';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'odds.p.rapidapi.com',
    },
  };

  const res = await fetch(
    `https://api.the-odds-api.com/v4/sports/${sport}/odds/?regions=us,eu,uk,au&oddsFormat=decimal&apiKey=8b99dcaeaa176749b4ff8203e39eab06`,
    options
  );
  const data = await res.json();
  console.log(data);

  return {
    props: { sport, data },
  };
};

export default RenderOdds;
