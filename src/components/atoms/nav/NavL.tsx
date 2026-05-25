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
                src={"/images/logo/logo.png"}
                alt="Amunisi PTN"
                width={150}
                height={150}
                className="brightness-0 invert"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
