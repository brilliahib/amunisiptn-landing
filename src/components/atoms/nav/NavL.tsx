import Image from "next/image";
import Link from "next/link";

export default function NavL() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src={"/images/logo.png"}
                alt="Amunisi PTN"
                width={25}
                height={25}
              />
            </div>
            <h1 className="font-bold">Amunisi PTN</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
