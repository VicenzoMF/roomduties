'use client'
import { Box, CookingPot, Drill, Fence, Plus, Shirt, ShoppingCart, Sparkles, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";


export function AddCard() {
  const [taskType, setTaskType] = useState<string>("default");
  const [popoverIsVisible, setPopoverIsVisible] = useState(false);
  const [dateValue, setDateValue] = useState<string>("");
  const [title, setTitle] = useState<string>("Add title");
  const [content, setContent] = useState<string>("");

  const handleAddTask = () => {
    const data = {
      title: title,
      content: content,
      date: dateValue,
      type: taskType,
    };
  }

  return (
    <div className="w-[15.625rem] h-[15.625rem] rounded-3xl shadow-lg">
          <Dialog>
            <DialogTitle />
            <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
              <h3 className="font-extrabold text-lg">Add task</h3>
            </div>
            <DialogTrigger className="h-2/3 flex w-full items-center justify-center ">
              <Plus className="mx-auto cursor-pointer" opacity={0.25} width={150} height={150} />
            </DialogTrigger>
            <DialogContent className="bg-transparent flex justify-center border-none shadow-none sm:max-w-md">
              <div className="w-[15.625rem] h-[15.625rem] bg-white rounded-3xl shadow-lg">
                <form className="size-full">
                  <div className={`h-[28%] ` + (taskType == "default" ? "bg-[#367C93]" 
                  : taskType == "maintenance" ? "bg-[#D9D9D9]"
                  : taskType == "cleaning" ? "bg-[#A4EDE0]"
                  : taskType == "groceries" ? "bg-[#A0D2FF]"
                  : taskType == "cooking" ? "bg-[#FF624D]"
                  : taskType == "laundry" ? "bg-[#9B4DFF]"
                  : taskType == "yard work" ? "bg-[#05A801]"
                  : taskType == "trash" ? "bg-[#F4FF78]" : null)
                  + ` rounded-t-3xl flex items-center justify-center`}>
                    <input
                      value={title}
                      className="font-extrabold text-lg bg-transparent outline-none text-center w-[95%]"
                      onChange={(e) => console.log(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col mx-auto items-center -translate-y-4">
                    <div className="size-[35px] bg-white rounded-full flex flex-col justify-center">
                      <Popover open={popoverIsVisible}>
                        <PopoverTrigger onClick={()=> setPopoverIsVisible(!popoverIsVisible)}>
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
                          <div onClick={()=> {setTaskType("maintenance"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <Drill />
                            <p>Maintenance</p>
                          </div>
                          <div onClick={()=> {setTaskType("cleaning"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <Sparkles />
                            <p>Cleaning</p>
                          </div>
                          <div onClick={()=> {setTaskType("groceries"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <ShoppingCart />
                            <p>Groceries</p>
                          </div>
                          <div onClick={()=> {setTaskType("cooking"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <CookingPot />
                            <p>Cooking</p>
                          </div>
                          <div onClick={()=> {setTaskType("laundry"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <Shirt />
                            <p>Laundry</p>
                          </div>
                          <div onClick={()=> {setTaskType("yard work"); setPopoverIsVisible(false)} } className="flex border-b-2 border-zinc-500 w-full py-2 gap-2 cursor-pointer ease-in duration-200 hover:bg-zinc-300">
                            <Fence />
                            <p>Yard Work</p>
                            <hr />
                          </div>
                          <div onClick={()=> {setTaskType("trash"); setPopoverIsVisible(false)} } className="flex w-full py-2 gap-2 cursor-pointer hover:bg-zinc-100">
                            <Trash2 />
                            <p>Trash</p>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <input type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} className="m-0 text-black/[.25] text-sm text-center" />
                  </div>
                  <div className="flex flex-col px-3 justify-between h-[35%]">
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} maxLength={100} className="text-sm w-full h-full resize-none outline-none border-2 rounded-md" />
                  </div>
                  <div className="flex justify-center">
                    <button onClick={handleAddTask} className="bg-[#367C93] w-[35%] px  -1 rounded font-bold ease-in duration-200 hover:bg-[#4e9cb6]">
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </DialogContent>
            <DialogDescription about="Add Task Card" />
          </Dialog>
    </div>
  );
}