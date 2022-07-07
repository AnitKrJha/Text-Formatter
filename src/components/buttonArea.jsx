function ButtonsArea({ setText, setLines, setChar }) {
  function Upper(e) {
    setText((x) => {
      x = x.toUpperCase();
      return x;
    });
  }

  function RemSpace(e) {
    setText((x) => {
      while(x.includes("  "))
      x = x.replace("  ", " ");
      setChar((y) => x.length);
      return x;
    });
  }
  function SingleLine(){
    setText((x)=>{
        console.log(x);
        while(x.includes('\n'))
        x=x.replace('\n'," ");
        setLines((y)=> x.split("\n").length)
        return x;
    })
  }
  return (
    <>
      <div className="w-full flex bg-gray-200">
        <div className="container mx-auto p-2">
          <div className="buttons w-full flex flex-wrap justify-evenly gap-4">
            <button
              onClick={Upper}
              className="bg-slate-700 text-center text-white uppercase p-1 rounded-md f_buttons"
            >
              upperCase
            </button>
            <button
              onClick={RemSpace}
              className="bg-slate-700 text-center text-white uppercase p-1 rounded-md f_buttons"
            >
              Remove Space
            </button>
            <button
              onClick={SingleLine}
              className="bg-slate-700 text-center text-white uppercase p-1 rounded-md f_buttons"
            >
              Single Line
            </button>
            {/* <button className="bg-slate-700 text-center text-white uppercase p-1 rounded-md f_buttons">
              bro
            </button>
            <button className="bg-slate-700 text-center text-white uppercase p-1 rounded-md f_buttons">
              send
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default ButtonsArea;
