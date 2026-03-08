function Navbar({ setCategory }) {

  return (
    <div className="navbar">

      <button onClick={() => setCategory("trending")}>
        Home
      </button>

      <button onClick={() => setCategory("popular")}>
        Popular
      </button>

      <button onClick={() => setCategory("now_playing")}>
        Now Playing
      </button>

      <button onClick={() => setCategory("upcoming")}>
        Upcoming
      </button>

      <button onClick={() => setCategory("top_rated")}>
        Top Rated
      </button>

    </div>
  );
}

export default Navbar;