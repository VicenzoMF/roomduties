'use client'
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
  type: string;
  categories?: string;
  content?: string;
  date?: string;
  title?: string;
}
export function Card({ type = "add", categories, content, date, title }: CardProps) {
  const [editing, setEditing] = useState(false);


  const handleToggleEditing = () => {
    setEditing(!editing)
  }

  return (
    <div className="w-[15.625rem] h-[15.625rem] rounded-3xl shadow-lg">
      {type == "add" ? (
        <>
          <Dialog>
            <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
              <h3 className="font-extrabold text-lg">Add task</h3>
            </div>
            <DialogTrigger className="h-2/3 flex w-full items-center justify-center ">
              <Plus className="mx-auto cursor-pointer" opacity={.25} width={150} height={150} />
            </DialogTrigger>
            <DialogContent className="bg-transparent flex justify-center border-none shadow-none sm:max-w-md">
              <div className="w-[15.625rem] h-[15.625rem] bg-white rounded-3xl shadow-lg">
                <form className="size-full">
                  <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
                    <input value="Add title" className="font-extrabold text-lg bg-transparent outline-none text-center w-[95%]" type="text" />
                  </div>
                  <div className="flex flex-col mx-auto items-center  -translate-y-4">
                    <div className="w-[30px] h-[30px] bg-white rounded-full flex flex-col justify-center">
                      <Popover>
                        <PopoverTrigger>
                          <Box width={25} height={25} className="mx-auto" />
                        </PopoverTrigger>
                        <PopoverContent className="grid grid-cols-3">
                          <div>
                            <Drill />
                            <p>Maintenance</p>
                          </div>
                          <div>
                            <Sparkles />
                          </div>
                          <div>
                            <ShoppingCart />
                          </div>
                          <div>
                            <CookingPot />
                          </div>
                          <div>
                            <Shirt />
                          </div>
                          <div>
                            <Fence />
                          </div>
                          <div>
                            <Trash2 />
                          </div>

                        </PopoverContent>
                      </Popover>
                    </div>
                    <input type="date" className="text-black/[.25] text-sm text-center" />
                  </div>
                  <div className="flex flex-col px-3 justify-between h-[35%]">
                    <textarea maxLength={100} className="text-sm w-full h-full resize-none outline-none" >{content}</textarea>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-[#367C93] w-[35%] p-1 rounded font-bold ease-in duration-200 hover:bg-[#4e9cb6]">Add</button>
                  </div>
                </form>
              </div>
            </DialogContent>

          </Dialog>
        </>
      ) : type == "task" ? (
        <>
          <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
            {editing ? (
              <textarea className="h-[28px] text-lg bg-transparent resize-none outline-none text-center font-extrabold no-scrollbar">{title}</textarea>
            ) : (
              <h3 className="font-extrabold text-lg">{title}</h3>
            )
            }
          </div>
          <div className="flex flex-col mx-auto items-center  -translate-y-4">
            <div className="w-[35px] bg-white rounded-full">
              <Plus width={35} height={35} />
            </div>
            {editing ? (
              <input type="date" className="text-black/[.25] text-sm text-center" />
            ) : (
              <p className="text-sm text-black/[.25] h-[22px] ">{date == null ? "No deadline" : "Due " + date}</p>
            )
            }
          </div>
          <div className="flex flex-col px-3 justify-between h-[43%]">
            {editing ? (
              <div>
                <textarea className="text-sm w-full h-full resize-none" >{content}</textarea>
              </div>) : (
              <div>
                <p className="text-sm">{content}</p>
              </div>
            )}
            <div className="flex flex-row justify-between">
              <div>
                <p className="text-sm text-black/[.25]">Added by Arthur</p>
              </div>
              <div className="flex flex-row">
                <Check className="cursor-pointer" width={25} height={25} />
                <Pencil fill="#000" strokeWidth={0.5} className="cursor-pointer" onClick={handleToggleEditing} opacity={.50} width={20} height={20} />
                <Trash fill="#000" strokeWidth={0.5} className="cursor-pointer" opacity={.50} width={20} height={20} />
              </div>
            </div>
          </div>

        </>
      ) : null}
    </div>
  );
}
