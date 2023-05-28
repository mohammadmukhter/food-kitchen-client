const CoverImg = ({ img, coverTitle }) => {
  console.log(img);
  return (
    <div
      className="hero md:h-[560px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-content text-center text-neutral-content bg-black px-20 py-12 bg-opacity-50 rounded">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoverImg;
