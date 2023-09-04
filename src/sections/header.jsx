function Header({ theme, setTheme }) {
  function handleTheme(mode) {
    setTheme(mode);
    localStorage.setItem("theme", mode);
  }
  return (
    <div className="w-full bg-rose-500 fixed flex justify-center z-50">
      <header>
        <button
          onClick={() => {
            handleTheme("light");
          }}
        >
          ☀
        </button>
        <button
          onClick={() => {
            handleTheme("dark");
          }}
        >
          🌙
        </button>
      </header>
    </div>
  );
}

export default Header;
