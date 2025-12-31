import Image from "next/image";

export default function SectionFooter() {
  return (
    <>
      <footer className="bg-background w-full gap-5 h-auto pb-5 pt-10 flex items-center justify-center">
        <div className=" w-40">
          <Image
            src={"/siafi-logo-blanco.webp"}
            alt={"SIAFI Logo"}
            width={400}
            height={50}
            className={"object-contain justify-self-center "}
          ></Image>
        </div>
      </footer>
    </>
  );
}
