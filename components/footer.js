export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
          Created by{` `}
          <a
            className="font-bold"
            href="https://taylorbrynat.dev"
            rel="noopener noreferrer"
            target="_blank"
          >
            Taylor Bryant
          </a>
        </li>

        <li>
          <a
            className="font-bold"
            href="https://github.com/oddstronaut/next-starter-tailwind"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
}
