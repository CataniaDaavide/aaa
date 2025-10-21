"use client";

//#region hooks
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
//#endregion

//#region components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
//#endregion

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const username = useRef();
  const password = useRef();

  // clicl sul pulsante accedi
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // Simula una chiamata API o una login async
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (err) {
      console.error(err);
    } finally {
      // disabilita il loader
      setLoading(false);
      router.push("/")
    }
  };

  return (
    <Card className="w-full max-w-md flex flex-col gap-3 border-0 bg-transparent shadow-none">
      <CardHeader>
        <CardTitle className="text-3xl text-center py-3">LOGO</CardTitle>
        <CardDescription>
          Inserisci le tue credenziali per accedere al tuo account
        </CardDescription>
      </CardHeader>
      <CardContent className={"flex flex-col gap-3"}>
        <div className="grid gap-1">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="username"
            ref={username}
            autoComplete="off"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-1">
          <Label htmlFor="username">Password</Label>
          <Input
            id="password"
            type="password"
            ref={password}
            autoComplete="off"
            placeholder="•••••"
            required
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSubmit} className="w-full">
          {loading ? (
            <>
              <Spinner />
              Caricamento...
            </>
          ) : (
            "Accedi"
          )}
        </Button>
      </CardFooter>
      {/* {messages && messages.length != 0 && (
        <Card
          className={`${
            success
              ? "bg-green-500/10 border-green-500/40 text-green-500"
              : "bg-red-500/10 border-red-500/40 text-red-500"
          } border-1 flex p-3 rounded-md mx-6`}
        >
          <CardContent className={"p-0"}>
            <ul className="text-sm">
              {messages.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
            </ul>
          </CardContent>
        </Card>
      )} */}
    </Card>
  );
}
