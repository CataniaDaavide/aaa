"use client";
//#region hoocks
import { useRef } from "react";
//#endregion

//#region  components
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//#endregion

export default function DashboardHome() {
  const username = useRef();
  const name = useRef();
  const surname = useRef();
  const role = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();

  return (
    <div className="w-full max-w-[1300px] flex flex-col gap-3 p-5">
      <Card className={"w-full p-0"}>
        <CardContent className={"grid grid-cols-1 md:grid-cols-2 gap-3 p-5"}>
          <div className="grid gap-1 w-full">
            <Label>Stato *</Label>
            <Select defaultValue="enabled">
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="enabled">Attivo</SelectItem>
                  <SelectItem value="disabled">Disattivo</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-1 w-full">
            <Label>Nome *</Label>
            <Input id="name" name="name" ref={name} autoComplete="off" />
          </div>

          <div className="grid gap-1 w-full">
            <Label>Ruolo *</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleziona ruolo" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="enabled">Admin</SelectItem>
                  <SelectItem value="role1">role1</SelectItem>
                  <SelectItem value="role2">role2</SelectItem>
                  <SelectItem value="role3">role3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <Label>Email *</Label>
            <Input id="email" name="email" ref={email} autoComplete="off" />
          </div>

          <div className="grid gap-1 w-full">
            <Label>Username *</Label>
            <Input
              id="surname"
              name="surname"
              ref={surname}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-1 w-full">
            <Label>Cellulare *</Label>
            <Input id="phone" name="phone" ref={phone} autoComplete="off" />
          </div>

          <div className="grid gap-1 w-full">
            <Label>Cognome *</Label>
            <Input
              id="surname"
              name="surname"
              ref={surname}
              autoComplete="off"
            />
          </div>
          <div className="grid gap-1 w-full">
            <Label>Password *</Label>
            <Input
              id="password"
              name="pasword"
              ref={password}
              autoComplete="off"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2 p-2">
        <CardContent className={"flex flex-wrap gap-3 p-2"}>
          <Button variant="primary">Conferma</Button>
          <Button variant="">ResetPassword</Button>
          <Button variant="destructive">Elimina</Button>
          <Button variant="secondary">Indietro</Button>
        </CardContent>
      </Card>
    </div>
  );
}

// function InputGroup({ label, name, id, ref }) {
//   <div>
//     <div className="grid gap-1 w-full">
//       <Label>{label}</Label>
//       <Input id={id} name={name} ref={password} autoComplete="off" />
//     </div>
//   </div>;
// }
