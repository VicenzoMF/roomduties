'use client'
import Image from "next/image";
import { Checkmark } from "@/assets/checkmark";
import { Plus } from "@/assets/plus";
import { Pencil } from "@/assets/pencil";
import { Trash } from "@/assets/trash";
import { useState } from "react";

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
          <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
            <h3 className="font-extrabold text-lg">Add task</h3>
          </div>
          <Plus className="mx-auto cursor-pointer" opacity={.25} width={150} height={150}/>
          <div className="h-2/3 flex items-center justify-center "></div>
        </>
      ) : type == "task" ? (
        <>
          <div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
            { editing ? (
              <textarea className="h-6 bg-transparent resize-none outline-none text-center font-extrabold"/>
            ) : (
              <h3 className="font-extrabold text-lg">{title}</h3>
              )
            }
            </div>
          <div className="flex flex-col mx-auto items-center  -translate-y-4">
            <div className="w-[35px] bg-white rounded-full">
            <Plus width={35} height={35}/>
            </div>
            { editing ? (
                <input type="date" className="text-black/[.25] text-sm text-center"/>
            ) : (
              <p className="text-sm text-black/[.25]">{date == null ? "No deadline" : "Due " + date }</p>
            )
            }
          </div>
          <div className="flex flex-col px-3 justify-between h-[43%]">
            { editing ? (
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
                <Checkmark className="cursor-pointer" width={25} height={25}/>
                <Pencil className="cursor-pointer" onClick={handleToggleEditing} opacity={.50} width={25} height={25} />
                <Trash className="cursor-pointer" opacity={.50} width={25} height={25}/>
              </div>
            </div>
          </div>

        </>
      ) : null}
    </div>
  );
}
