import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-primary min-h-24 flex px-10   items-center">
      <Image
        src={"/icon.svg"}
        width={90}
        height={90}
        alt="nimble gravity icon"
      />
    </header>
  );
}
