import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useUser } from "../../App";
import Entry from "./Entry";

const MYURLS = gql`
  mutation MyUrls($myUrlsId: String!) {
    myUrls(id: $myUrlsId) {
      longUrl
      shortUrl
      id
    }
  }
`;

function WithEntries() {
	const {user} = useUser()
	const [urls, setUrls] = useState([])

  const [mutate] = useMutation(MYURLS, {
    variables: {
      myUrlsId: user.id,
    },
    onCompleted: (data) => setUrls(data.myUrls),
  });

  useEffect(() => {
    mutate()
  }, [user.id, mutate])

  return (
    urls.map(({shortUrl, longUrl}, index) =>( 
      <li key={index}><Entry longUrl={longUrl} shortUrl={shortUrl} /></li>
    ))
  )
}

export default WithEntries