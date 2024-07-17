import Image from "next/image"
import add_plus from "@/assets/ic_baseline-plus.png"

interface CardProps {
    type: string
    categories?: string
}
export function Card({ type = 'add', categories }: CardProps) {

    return (
        <div className="w-[15.625rem] h-[15.625rem] rounded-3xl shadow-lg">
            {type == 'add' ? (
                <><div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
                    <h3 className="font-extrabold text-lg">Add task</h3>
                </div><div className="h-2/3 flex items-center justify-center">
                        <Image src={add_plus}
                            width={150}
                            height={150}
                            alt="Picture of the author" />
                    </div></>
            ) : type == "task" ? (
                <><div className="h-[28%] bg-[#367C93] rounded-t-3xl flex items-center justify-center">
                    <h3 className="font-extrabold text-lg">Add task</h3>
                </div>
                    <div className="px-3">
                        <div>
                            <Image src={add_plus}
                                width={50}
                                height={50}
                                alt="Picture of the author" />
                        </div>
                        <div>
                            <p className="text-black/[.25] text-sm">No deadline</p>
                        </div>
                        <div>
                            <p className="text-sm">During Tania’s party last week someone broke the sofa</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p className="text-sm text-black/[.25]">Added by Arthur</p>
                            </div>
                            <div className="flex flex-row">
                                <Image src={add_plus}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author" />
                                <Image src={add_plus}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author" />
                                <Image src={add_plus}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author" />
                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
        </div >
    )
}