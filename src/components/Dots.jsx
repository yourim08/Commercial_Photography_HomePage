const Dots = ({ length, currentIdx, setIdx }) => (
    <div className="dotsWrapper">
      {Array.from({ length }).map((_, i) => (
        <button
          key={i}
          className={`dotBtn ${i === currentIdx ? 'active' : ''}`}
          onClick={() => setIdx(i)}
        >
          <svg viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="7" stroke="#E3F5B3" strokeWidth="1" />
          </svg>
        </button>
      ))}
    </div>
  );
  
  export default Dots;