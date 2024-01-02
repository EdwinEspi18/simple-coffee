import type {SimpleCoffe} from "@/app/page";

import {Card, CardContent, CardFooter} from "@/components/ui/card";

export function CardProducts(props: SimpleCoffe) {
  return (
    <Card className="max-w-full border-none bg-transparent p-10">
      <CardContent className="relative px-0">
        {props.popular ? (
          <div className="absolute left-3 top-3 rounded-full bg-babgePopular px-3 py-0.5">
            <span className="font-medium text-black">Popular</span>
          </div>
        ) : null}
        <img alt={props.name} className="w-full rounded-2xl" src={props.image} />
      </CardContent>
      <CardFooter className="flex flex-col gap-4 px-0">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-pretty text-lg font-bold">{props.name}</h2>
          <div className="rounded-md bg-babge px-3 py-1">
            <span className="text-center font-medium text-black">{props.price}</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-start">
          <img
            alt="Star Fill"
            src={!props.rating && props.votes === 0 ? "/Star.svg" : "/Star_fill.svg"}
          />
          <p className="flex w-full justify-between font-bold">
            {!props.rating && props.votes === 0 ? (
              <span className="ml-1 text-gray-500">No ratings</span>
            ) : (
              <div>
                <span>{props.rating}</span>
                <span className="ml-1 text-gray-500">({props.votes} votes)</span>
              </div>
            )}
            {!props.available && <span className="text-[#ED735D]">Sold out</span>}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
