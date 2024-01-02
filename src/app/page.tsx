"use client";

import {useEffect, useRef, useState} from "react";

import {CardProducts} from "@/components/card-product";

export interface SimpleCoffe {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number | null | string;
  votes: number;
  popular: boolean;
  available: boolean;
}

export default function Home() {
  const draft = useRef<SimpleCoffe[] | null>(null);
  const [lists, setLists] = useState<SimpleCoffe[] | null>(null);

  useEffect(() => {
    async function getAll() {
      const response = await fetch(
        "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
      );
      const result = (await response.json()) as SimpleCoffe[];

      setLists(result);
      draft.current = result;
    }
    getAll();
  }, []);

  const handleToggle = (t: string) => {
    if (t === "Avaible") {
      setLists((state) => state?.filter((coffee) => (coffee.available ? coffee : null)));
    } else {
      setLists(draft.current);
    }
  };

  return (
    <section className="mx-auto -mt-20 flex w-3/4 flex-col items-center justify-center gap-y-5 rounded-xl bg-main p-10 md:-mt-40 xl:md:-mt-60">
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-5xl font-bold">Our Collection</h1>
        <p className=" w-full max-w-lg text-pretty text-center font-medium text-gray-400">
          Introducing our Coffee Collection, a selection of unique coffees from different roast
          types and origins, expertly roasted in small batches and shipped fresh weekly.
        </p>
      </div>
      <div className="flex w-full max-w-md items-center justify-between">
        <button
          className="h-12 w-full rounded-2xl bg-toggle"
          type="button"
          onClick={() => handleToggle("All")}
        >
          All Products
        </button>
        <button
          className="h-12 w-full rounded-xl bg-transparent transition-colors duration-200 hover:bg-toggle/15"
          type="button"
          onClick={() => handleToggle("Avaible")}
        >
          Available Now
        </button>
      </div>
      <div className="grid w-full grid-cols-1 place-content-center gap-y-0 md:grid-cols-2 md:gap-y-5 xl:grid-cols-3">
        {lists?.map((coffe) => <CardProducts key={coffe.name} {...coffe} />)}
      </div>
    </section>
  );
}
