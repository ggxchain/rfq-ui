"use client"

import { useState } from "react";
import TokenSelector from "./tokenSelector";
import Ruler from "./ruler";

type FormData = {
    sell_token: Token;
    buy_token: Token;
    sell_amount: number;
    buy_amount: number;
}

export default function Dex() {
    const [isMaker, setIsMaker] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({} as FormData);

    const onClear = () => {
        setFormData({} as FormData);
    }


    return (
        <div className="text-slate-100 flex flex-col md:min-w-[50%] min-w-full p-10">
            <div className="flex text-md justify-between">
                <button onClick={() => setIsMaker(false)}>
                    <p className={isMaker ? "text-slate-500" : ""}>Taker order</p>
                </button>
                <button onClick={() => setIsMaker(true)}>
                    <p className={isMaker ? "" : "text-slate-500"}>Maker order</p>
                </button>
            </div>

            <Ruler />

            <div className="flex flex-col rounded-3xl secondary-gradient p-5 md:mx-[25px] mt-5">
                <p className="text-sm">Sell</p>
                <TokenSelector token={formData.sell_token} amount={formData.sell_amount} onChange={(sell_token: Token, sell_amount: number) => { setFormData({ ...formData, sell_amount, sell_token }) }} />

                <p className="text-sm mt-2">Buy</p>
                <TokenSelector token={formData.buy_token} amount={formData.buy_amount} onChange={(buy_token: Token, buy_amount: number) => { setFormData({ ...formData, buy_token, buy_amount }) }} />

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

                    <div className="flex justify-around mt-5">
                        <button className="rounded-2xl border p-2 m-2 basis-1/4 grow-on-hover" onClick={onClear}>Clear</button>
                        <button className="basis-3/4 rounded-2xl border p-2 m-2 grow-on-hover" onClick={() => console.log(formData)}>Connect wallet</button>
                    </div>
                </div>
            </div>
        </div>
    )
}