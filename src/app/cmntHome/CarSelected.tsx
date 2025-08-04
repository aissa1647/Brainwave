import { Pointer, X } from "lucide-react";
import React, { useContext } from "react";
import { allTypes } from "./data";
import Image from "next/image";
import { newContext } from "./Context";

function CarSelected({name}:{ name: string} ) {
  
  const { setSelect } = useContext(newContext);
  
  const theCarSelected = allTypes.find((car) => car.name === name);
 

  return (
    <div onClick={()=>console.log(name)} className="flex z-[50] bg-gray-200 flex-col gap-3 rounded-lg p-4 w-[27%] relative h-[60%] my-30 max-lg:w-[73%]  ">
      <X
        onClick={() => setSelect(false)}
        className="absolute z-40 w-8 h-8 top-[-2]  right-[-10] bg-gray-500 cursor-pointer rounded-full p-1"
      />
      <div className="relative h-[6rem] overflow-hidden  ">
        <Image
          src="/pattern.png"
          className="absolute z-[-1]"
          width={600}
          height={600}
          alt=""
          
          
        />
        <div className="absolute top-1/5 l-1/2 flex justify-center ">
          <Image
            src="/hero.png"
            className="w-[30%]"
            width={300}
            height={300}
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <Image
          src="/hero.png"
          className="w-[30%] p-2 bg-gray-200 rounded-lg"
          alt=""
          height={300}
          width={300}
        />
        <Image
          src="/hero.png"
          className="w-[30%] p-2 bg-gray-200 rounded-lg"
          alt=""
          height={300}
          width={300}
        />
        <Image
          src="/hero.png"
          className="w-[30%] p-2 bg-gray-200 rounded-lg"
          alt=""
          height={300}
          width={300}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl my-3">
          {theCarSelected?.manufacturer} {theCarSelected?.name}
        </h1>

        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-400">name :</p>
          <p className="font-medium">{theCarSelected?.name}</p>
        </div>
        <div className="flex items-center justify-between py-1 border-b">
          <p className="text-gray-400">manufacturer :</p>
          <p className="font-medium">{theCarSelected?.manufacturer}</p>
        </div>
        <div
          key={theCarSelected?.name}
          className="flex items-center justify-between py-1 border-b"
        >
          <p className="text-gray-400">bodyType :</p>
          <p className="font-medium">{theCarSelected?.bodyType}</p>
        </div>
        <div
          key={theCarSelected?.name}
          className="flex items-center justify-between py-1 border-b"
        >
          <p className="text-gray-400">price :</p>
          <p className="font-medium">
            <span className="text-green-500">$ </span>
            {theCarSelected?.price}
          </p>
        </div>
        <div
          key={theCarSelected?.name}
          className="flex items-center justify-between py-1 border-b"
        >
          <p className="text-gray-400">year :</p>
          <p className="font-medium">{theCarSelected?.year}</p>
        </div>
      </div>
    </div>
  );
}

export default CarSelected;
