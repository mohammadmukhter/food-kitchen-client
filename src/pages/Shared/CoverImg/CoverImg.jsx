import { Parallax } from "react-parallax";

const CoverImg = ({ img, coverTitle, children }) => {
  return (
    <div className="mb-8">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={`${img}`}
        bgImageAlt={coverTitle}
        strength={-200}
        bgStyle={{ objectFit: "cover" }}
      >
        <div className="hero h-[560px]">
          {" "}
          <div className="hero-content text-center text-neutral-content bg-black px-28 py-12 bg-opacity-50 rounded">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                {coverTitle}
              </h1>
              <p className="mb-5">{children}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default CoverImg;
