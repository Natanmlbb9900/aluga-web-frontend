import React from "react";
import icone from "../assets/iconelaranja.png"

export default function Footer() {
    return (
        <footer className="bg-[hsl(18,100%,44%)] flex justify-between p-4 items-center sm:w-full">
            <div className="flex gap-3">
            <div className="bg-white rounded justify-center flex">
                <img src={icone} alt=""  className="p-[6px]"/>
                </div>
                <p className="text-white text-2xl font-bold">Aluga web</p>
                </div>
                 
            <p className="text-white text-bold text-">Todos os direitos reservados</p>

        </footer>
    );
}

