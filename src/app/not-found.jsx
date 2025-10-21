"use client";

//#region hooks
import { useEffect } from "react";
import { useRouter } from "next/navigation";
//#endregion

//#region components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
//#endregion

export default function NotFoundPage() {
  const router = useRouter();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <div className=" w-full flex items-center justify-center p-5">
      <Card className="w-full max-w-md text-center shadow-lg">
        <CardHeader>
          <div className="flex justify-center mb-3">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-2xl font-bold">
            404 - Pagina non trovata
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground">
            Ops! La pagina che stai cercando non esiste o è stata spostata.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Verrai reindirizzato alla home tra{" "}
            <span className="font-medium">5 secondi</span>.
          </p>
        </CardContent>

        <CardFooter className="flex justify-center">
          <Button onClick={() => router.push("/")}>Torna alla Home</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
