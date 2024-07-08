export const Navigation = () => {
  return (
    <nav className="py-4 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex gap-8">
          <li>
            <a href="/" className="text-lg font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="/actueel" className="text-lg font-semibold">
              Actueel
            </a>
          </li>
          <li>
            <a href="/sport" className="text-lg font-semibold">
              Sport
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
