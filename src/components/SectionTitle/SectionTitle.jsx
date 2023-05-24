const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center space-y-2 mt-16 mb-4">
      <p className="text-orange-600 italic">--- {subHeading} ---</p>
      <p className="text-3xl font-semibold uppercase border-y-4 md:w-4/12 mx-auto py-3">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
