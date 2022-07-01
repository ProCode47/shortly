import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Shorten() {
  const [link, setLink] = useState("");
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const handleChange = (e) => {
    setLink(e.target.value);
  };
  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject("The Clipboard API is not available.");
  };
  const handleSubmit = () => {
    if (link !== "") {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then((res) => {
          const shortLink = res.data.result.full_short_link;
          setShortenedLinks([...shortenedLinks, { link, shortLink }]);
        })
        .catch((err) => {
          console.log({ err });
          toast.warning("Please enter a valid link");
        });
    } else {
      toast.warning("Please add a link");
    }
  };
  const copyLink = (link) => {
    copyToClipboard(link)
      .then(() => {
        toast.success("Link copied");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error occured while copying");
      });
  };
  return (
    <>
      <div class="shorten col-sm align p-md">
        <input
          id="link-input"
          class="col-item text-sm"
          type="text"
          value={link}
          onChange={handleChange}
          placeholder="Shorten a link here..."
        />
        <button class="col-item m-0 m-sm text-sm" onClick={handleSubmit}>
          Shorten It!
        </button>
      </div>
      <div className="shortened-links">
        {shortenedLinks.map((linkObject, index) => (
          <div key={index} className="short-link col-sm">
            <h3 className="col-item"> {linkObject.link}</h3>
            <span className="col-item mt-md">
              <p>{linkObject.shortLink}</p>
              <button onClick={() => copyLink(linkObject.shortLink)}>
                {" "}
                Copy{" "}
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
