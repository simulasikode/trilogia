import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed z-10 top-0 w-full h-screen justify-between mt-10 ">
      <div className="flex mx-auto max-w-screen-xl">
        <div className="flex-1 font-bold text-xl">
          <Link href="/">
            <Image
              src="logofest.svg"
              alt="trilogia logo"
              height={32}
              width={32}
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 text-xl">
            <li>
              <Link
                href="/about"
                className=" py-2 px-6 hover:bg-waikawa hover:text-white hover:rounded-full hover:border-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className=" py-2 px-6 hover:bg-anzac hover:rounded-full hover:border-2"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link href="/">Schedules</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
