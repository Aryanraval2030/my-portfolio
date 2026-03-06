function Card() {
  return (
    <div className="px-7 flex gap-4">
      <div className="h-[85vh] w-[50vw]">
        <div className="bg-red-600 h-[70%] py-5">
          <img src="" alt="rendom img" />
        </div>
        <div className="bg-blue-900  h-[30%] py-5 pl-2">
          <button className="bg-[#58a6ff] px-[20px] py-[10px] rounded-lg ">
            live project
          </button>
        </div>
      </div>

        <div className="h-[85vh] w-[50vw]">
        <div className="bg-red-600 h-[70%] py-5">
          <img src="" alt="rendom img" />
        </div>
        <div className="bg-blue-900  h-[30%] py-5 pl-2">
          <button className="bg-[#58a6ff] px-[20px] py-[10px] rounded-lg ">
            live project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
