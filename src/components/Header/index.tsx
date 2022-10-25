import Logo from "../Logo";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between p-4 h-20 bg-[#202024]">
      <Logo />
      <button type="button" className="p-4">
        Logout
      </button>
    </header>
  );
}
