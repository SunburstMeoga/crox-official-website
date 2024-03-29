import React from "react";

const App = () => {
  return (
    // <div className="text-3xl font-bold underline text-red-400 lg:text-blue-500 2xl:text-yellow-500 ">
    //   crox official website
    // </div>
    <div className="">
      <div className="w-full bg-primary-green relative pb-20">
        <div className="absolute w-full z-auto top-0 left-0">
          <img alt="" src="/images/phone-banner.png"></img>
        </div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="w-11/12 pt-6">
            <div className="w-60">
              <img className="" src="/images/logo.png"></img>
            </div>
          </div>
          <div className="text-word-black w-11/12 border border-red-500 text-bold text-5xl">
            <div >Unlocking</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App