'use client'

import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();
  return (
    <form onSubmit={() => router.push("/home")}>
      <label htmlFor="email">Email: </label>
      <input id="email" placeholder="Seu email..." />
      <label htmlFor="password">Senha: </label>
      <input type="password" id="password" placeholder="Sua senha..." />
      <button type="submit">Entrar</button>
    </form>
  );
}
