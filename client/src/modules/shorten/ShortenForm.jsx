import React, { useEffect, useState } from 'react'
import Shorten from './Shorten';
import { useUser } from '../../App';

const ShortenForm = ({ change, error, restricted }) => {
  const { user } = useUser();
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [id, setId] = useState("");

  const shorten = async () => {
    await change({
      id: id,
      longUrl: longUrl,
      shortUrl: `/${shortUrl.replace("/", "")}`,
    });
  };

  useEffect(() => {
    if (user == null) {
      setId(":(");
    } else {
      setId(user.id);
    }
  }, [user]);

  return (
    <>
      <div className="w-[95%] flex md:flex-row flex-col space-y-2 md:space-y-0 justify-center items-center h-full mx-auto ">
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder={"example: https://www.youtube.com/..."}
          className=" px-4 py-3 text-xl rounded-md outline-none md:w-[75%] w-[95%] md:mr-4 my-custom-style"
        />
        <div className="h-full flex items-center mx-auto justify-center">
          <span
            className={`font-extrabold px-4 py-[10px] mt-[0px] text-2xl rounded-l-md bg-gray-400 ${
              error || restricted
                ? "border-l-red-600 border-t-red-600 border-b-red-600 border-2 border-r-0"
                : ""
            }`}
          >
            /
          </span>
          <input
            type="text"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
            placeholder={"example: /yt"}
            className={` px-4 py-3 text-xl rounded-r-md  md:w-[65%] w-[75%] outline-none ${
              error || restricted
                ? "border-r-red-600 border-t-red-600 border-b-red-600 border-2 border-l-0"
                : ""
            }`}
          />
        </div>
        <button
          onClick={shorten}
          className="md:px-4 px-7 py-3 bg-[#2acfcf] rounded-md font-poppins text-xl text-white tracking-wide place-self-center hover:bg-[#2acfcf]/90 transition duration-300"
        >
          Shorten
        </button>
      </div>
    </>
  );
};

const Tmp = () => Shorten(ShortenForm);


export default Tmp;