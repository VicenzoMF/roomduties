'use client';

import { use, useEffect, useState } from "react";

export function Teste() {


  const [teste,setTeste] = useState('123');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTeste(event.target.value);
  };


  return (
    <>
      <input className="text-black" value={teste} onChange={handleChange}>
      
      </input>

      <h1>{teste}</h1>
    </>
  );
}