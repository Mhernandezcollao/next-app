'use client'

import {Button, Image} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simula la carga de la imagen
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-10 md:p-24 bg-black py-14">
          <div className="relative max-w-3xl flex flex-col w-full md:flex-row items-center p-1">
              <div className={`flex flex-col w-full md:w-1/2 items-center md:items-start shadow-lg transition-all duration-1000 ease-in-out transform ${loaded ? 'opacity-100 -translate-y-0 scale-100' : 'opacity-0 -translate-y-20 scale-95'}`}> 
                <h1 className=" text-4xl md:text-5xl font-bold text-white">Soy</h1>
                <h1 className=" text-4xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purplepizzazz to-orange-400">Maryorie</h1>
                <h1 className=" text-4xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-icterine to-darkseagreen">Hernández</h1>
                <h1 className=" text-4xl md:text-5xl font-extrabold inline-block text-transparent bg-clip-text bg-gradient-to-r from-darkseagreen via-electricblue to-blue-600">Collao</h1>
                <h1 className=" text-4xl md:text-5xl font-bold text-white">¡Conóceme!</h1>
                <div className="flex pt-4 pb-4 justify-center md:justify-start">
                  <Button className="font-bold bg-gradient-to-tr from-blue-500 to-pink-500 text-white">
                    <Link href="/profile">
                      Entrar
                    </Link>
                  </Button>
                </div>
              </div>
              <div className={`flex w-full md:w-1/2 justify-center md:justify-end shadow-lg transition-all duration-1000 ease-in-out transform ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
                <div className="w-72 md:w-full">
                  <Image
                    src="https://i.imgur.com/496tW3K.png" // Cambia "/tu-imagen.jpg" por la ruta de tu imagen
                    alt="NextUI Album Cover"
                    onLoad={() => setLoaded(true)} // Marca la imagen como cargada cuando se carga
                  />
                </div>
              </div>
          </div>
    </main>
  );
}
9