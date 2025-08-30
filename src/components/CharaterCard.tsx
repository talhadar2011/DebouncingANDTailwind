import type {  Character } from "../types/CharaterType"

type PropType={
    data:Character
}
export default function CharaterCard(props:PropType) {



    return (
        <>
            <div className="h-60 w-150 drop-shadow-xl rounded-2xl m-1 bg-white flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.data.image} alt="" />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-black">{props.data.name}</p>
                        <p className="font-medium text-gray-500">{props.data.species}</p>
                    </div>
                    <button className="border-1 rounded-full p-2 border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                        Message
                    </button>
                </div>
            </div>

        </>)
}
