// import { meRequest } from "@/api/me";
// import { useQuery } from "react-query";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const Chats = () => {
  // const { data: userData } = useQuery({
  //   queryKey: ["me"],
  //   queryFn: meRequest,
  // });
  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <div className="w-full flex flex-row items-center justify-between">
        <h1 className="text-3xl m-4">Chats</h1>
        <Button className="bg-secondary">Novo Chat</Button>
      </div>
      <Input className="w-full mb-4" placeholder="Buscar chats..." />
      <div className="w-full flex flex-col items-center gap-0.5">
        {Array.from({ length: 60 }).map((_, index) => (
          <Card
            key={index}
            className="w-full hover:cursor-pointer border-2 border-transparent hover:border-primary transition-shadow mb-4"
          >
            <CardHeader className="flex flex-row gap-6.5 items-center">
              <img
                className="w-12 h-12 bg-fixed rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/6541/6541074.png"
                alt=""
              />
              <div>
                <CardTitle className="text-primary text-bold text-2xl">
                  Nome do chat
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Sobre o que é o chat
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
