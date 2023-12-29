"use client"

import { useState } from "react";
import TokenSelector from "./tokenSelector";
import Ruler from "./ruler";

export default function Dex() {
    const [isMaker, setIsMaker] = useState(false);

    return (
        <div className="text-slate-100 flex flex-col md:min-w-[550px] min-w-full p-10">
            <div className="flex text-md justify-between">
                <button onClick={() => setIsMaker(false)}>
                    <p className={isMaker ? "text-slate-500" : ""}>Taker order</p>
                </button>
                <button onClick={() => setIsMaker(true)}>
                    <p className={isMaker ? "" : "text-slate-500"}>Maker order</p>
                </button>
            </div>

            <Ruler />

            <div className="flex flex-col rounded-3xl bg-gradient-to-t from-indigo-600 to-blue-900 p-5 md:mx-[25px] mt-5">
                <p className="text-sm">Sell</p>
                <TokenSelector />

                <p className="text-sm mt-2">Buy</p>
                <TokenSelector />

                <Ruler />

                <div className="font-semibold mt-4">
                    <div className="flex justify-between">
                        <p>Balance:</p>
                        <p>0.00</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Total fee:</p>
                        <p>0.00</p>
                    </div>
                </div>

            </div>
        </div>
    )
}