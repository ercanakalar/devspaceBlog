import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    Python: "bg-red-600",
    PHP: "bg-purple-600",
    CSS: "bg-blue-600",
    Ruby: "bg-red-600",
  };

  return (
    <div
      className={`px-2 py-2 bg-${colorKey[children]}-600 ${colorKey[children]} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
