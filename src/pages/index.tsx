import Image from "next/image";
import { Envelope, Lock } from "phosphor-react";
import backgrounImage from "../assets/background.png";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export default function Home() {
  return (
    <main className="relative h-screen w-screen md:flex md:flex-row-reverse">
      <div className="h-full md:flex-1">
        <Image
          src={backgrounImage}
          alt="background"
          className="h-full w-full object-cover md:object-center"
        />
      </div>
      <section className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-900 md:bg-gray-900 md:flex md:w-96">
        <form className="flex flex-col m-auto justify-center max-w-[320px] h-[90%] mt-10 gap-4">
          <Text size="lg" className="font-bold text-center">
            Login
          </Text>
          <label htmlFor="email" className="flex flex-col gap-3">
            <Text className="font-semibold">Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail"
              />
            </TextInput.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-3 ">
            <Text className="font-semibold">Sua senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                id="email"
                type="password"
                placeholder="************"
              />
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Text size="sm" className="text-gray-200">
              Lembrar de mim por 30 dias
            </Text>
          </label>

          <Button type="submit" className="mt-4">
            Entrar na plataforma
          </Button>
        </form>
      </section>
    </main>
  );
}
