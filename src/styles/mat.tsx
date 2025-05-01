import './MatrixLinesBackground.css';

const MatrixLinesBackground = () => {
  return (
    <div className="matrix-lines-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="matrix-lines-wrapper absolute top-0 left-0 right-0 h-full mx-auto w-[90vw] flex justify-between">
        {Array(10).fill(0).map((_, index) => (
          <div key={index} className={`matrix-line relative w-px h-full overflow-hidden line-${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default MatrixLinesBackground;