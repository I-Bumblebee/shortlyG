import React, { useEffect, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";

const SHORTEN = gql`
  mutation Mutation($longUrl: String!, $id: String!, $shortUrl: String!) {
    addUrl(longUrl: $longUrl, id: $id, shortUrl: $shortUrl)
  }
`;

function Shorten(Component) {

	const [longUrl, setLongUrl] = useState("");
	const [id, setId] = useState("")
	const [shortUrl, setShortUrl] = useState("");
  const [restricted, setRestricted] = useState(false);

	const change = ({longUrl, shortUrl, id}) => {
		setLongUrl(longUrl);
		setShortUrl(shortUrl);
		setId(id);
	}

	const [mutate, {error}] = useMutation(SHORTEN, {
     variables: {
       id: id,
			 longUrl: longUrl,
			 shortUrl: shortUrl
     }
  });

	useEffect(() => {
    if (
      id === "" ||
      longUrl === "" ||
      shortUrl === ""
    ) {
      setRestricted(false);
      return;
    }
    if (
      shortUrl === "/account" ||
      shortUrl === "/" ||
      shortUrl === "/signin" ||
      shortUrl === "/signup" ||
      shortUrl === "/home"
    ) {
      setRestricted(true);
      return;
    }
    (async () => {
      await mutate();
      setLongUrl("");
			setShortUrl("");
			setId("");
      setRestricted(false)
    })();
  }, [longUrl, shortUrl, id, mutate]);

  return <Component change={change} error={error} restricted={restricted}/>;
}

export default Shorten;
