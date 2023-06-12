import "./Heading.css";

const Heading = () => {
  return (
    <div className="heading" onClick={() => window.scroll(0, 0)}>
      🎬 Movies and series 🎥
    </div>
  );
};

export default Heading;
