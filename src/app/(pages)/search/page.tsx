"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { TREATMENTS, Treatment } from "../../../data";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Treatment[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryParam = searchParams.get("q") || "";
    setQuery(queryParam);

    const filteredResults = queryParam.trim()
      ? TREATMENTS.filter((treatment) =>
          treatment.name.toLowerCase().includes(queryParam.toLowerCase().trim())
        )
      : [];

    setResults(filteredResults);
  }, []);

  return (
    <div className="container mx-auto py-10 px-2 md:px-6 ">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {results.length > 0 ? (
        <ul className="space-y-4">
          {results.map((treatment) => (
            <li key={treatment.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-2xl font-semibold">{treatment.name}</h2>
              <p>{treatment.description}</p>
              <Link href={`/treatment/${treatment.id}`}>
                <span className="text-blue-500 hover:underline">Read More</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg text-gray-700">No results found for search: {query}</p>
      )}
    </div>
  );
};

export default SearchPage;
