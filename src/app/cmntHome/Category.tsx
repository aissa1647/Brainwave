"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { allTypes, fuels, manufacturers, yearsOfProduction } from "./data";
import { ComboBox, Item } from "@adobe/react-spectrum";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import CarSelected from "./CarSelected";
import { newContext } from "./Context";
import { ListFilter, PinOff } from "lucide-react";

import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Category() {
  const [txtModule, setModule] = useState("");
  const [txtType, setType] = useState("");
  const [selYear, setYear] = useState("");
  const [selFuel, setFuel] = useState("");
  const { select, setSelect } = useContext(newContext);
  const [open, setOpen] = React.useState(false);
  const [openType, setOpenType] = React.useState(false);

  function removeF() {
    setFuel("");
    setYear("");

    setType("");
    setModule("");
  }
  const filterTypes = allTypes.filter((typ) => typ.manufacturer === txtModule);
  const [name, setName] = useState("");

  return (
    <Provider theme={defaultTheme}>
      <div className={`  space-y-10 mb-60 bg-white relative`}>
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-6xl font-bold">Car Category</h1>
          <p className="text-gray-500 text-xl w-[80%]">
            Explore out cars you might like
          </p>
        </div>
        <div className="flex flex-col items-start gap-5 w-full ">
          <div className="flex items-center max-lg:flex-col gap-3 ">
            <div className="relative pl-9  ">
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                  >
                    {txtModule
                      ? manufacturers.find(
                          (framework) => framework.title === txtModule
                        )?.title
                      : "Select framework..."}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No Module found.</CommandEmpty>
                      <CommandGroup>
                        {manufacturers.map((framework) => (
                          <CommandItem
                            key={framework.title}
                            value={framework.title}
                            onSelect={(currentValue) => {
                              setModule(
                                currentValue === txtModule ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                txtModule === framework.title
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                              onClick={() => setType("Select Car...")}
                            />
                            {framework.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Image
                src="/car-logo.svg"
                className="absolute   left-2 top-[6] "
                width={23}
                height={23}
                alt=""
              />
            </div>
            <div className="relative pl-9 ">
              <Popover open={openType} onOpenChange={setOpenType}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openType}
                    className="w-[200px] justify-between"
                  >
                    {txtType
                      ? filterTypes.find(
                          (framework) => framework.name === txtType
                        )?.name
                      : "Select Car..."}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search framework..." />
                    <CommandList>
                      <CommandEmpty>No Car found.</CommandEmpty>
                      <CommandGroup>
                        {filterTypes.map((framework) => (
                          <CommandItem
                            key={framework.name}
                            value={framework.name}
                            onSelect={(currentValue) => {
                              setType(
                                currentValue === txtType ? "" : currentValue
                              );
                              setOpen(false);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                txtType === framework.name
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {framework.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <Image
                src="/model-icon.png"
                className="absolute   left-2 top-[6] "
                width={23}
                height={23}
                alt=""
              />
            </div>
            <div>
              <Image
                src="magnifying-glass.svg"
                className="active:bg-gray-400 transition-all rounded-full"
                height={45}
                width={45}
                alt=""
              />
            </div>
            <button >
              <AlertDialog>
                <AlertDialogTrigger className="  bg-gray-300 text-gray-800 font-bold rounded-full px-2.5 py-2">
                  <PinOff />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will delet all filter
                      you been selected
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={removeF}>Delete</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </button>
          </div>
          <div className="flex items-center max-lg:justify-center gap-2">
            <select
              name="year"
              className="w-full max-w-xs py-2 px-4 rounded-lg border border-gray-300 
            shadow-sm hover:shadow-md focus:shadow-lg focus:ring-2 focus:ring-blue-500 
            focus:border-blue-500 transition-all duration-200 ease-in-out"
              onChange={(e) => setYear(e.target.value)}
              value={selYear}
            >
              {yearsOfProduction.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.title}
                </option>
              ))}
            </select>
            <select
              name="fuel"
              className="w-full max-w-xs py-2 px-4 rounded-lg border border-gray-300 
            shadow-lg hover:shadow-xl focus:shadow-2xl focus:ring-2 focus:ring-blue-500 
            focus:border-blue-500 transition-all duration-200 ease-in-out "
              onChange={(e) => setFuel(e.target.value)}
            >
              {fuels.map((fuel) => (
                <option key={fuel.value} value={fuel.value}>
                  {fuel.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid max-lg:grid-cols-1 grid-cols-4 gap-10">
          {allTypes
            .filter((module) => {
              // التصفية حسب الشركة المصنعة إذا تم اختيارها
              if (txtModule && module.manufacturer !== txtModule) return false;

              // التصفية حسب النوع إذا تم اختياره
              if (txtType && module.name !== txtType) return false;

              // التصفية حسب السنة إذا تم اختيارها
              if (selYear && module.year.toString() !== selYear) return false;

              // التصفية حسب الوقود إذا تم اختياره
              if (selFuel && module.fuel !== selFuel) return false;

              return true;
            })
            .map((module, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelect(true);
                    setName(module.name);
                  }}
                  style={{ pointerEvents: `${select ? "none" : ""}` }}
                  className="flex cursor-pointer flex-col gap-5 bg-gray-200 p-3 rounded-2xl"
                >
                  <div className="flex flex-col gap-7 ml-5 items-start">
                    <h1 className="text-2xl">{module.name}</h1>
                    <div className="relative">
                      <span className=" text-4xl font-bold">
                        {module.price}
                      </span>
                      <span className="absolute text-5 top-[-7] text-gray-500 left-[-6]">
                        $
                      </span>
                      <span className="absolute text-5 bottom-[-2] text-gray-500 rigth-[-5]">
                        /day
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-7 items-center ">
                    <img src="hero.png" className="w-[50%]" alt="" />
                    <div className="flex justify-around  w-full ">
                      <div className="flex flex-col items-center gap-3  ">
                        <Image
                          src="steering-wheel.svg"
                          height={25}
                          width={25}
                          alt=""
                        />
                        <span className="text-gray-500">Automatic</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 ">
                        <Image
                          src="tire.svg"
                          className="w"
                          height={25}
                          width={25}
                          alt=""
                        />
                        <span className="text-gray-500">{module.bodyType}</span>
                      </div>
                      <div className="flex flex-col items-center gap-3 ">
                        <Image
                          src="gas.svg"
                          className="w"
                          height={25}
                          width={25}
                          alt=""
                        />
                        <span className="text-gray-500  ">19MPG</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {select && (
          <>
            <div className="fixed inset-0 bg-black/50  z-40"></div>
            <div className="fixed w-[80%] top-[55] left-[95]  z-50">
              <CarSelected name={name} />
            </div>
          </>
        )}
      </div>
    </Provider>
  );
}

export default Category;
