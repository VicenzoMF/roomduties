"use client";
import Image from "next/image";
import { Check, CookingPot, Drill, Fence, Shirt, ShoppingCart, Sparkles, Trash2 } from "lucide-react";
import { Plus } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Box } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface CardProps {
  taskType: string;
  content: string;
  date?: string;
  title: string;
  createdBy: string;
  completed: boolean;
}

export function Card({ taskType = "default", content, date, title, createdBy, completed }: CardProps) {
  const [editing, setEditing] = useState(false);
  const [taskTypeValue, setTaskTypeValue] = useState<string>(taskType);
  const [popoverIsVisible, setPopoverIsVisible] = useState(false);
  const [dateValue, setDateValue] = useState<string>("");
  const [titleValue, setTitleValue] = useState<string>("Add title");

  const handleToggleEditing = () => {
    setEditing(!editing);
  };

  return (
    <>
      {completed == false ? (
        <div className="w-[15.625rem] h-[15.625rem] rounded-3xl shadow-lg">
          <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
            {editing ? (
              <textarea className="h-[28px] text-lg bg-transparent resize-none outline-none text-center font-extrabold no-scrollbar">
                {title}
              </textarea>
            ) : (
              <h3 className="font-extrabold text-lg">{title}</h3>
            )}
          </div>
          <div className="flex flex-col mx-auto items-center  -translate-y-4">
            <div
              className={
                "size-[35px] bg-white rounded-full flex flex-col justify-center " +
                (editing ? "ring-green-400 ring-2" : null)
              }
            >
              <Popover open={popoverIsVisible}>
                <PopoverTrigger onClick={() => (editing ? setPopoverIsVisible(!popoverIsVisible) : null)}>
                  {taskType == "default" ? (
                    <Box width={25} height={25} className="mx-auto" />
                  ) : taskType == "maintenance" ? (
                    <Drill width={25} height={25} className="mx-auto" />
                  ) : taskType == "cleaning" ? (
                    <Sparkles width={25} height={25} className="mx-auto" />
                  ) : taskType == "groceries" ? (
                    <ShoppingCart width={25} height={25} className="mx-auto" />
                  ) : taskType == "cooking" ? (
                    <CookingPot width={25} height={25} className="mx-auto" />
                  ) : taskType == "laundry" ? (
                    <Shirt width={25} height={25} className="mx-auto" />
                  ) : taskType == "yard work" ? (
                    <Fence width={25} height={25} className="mx-auto" />
                  ) : taskType == "trash" ? (
                    <Trash2 width={25} height={25} className="mx-auto" />
                  ) : null}
                </PopoverTrigger>
                <PopoverContent className="flex flex-col items-start">
                  <div
                    onClick={() => {
                      setTaskTypeValue("maintenance");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <Drill />
                    <p>Maintenance</p>
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("cleaning");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <Sparkles />
                    <p>Cleaning</p>
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("groceries");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <ShoppingCart />
                    <p>Groceries</p>
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("cooking");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <CookingPot />
                    <p>Cooking</p>
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("laundry");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <Shirt />
                    <p>Laundry</p>
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("yard work");
                      setPopoverIsVisible(false);
                    }}
                    className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300"
                  >
                    <Fence />
                    <p>Yard Work</p>
                    <hr />
                  </div>
                  <div
                    onClick={() => {
                      setTaskTypeValue("trash");
                      setPopoverIsVisible(false);
                    }}
                    className="flex w-full py-2 gap-2 cursor-pointer hover:bg-zinc-100"
                  >
                    <Trash2 />
                    <p>Trash</p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            {editing ? (
              <input type="date" className="text-black/[.25] text-sm text-center bg-transparent" />
            ) : (
              <p className="text-sm text-black/[.25] h-[22px] ">{date == null ? "No deadline" : "Due " + date}</p>
            )}
          </div>
          <div className="flex flex-col px-3 justify-between h-[43%]">
            {editing ? (
              <div>
                <textarea
                  className={
                    "text-sm w-full h-full resize-none rounded-md" + (editing ? " ring-2 ring-green-400" : null)
                  }
                >
                  {content}
                </textarea>
              </div>
            ) : (
              <div>
                <p className="text-sm">{content}</p>
              </div>
            )}
            <div className="flex flex-row justify-between">
              {editing ? (
                <button className="mx-auto bg-[#367C93] px-2 py-1 rounded-md text-white">Confirm</button>
              ) : (
                <>
                  <div>
                    <p className="text-sm text-black/[.25]">Added by {createdBy}</p>
                  </div>
                  <div className="flex flex-row">
                    <Check className="cursor-pointer" width={25} height={25} />
                    <Pencil
                      fill="#000"
                      strokeWidth={0.5}
                      className="cursor-pointer"
                      onClick={handleToggleEditing}
                      opacity={0.5}
                      width={20}
                      height={20}
                    />
                    <Trash
                      fill="#000"
                      strokeWidth={0.5}
                      className="cursor-pointer"
                      opacity={0.5}
                      width={20}
                      height={20}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
