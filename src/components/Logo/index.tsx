import { FilmStrip } from "phosphor-react";

interface LogoProps {
  size: number;
}

export default function Logo({ size }: LogoProps) {
  return (
    <div className="flex items-center gap-1">
      <FilmStrip size={size} className="text-red-300" />
      <h1 className="font-bold">Storyflix</h1>
    </div>
  );
}
