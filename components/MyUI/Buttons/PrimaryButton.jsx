import Link from "next/link";

export default function PrimaryButton({ href, onClick, text }) {
  return (
    <Link
      onClick={onClick ? onClick : null}
      className="flex items-center justify-center px-5 py-3 text-sm font-medium text-white duration-300 rounded-lg cursor-pointer w-fit sm:text-md bg-primary-600 hover:bg-primary-700"
      href={href}
      passHref
    >
      {text}
    </Link>
  );
}
