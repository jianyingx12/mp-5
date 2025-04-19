"use client";
import { useState } from "react";
import { saveUrl } from "@/lib/saveShortUrl";

export default function Form() {
  const [alias, setAlias] = useState("");
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [error, setError] = useState("");

  const handleClick = async () => {
    setShortenedUrl("");
    setError("");

    const data = { alias, url }; 

    try {
      await saveUrl(data);
      setShortenedUrl(`http://localhost:3000/${alias}`);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="m-8 flex flex-col gap-4 w-full max-w-md">
      <input
        type="text"
        value={alias}
        onChange={(e) => setAlias(e.target.value)}
        placeholder="Your custom alias"
        required
        className="p-2 rounded border"
      />
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="URL"
        required
        className="p-2 rounded border"
      />
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded"
      >
        Shorten URL
      </button>

      {error && <p className="text-red-600 mx-auto w-fit">{error}</p>}

      {shortenedUrl && (
        <div className="m-2 text-green-700 mx-auto w-fit">
          <span>Shortened URL: </span>
          <a
            href={shortenedUrl}
            target="_blank"
            className="text-blue-800 underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
