import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const api_key = process.env.REACT_APP_API_KEY;

const AppProvider = ({ children }) => {
  const [data, setData] = useState();
  const [extraData, setExtraData] = useState();
  const [coins, setCoins] = useState([]);
  const [coinData, setCoinData] = useState();
  const [news, setNews] = useState([]);
  const [query, setQuery] = useState("bitcoin");
  const [results, setResults] = useState([]);
  const [coinHistory, setCoinHistroy] = useState([]);
  const [days, setDays] = useState("7");
  const [id, setId] = useState("bitcoin");
  const [isLoading, setIsLoading] = useState(true);

  //used coinranking api for some extra global stats of coins
  const fetchextraData = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/stats",
      headers: {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };
    const data = axios.request(options);
    return data;
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setExtraData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  // used coingecko for global stats
  const fetchData = () => {
    var axios = require("axios").default;
    var options = {
      method: "GET",
      url: "https://coingecko.p.rapidapi.com/global",
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };
    const data = axios.request(options);
    return data;
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  //this fetch is for all the coins in cryptos page
  const fetchCryptoMarket = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://coingecko.p.rapidapi.com/coins/markets",
      params: {
        vs_currency: "usd",
        page: "1",
        per_page: "100",
        order: "market_cap_desc",
      },
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };

    const data = axios.request(options);
    return data;
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setCoins(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };
  //for fetching news in home page and news page default.
  const fetchNews = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "cryptocurrency",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };

    const data = axios.request(options);
    return data;

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setNews(response.data);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };
  //updating the query for specific news search and storing in results.
  const fetchSearchNews = () => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: query,
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setResults(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  //to fetch coin data of particular coin from now to past 8 days
  const fetchCoinHistrory = (days, id) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: `https://coingecko.p.rapidapi.com/coins/${id}/market_chart`,
      params: { vs_currency: "usd", days: `${days}` },
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };

    const data = axios.request(options);
    return data;

    // axios
    //   .request(options)
    //   .then(function (response) {
    //     setCoinHistroy(response.data.prices);
    //   })
    //   .then(() => {
    //     fetchCoinData(id);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };
  const fetchCoinData = (id) => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: `https://api.coingecko.com/api/v3/coins/${id}`,
      params: {
        localization: "true",
        tickers: "true",
        market_data: "true",
        community_data: "true",
        developer_data: "true",
        sparkline: "false",
      },
      headers: {
        "x-rapidapi-host": "coingecko.p.rapidapi.com",
        "x-rapidapi-key": api_key,
      },
    };

    const data = axios.request(options);
    return data;
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response);
    //     setCoinData(response);
    //   })
    //   .catch(function (error) {
    //     console.error(error);
    //   });
  };

  //updating the query.
  const updateSearch = (query) => {
    console.log(query);
    setQuery(query);
  };

  const updatDatefrom = async (days, id = "bitcoin") => {
    setIsLoading(true);
    setDays(days);
    setId(id);
    // setIsLoading(false);
    return Promise.all([fetchCoinHistrory(days, id), fetchCoinData(id)]).then(
      (response) => {
        setCoinHistroy(response[0].data.prices);
        setCoinData(response[1].data);
        setIsLoading(false);
        return response;
        console.log(response);
      }
    );
  };
  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  const fetchAllData = () => {
    setIsLoading(true);

    return Promise.all([
      fetchextraData(),
      fetchData(),
      fetchCryptoMarket(),
      fetchNews(),
    ]).then((response) => {
      console.log(response);
      setExtraData(response[0].data);
      setData(response[1].data);
      setCoins(response[2].data);
      setNews(response[3].data);
      setIsLoading(false);
      return response;
    });
  };
  useEffect(async () => {
    setIsLoading(true);
    componentDidMount();
    const response = await fetchAllData();
    setExtraData(response[0].data);
    setData(response[1].data);
    setCoins(response[2].data);
    setNews(response[3].data);
    const data = await updatDatefrom(days, id);
    console.log(data);
    setCoinHistroy(data[0].data.prices);
    setCoinData(data[1].data);
    console.log(coinData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSearchNews();
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        data,
        coins,
        news,
        extraData,
        results,
        coinHistory,
        days,
        coinData,
        updateSearch,
        updatDatefrom,
        isLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
