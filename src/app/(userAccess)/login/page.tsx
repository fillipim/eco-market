"use client";

import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();
  return (
    <Form onSubmit={() => router.push("/home")}>
      <h2>Bem vindo de volta!</h2>
      <Input
        variant="float"
        type="email"
        id="email"
        placeholder="Seu email..."
      />
      <Input
        variant="float"
        type="password"
        id="password"
        placeholder="Sua senha..."
      />
      <Button type="submit">Entrar</Button>
    </Form>
  );
}
