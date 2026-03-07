function Card() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Project 1 */}
      <div className="h-[60vh] md:h-[85vh] w-full md:w-[50vw]">
        <div className="bg-red-600 h-[70%] flex items-center justify-center">
          <img src="" alt="random img" className="w-full h-full object-cover" />
        </div>

        <div className="bg-blue-900 h-[30%] py-5 pl-2 flex items-center">
          <button className="bg-[#58a6ff] px-[20px] py-[10px] rounded-lg">
            live project
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div className="h-[60vh] md:h-[85vh] w-full md:w-[50vw]">
        <div className="bg-red-600 h-[70%] flex items-center justify-center">
          <img src="" alt="random img" className="w-full h-full object-cover" />
        </div>

        <div className="bg-blue-900 h-[30%] py-5 pl-2 flex items-center">
          <button className="bg-[#58a6ff] px-[20px] py-[10px] rounded-lg">
            live project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
