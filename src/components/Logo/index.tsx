import { FilmStrip } from "phosphor-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-1">
      <FilmStrip size={40} className="text-red-500" />
      <h1 className="font-bold">Storyflix</h1>
    </div>
  );
}
