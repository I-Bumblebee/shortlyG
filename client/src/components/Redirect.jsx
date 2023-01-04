import { gql, useQuery } from '@apollo/client';
import React, { useEffect } from "react";

const URL = gql`
  query ShortSpecificUrl($shortSpecificUrlShortUrl2: String!) {
    shortSpecificUrl(shortUrl: $shortSpecificUrlShortUrl2) {
      longUrl
      shortUrl
      id
    }
  }
`;

function Redirect({children}) {

  const shortUrl = window.location.pathname;
  const { loading, data, refetch } = useQuery(URL, {
    variables: { shortSpecificUrlShortUrl2: shortUrl },
  });

  useEffect(() => {
    if (
      shortUrl === "/" ||
      shortUrl === "/signin" ||
      shortUrl === "/account" ||
      shortUrl === "/signup" ||
      shortUrl === "/features" ||
      shortUrl === "/pricing" ||
      shortUrl === "/resources"
    )
      return;
    refetch({ shortSpecificUrlShortUrl2: shortUrl });
  }, [shortUrl, refetch, data]);

  useEffect(() => {
    if (loading) return;
    if (!data) return;
    if (data.shortSpecificUrl === null) return;
    console.log(data);
    console.log(data.shortSpecificUrl.longUrl);
    window.location.replace(data.shortSpecificUrl.longUrl);
  }, [loading, data]);

	if (loading || data?.shortSpecificUrl !== null) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <h1 className='font-poppins text-6xl'>In Progress . . . </h1>
      </div>
    );
  } else {
    return children;
  }

}

export default Redirect