import React from 'react'
import useCopy from '../../components/Coppy'

function Entry({longUrl, shortUrl}) {
  const domain = window.location.hostname;
  const [copied, copyAction] = useCopy(domain + shortUrl);

  return (
    <div className="w-[90%] bg-black/10 shadow-lg py-4 mx-auto rounded-md 
    flex flex-col items-start px-4 space-y-1  justify-center
    md:flex-row md:space-y-0  md:px-10 md:justify-between">
      <p className="md:pt-2 font-poppins w-[103%] pr-4 md:pr-0 md:w-[45%] md:justify-self-start font-thin text-ellipsis overflow-hidden">
        {longUrl}
      </p>
      <p className="font-poppins font-thin md:pt-2">{shortUrl}</p>
      <button
        onClick={copyAction}
        className="font-poppins font-thin px-2 md:justify-self-end  bg-[#2acfcf]/80 rounded-md py-1"
      >
        {copied ? "Copied!!!" : "Copy"}
      </button>
    </div>
  );
}

export default Entry