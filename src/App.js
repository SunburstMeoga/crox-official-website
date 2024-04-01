import React from "react";

const App = () => {
  return (
    <div>
      {/* <div className="text-3xl font-bold underline text-red-500 lg:text-blue-500 xl:text-yellow-500 ">
        crox official website
      </div> */}
      <div className="bg-primary-green ">

        <div className="pb-10">
          <div className="lg:hidden xl:hidden">
            <img alt="" src="/images/phone-banner.png"></img>
          </div>
          <div className="hidden lg:block xl:hidden">
            <img alt="" src="/images/pad-banner.png"></img>
          </div>
          <div className="hidden lg:hidden xl:block">
            <img alt="" src="/images/pc-banner.png"></img>
          </div>
        </div>

        <div className="">
          <div className="lg:hidden xl:hidden">
            <img alt="" src="/images/crox-phone.png"></img>
          </div>
          <div className="hidden lg:block xl:hidden">
            <img alt="" src="/images/crox-pad.png"></img>
          </div>
          <div className="hidden lg:hidden xl:block">
            <img alt="" src="/images/crox-pc.png"></img>
          </div>
        </div>

        <div className="">
          <div className="lg:hidden xl:hidden">
            <img alt="" src="/images/new-trading-phone.png"></img>
          </div>
          <div className="hidden lg:block xl:hidden">
            <img alt="" src="/images/new-trading-pad.png"></img>
          </div>
          <div className="hidden lg:hidden xl:block">
            <img alt="" src="/images/new-trading-pc.png"></img>
          </div>
        </div>

        <div className="">
          <div className="lg:hidden xl:hidden">
            <img alt="" src="/images/user-righits-phone.png"></img>
          </div>
          <div className="hidden lg:block xl:hidden">
            <img alt="" src="/images/user-righits-pad.png"></img>
          </div>
          <div className="hidden lg:hidden xl:block">
            <img alt="" src="/images/user-righits-pc.png"></img>
          </div>

        </div>

        <div className="">
          <div className="lg:hidden xl:hidden">
            <img alt="" src="/images/product-roadmap-phone.png"></img>
          </div>
          <div className="hidden lg:block xl:hidden">
            <img alt="" src="/images/product-roadmap-pad.png"></img>
          </div>
          <div className="hidden lg:hidden xl:block">
            <img alt="" src="/images/product-roadmap-pad.png"></img>
          </div>

        </div>

        <div className="py-10 w-full flex flex-col items-center justify-center xl:hidden">
          <div className="w-11/12 flex flex-col items-center justify-start ">
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2">
              <div>
                API
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2">
              <div>
                Developer services
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2">
              <div>
                Legal Disclaimer
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2">
              <div>
                Privacy Policy
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2">
              <div>
                Terms of Service
              </div>
            </div>
          </div>
          <div className="font-bold text-xl w-11/12 mb-6 mt-14">
            Follow us
          </div>
          <div className="w-11/12 block  items-center justify-between lg:flex">
            <div className="flex  items-center font-bold justify-between text-sm mb-8 lg:flex-col">
              <div className="icon iconfont icon-github mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                GitHub
              </div>
            </div>
            <div className="flex items-center font-bold justify-between text-sm mb-8 lg:flex-col">
              <div className="icon iconfont icon-gitbook mb-2" style={{ fontSize: '24px' }}>
              </div>
              <div>
                Gitbook
              </div>
            </div>
            <div className="flex items-center font-bold justify-between text-sm mb-8 lg:flex-col">
              <div className="icon iconfont icon-discord mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Discord
              </div>
            </div>
            <div className="flex  items-center font-bold justify-between text-sm mb-8 lg:flex-col">
              <div className="icon iconfont icon-twitter mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Twitter
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 w-full flex-col items-center justify-center hidden xl:flex">

          <div className="w-11/12 flex items-center justify-end mb-4">
            <div className="flex flex-col items-center justify-between text-sm mb-2 mr-6 cursor-pointer social-item">
              <div className="icon iconfont icon-github mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                GitHub
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2 mr-6 cursor-pointer social-item">
              <div className="icon iconfont icon-gitbook mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Gitbook
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2 mr-6 cursor-pointer social-item">
              <div className="icon iconfont icon-discord mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Discord
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2 mr-6 cursor-pointer social-item">
              <div className="icon iconfont icon-twitter mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Twitter
              </div>
            </div>
          </div>


          <div className="w-6/12 flex items-center justify-between font-medium">
            <div className="flex items-center justify-between cursor-pointer social-item">
              <div>
                API
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer social-item">
              <div>
                Developer services
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer social-item">
              <div>
                Legal Disclaimer
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer social-item">
              <div>
                Privacy Policy
              </div>
            </div>
            <div className="flex items-center justify-between cursor-pointer social-item">
              <div>
                Terms of Service
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App