const SliderArrows = ({ onPrev, onNext }) => {
    const Arrow = () => (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M13.3436 35.5133L11.5703 33.74L25.312 20L11.5703 6.26L13.3436 4.48666L28.857 20L13.3436 35.5133Z" fill="white" fillOpacity="0.6"/>
      </svg>
    );
  
    return (
      <>
        <button className="slideArrow leftArrow" onClick={onPrev}><Arrow /></button>
        <button className="slideArrow rightArrow" onClick={onNext}><Arrow /></button>
      </>
    );
  };
  
  export default SliderArrows;