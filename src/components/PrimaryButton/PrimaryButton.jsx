const PrimaryButton = ({ children, clickHandler }) => {
  return (
    <button
      onClick={clickHandler && clickHandler}
      className=" border-b-2 border-gray-500 px-4 py-1 text-orange-600 bg-gray-100/60 hover:bg-gray-600 hover:text-white hover:border-orange-600 uppercase font-medium rounded"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
