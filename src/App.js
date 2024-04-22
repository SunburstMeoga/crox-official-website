import React, { useEffect, useState } from "react";

const App = () => {
  let [buttonAnimate, toggleButtonAnimate] = useState(false)
  let [tradAnimate, toggleTradAnimate] = useState(false)

  let handleScroll = () => {
    let scrollY = window.scrollY;
    // console.log(scrollY)
    console.log(scrollY)
    if (scrollY >= 744) {
      toggleButtonAnimate(buttonAnimate = true)
    } else if (scrollY < 744) {
      toggleButtonAnimate(buttonAnimate = false)
    }
    if (scrollY >= 1300) {
      toggleTradAnimate(tradAnimate = true)
    } else if (scrollY < 1300) {
      toggleTradAnimate(tradAnimate = false)
    }
  }
  useEffect(() => {
    console.log("222")
    window.addEventListener("scroll", handleScroll)
    handleScroll()
  })
  return (
    <div>
      {/* <div className="text-3xl font-bold underline text-red-500 lg:text-blue-500 xl:text-yellow-500 ">
        crox official website
      </div> */}
      <div className="bg-primary-green ">
        <div className="">
          <div className="animate__animated animate__fadeIn">
            <div className="w-full h-38-8 bg-primary-green relative border-t border-transparent lg:h-66-3 xl:h-auto">
              <div className="w-full relative h-full lg:absolute xl:relative ">
                <div className="w-full absolute xl:relative">
                  <img alt="" src="/images/mobile/top-bg.png" className="lg:hidden xl:hidden" />
                  <img alt="" src="/images/pad/top-bg.png" className="hidden lg:block xl:hidden"></img>
                  <img alt="" src="/images/pc/top-bg.png" className="hidden lg:hidden xl:block"></img>
                </div>
                <div className="mt-0-9 relative z-10 lg:mt-4-8 xl:mt-2-5 xl:absolute xl:top-0-1 xl:left-0-1">
                  <div className="w-15-8 lg:w-19-9">
                    <img alt="" src="/images/mobile/logo-word.png" className="lg:hidden xl:hidden"></img>
                    <img alt="" src="/images/pad/logo-word.png" className="hidden lg:block xl:hidden lg:ml-3-9"></img>
                    <img alt="" src="/images/pc/logo-word.png" className="hidden lg:hidden xl:block lg:ml-4-5"></img>
                  </div>
                </div>
                <div className="relative w-full xl:absolute xl:top-0-1">
                  <div className="w-23-3 mt-2-4 ml-1-1 font-3-9 flex flex-col justify-start lg:w-56-5 lg:mt-8-1 lg:ml-3-9 xl:w-66-9 xl:mt-6-2 " >
                    <div className="text-5-0 lg:text-12-8 lg:mt-1-0 xl:text-12-8 xl:mt-6-0">Ünlocking</div>
                    <div className="text-3-0 mt-0-8 lg:text-6-4 lg:mt-1-0 xl:text-8-8">the Future of </div>
                    <div className="text-3-0 mt-0-8 lg:text-6-4 lg:mt-1-0 xl:text-8-8">Inscriptions</div>
                  </div>
                  <div className="mt-8-6 w-full flex justify-center font-semibold text-1-2 lg:justify-start lg:mt-2-9 lg:w-40-0 lg:ml-4-2 lg:text-1-9 xl:text-1-5 xl:font-light xl:justify-end xl:w-full xl:ml-auto xl:-mt-1-0 ">
                    <div className="w-21-3 lg:w-40-0 xl:w-39-0 xl:mr-3-7 ">
                      Dive into the new era of trading with ease. Elevate your earnings in BTC and explore multi-chain inscriptions on our ultra-secure, decentralized platform—where transactions fly at the speed of light.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-module-black border-t border-transparent">
              <div className="flex flex-col items-end mt-3-6 lg:mt-8-0 xl:mt-15-6">
                <div className="text-title-gray w-20-8 font-black inline-block text-2-5 lg:w-56-6 lg:text-6-0 xl:w-11/12">Crox</div>
                <div className="w-20-8 border-b border-white mt-0-8 lg:w-56-6 lg:mt-1-7 xl:w-11/12 xl:mt-0-1"></div>
              </div>
              <div className="relative w-full mt-1-4">
                <div className="absolute left-0 top-0 w-full xl:w-10/12">
                  <img alt="" src="/images/mobile/seucrity.png" className="lg:hidden xl:hidden"></img>
                  <img alt="" src="/images/pad/seucrity.png" className="hidden lg:block lg:mt-10-0 xl:hidden"></img>
                  <img alt="" src="/images/pc/seucrity.png" className="hidden lg:hidden xl:block  xl:-mt-14-8"></img>
                </div>
                <div className="text-white font-black relative z-10 text-4-4  ml-1-4  lg:mt-1-7 lg:-ml-0-8 lg:text-12-5  xl" >
                  <div className="xl:hidden">
                    <div className="">The</div>
                    <div className="">Security</div>
                    <div className="-mt-0-6">pillar of</div>
                    <div className="mt-3-5 lg:mt-6-0">inscription</div>
                    <div className="">ecology</div>
                  </div>
                  <div className="hidden w-full text-8-7 -mt-1-2 xl:block title-shadow">
                    <div className="w-full flex justify-start items-center">The security pillar of </div>
                    <div className="w-full flex justify-end items-center mt-2-0">inscription ecology</div>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-1-2 lg:mt-4-4 xl:items-end xl:relative xl:z-10 xl:mt-0-6">
                  <div className="w-17-6 border-b border-white lg:w-44-2 xl:w-11/12"></div>
                </div>
              </div>
              <div className="w-full pb-3-9 lg:pb-12-0 xl:pb-6-6">
                <div className="w-full flex justify-center lg:justify-start xl:justify-end lg:pb-5-6 xl:pb-9-9 ">
                  <div className="mt-3-0 text-title-gray font-black w-18-2 mb-1-4 lg:text-1-5 lg:w-38-6 lg:ml-3-6 lg:mt-2-0 xl:relative xl:z-10 xl:text-1-2 xl:w-42-9 xl:mt-4-4 xl:mr-5-8">
                    Crox is a sub-chain of Hash Ahead, connected through a cross-chain bridge, providing secure, decentralized underlying support and a smoother transaction experience for inscription issuance.
                  </div>
                </div>
                <div className="ml-auto mr-auto w-18-2 text-title-black font-black text-1-3 lg:w-50-3 lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:text-2-0 lg:text-center  xl:relative xl:z-10 xl:w-11/12 xl:mt-10-9 social-item">
                  <div className={["mb-0-7 w-18-2 h-2-4 bg-primary-green  justify-center items-center lg:w-23-1 lg:h-6-3 lg:mb-1-1 lg:flex xl:flex xl:w-23-1 xl:h-6-6 xl:mb-0-1  button-active animate__animated", buttonAnimate ? 'animate__fadeIn flex' : 'hidden'].join(" ")}>Safety</div>
                  <div className={["mb-0-7 w-18-2 h-2-4 bg-primary-green  justify-center items-center lg:w-23-1 lg:h-6-3 lg:mb-1-1 lg:flex xl:flex xl:w-23-1 xl:h-6-6 xl:px-3-1 xl:mb-0-1 button-active animate__animated", buttonAnimate ? 'animate__backInLeft flex' : 'hidden'].join(" ")}>Cross-chain bridge</div>
                  <div className={["mb-0-7 w-18-2 h-2-4 bg-primary-green  justify-center items-center lg:w-23-1 lg:h-6-3 lg:mb-auto lg:px-3-1 lg:flex xl:flex xl:w-23-1 xl:h-6-6 xl:mb-0-1 button-active animate__animated ", buttonAnimate ? 'animate__backInRight flex' : 'hidden'].join(" ")}>Transaction speed is fast</div>
                  <div className={["w-18-2 h-2-4 bg-primary-green  justify-center items-center lg:w-23-1 lg:h-6-3 lg:mb-auto lg:flex xl:flex xl:w-23-1 xl:px-4-1 xl:mb-0-1 button-active animate__animated ", buttonAnimate ? 'animate__backInUp flex' : 'hidden'].join(" ")}>Decentraliz-ation</div>
                </div>
              </div>
            </div>

            <div className="w-full pb-2-8 bg-white border-t border-transparent lg:pb-3-3">
              <div className="w-full flex flex-col justify-center items-center -mt-0-1">
                <div className="w-0-2 h-3-7 bg-module-black lg:h-4-6 lg:w-0-4"></div>
                <div className="w-1-9 h-1-9 rounded-full bg-module-black lg:w-3-6 lg:h-3-6 "></div>
              </div>
              <div className="w-full font-black pb-0-4 text-center whitespace-nowrap overflow-hidden text-4-1 lg:text-10-6 lg:pb-0-8 xl:mt-2-2"> New Trading</div>
              <div className="w-full text-center font-black pb-0-4 text-4-0 lg:text-10-6 lg:pb-0-8 lg:-mt-1-9" >Model</div>
              <div className="mt-2-1 w-full flex flex-col justify-start items-center font-bold text-1-5 lg:text-4-0 xl:flex-row xl:w-11/12 xl:mr-auto xl:ml-auto xl:justify-evenly" >
                <div className="w-22-5 mb-0-8 lg:w-59-0 lg:mb-1-9 xl:flex-1 xl:mb-auto">
                  <div className="flex justify-between items-center xl:justify-evenly">
                    <div className="w-11-6 lg:w-30-7 xl:w-32-4">
                      <div className={["w-full mb-0-8 relative lg:mb-1-9 xl:h-32-4 xl:mb-1-9 animate__animated lg:block", tradAnimate ? 'animate__flipInY block' : 'hidden'].join(" ")}>
                        <img alt="" src="/images/mobile/trading-model-one.png" className="xl:hidden"></img>
                        <img alt="" src="/images/pc/trading-model-one.png" className="hidden lg:hidden xl:block"></img>
                        <div className="absolute w-full pl-0-5 bottom-2-1 text-white title-shadow lg:text-4-0 lg:pl-2-7 lg:bottom-3-0 xl:text-2-5 xl:pr-3-0" >
                          Flexible and convenient
                        </div>
                      </div>
                      <div className={["w-full relative xl:h-14-7 animate__animated lg:block", tradAnimate ? 'animate__flipInX block' : 'hidden'].join(" ")}>
                        <img alt="" src="/images/mobile/trading-model-three.png" className="xl:hidden"></img>
                        <img alt="" src="/images/pc/trading-model-three.png" className="hidden lg:hidden xl:block"></img>
                        <div className="absolute w-full pl-0-5 bottom-2-1 text-white title-shadow lg:pl-2-7 lg:bottom-3-0 xl:text-2-5" >
                          Low fees
                        </div>
                      </div>
                    </div>
                    <div className={["w-10-0 lg:w-26-4 xl:w-31-6 animate__animated lg:block", tradAnimate ? 'animate__flipInY block' : 'hidden'].join(" ")}>
                      <div className="w-full relative">
                        <img alt="" src="/images/mobile/trading-model-two.png" className="xl:hidden"></img>
                        <img alt="" src="/images/pc/trading-model-two.png" className="hidden lg:hidden xl:block"></img>
                        <div className="absolute w-full pl-0-5 bottom-2-1 text-white title-shadow lg:pl-2-7 lg:bottom-3-0 xl:text-4-0 xl:pr-3-0" >
                          Automatic order splitting and matching
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-5 flex justify-between items-center lg:w-59-0 xl:justify-start xl:items-center xl:flex-col-reverse xl:w-37-5">
                  <div className={["w-11-6 relative lg:w-30-7 xl:w-37-5 xl:h-32-5 animate__animated lg:block", tradAnimate ? 'animate__flipInX block' : 'hidden'].join(" ")}>
                    <img alt="" src="/images/mobile/trading-model-four.png" className="xl:hidden"></img>
                    <img alt="" src="/images/pc/trading-model-four.png" className="hidden lg:hidden xl:block"></img>
                    <div className="absolute w-full pl-0-5 bottom-2-1 text-white title-shadow lg:pl-2-7 lg:bottom-3-0 xl:text-2-5 xl:pr-4-0" >
                      Extremely fast transaction speed
                    </div>
                  </div>
                  <div className={["w-10-0 relative lg:w-26-4 xl:w-37-5 xl:h-14-8 xl:mb-1-7  animate__animated lg:block", tradAnimate ? 'animate__flipInX block' : 'hidden'].join(" ")}>
                    <img alt="" src="/images/mobile/trading-model-five.png" className="xl:hidden"></img>
                    <img alt="" src="/images/pc/trading-model-five.png" className="hidden lg:hidden xl:block"></img>
                    <div className="absolute w-full pl-0-5 bottom-2-1 text-white title-shadow lg:pl-2-4 lg:bottom-2-0 xl:text-2-5 xl:pr-8-0" >
                      No restrictions on entire transactions
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full relative border-t  border-transparent ">
              <div className="w-full absolute">
                <img alt="" src="/images/mobile/module-rights-bg.png" className="lg:hidden xl:hidden"></img>
                <img alt="" src="/images/pad/module-rights-bg.png" className="hidden lg:block xl:hidden"></img>
                <img alt="" src="/images/pc/module-rights-bg.png" className="hidden lg:hidden xl:block"></img>
              </div>
              <div className="w-full relative text-white z-10 -mt-1-3 -ml-0-7 lg:-mt-3-2 lg:-ml-1-6 xl:pl-1-1">
                <div className="xl:flex xl:justify-start">
                  <div className="font-black  text-9-2 lg:text-22-3">
                    <span className="text-black">U</span>ser
                  </div>
                  <div className="font-black text-spacing-9 overflow text-9-2 -mt-1-5 lg:text-22-3 lg:-mt-5-1 lg:text-spacing--9 xl:ml-2-4 xl:mt-0-1">
                    <span className="text-black">R</span>ights
                  </div>
                </div>
                <div className="xl:flex xl:justify-between xl:items-center xl:w-10/12 xl:mr-auto xl:ml-auto xl:mt-7-8 xl:pb-14-4">
                  <div className="w-20-4 flex flex-col justify-start items-start mt-3-5 mx-auto lg:w-54-0 lg:mt-7-4 xl:mt-0-1 xl:items-center">
                    <div className="w-10-9 lg:w-19-7 xl:w-15-6">
                      <img alt="" src="/images/mobile/become-icon.png"></img>
                    </div>
                    <div className="font-black  text-title-black mt-1-5 text-3-0 lg:text-6-0 lg:mt-2-7 xl:mt-7-8 xl:text-4-0 xl:w-27-1">
                      Become a verification node
                    </div>
                    <div className="font-bold text-black mt-2-3 text-1-5 lg:text-2-3 lg:mt-3-8 xl:text-1-2 xl:w-25-5">
                      Users holding CROX inscriptions will have the opportunity to become verification nodes and participate in the security maintenance and consensus mechanism of the public chain network.
                    </div>
                  </div>

                  <div className="w-20-4 flex flex-col justify-start items-start mt-4-0 mx-auto lg:w-54-0 lg:mt-7-4 xl:mt-0-1 xl:items-center">
                    <div className="w-10-9 lg:w-19-7 xl:w-15-6">
                      <img alt="" src="/images/mobile/point-icon.png"></img>
                    </div>
                    <div className="font-black  text-title-black mt-1-5 text-3-0 lg:text-6-0 lg:mt-4-6 xl:mt-3-3 xl:text-4-0 xl:w-29-4">
                      Participating exchange fee sharing
                    </div>
                    <div className="font-bold text-black mt-2-3 text-1-5 lg:text-2-3 lg:mt-3-8 xl:text-1-2 xl:w-26-8">
                      Participating in exchange fee sharing, users holding CROX inscriptions can share the fee income generated by the exchange and gain profits from it.
                    </div>
                  </div>

                  <div className="w-20-4 flex flex-col justify-start items-start mt-4-0 mb-2-3 mx-auto lg:w-54-0 lg:mt-7-4 xl:mt-0-1 xl:w-31-0 xl:items-center">
                    <div className="w-10-9 lg:w-19-7 xl:w-15-6">
                      <img alt="" src="/images/mobile/hook-icon.png"></img>
                    </div>
                    <div className="font-black text-title-black mt-1-5 text-3-0 lg:text-6-0 lg:mt-4-6 xl:mt-7-8 xl:text-4-0 xl:w-31-0">
                      Cross-chain bridge handling fee sharing
                    </div>
                    <div className="font-bold text-black mt-2-3 text-1-5 lg:text-2-3 lg:mt-3-8 xl:text-1-2 xl:w-24-1">
                      Cross-chain bridge handling fee sharing, users holding CROX inscriptions can also obtain additional income through cross-chain bridge transaction fee sharing.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full bg-module-black relative z-20 border-t border-transparent" >
              <div className="font-black text-primary-green tracking-tight -ml-0-4 text-6-0 -mt-0-9 lg:text-13-4 lg:-mt-2-0 lg:-ml-0-9 xl:pl-9-7 xl:text-18-7 xl:-mt-2-9">
                Product
              </div>
              <div className="font-black text-primary-green tracking-tight overflow -ml-0-4 text-5-5 -mt-0-9 lg:text-13-4 lg:-mt-2-6 lg:-ml-0-9 xl:pl-9-7 xl:text-18-7">
                Roadmap
              </div>
              <div className="mt-5-4 w-full flex flex-col justify-start items-center lg:mt-2-3 relative xl:mt-7-8">
                <div className="w-22-6 lg:w-54-7 xl:w-98-5">
                  <div className="w-full flex justify-start items-start">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">1</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9 xl:w-80-5">
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Issuance inscription on Bitcoin</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Inscription was successfully issued to the Bitcoin network to ensure its security and reliability, laying the foundation for the construction of the Inscription ecology.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-6 mt-2-0 lg:w-54-7 lg:mt-4-6 xl:w-98-5">
                  <div className="w-full flex justify-start items-start ">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">2</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9  xl:w-80-5">
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Complete the public chain test and implement the inscription index backend function</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Ensure chain stability and efficient inscription management
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-6 mt-2-0 lg:w-54-7 lg:mt-4-6 xl:w-98-5">
                  <div className="w-full flex justify-start items-start ">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">3</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9  xl:w-80-5" >
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Complete inscription online</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Realize the launch of inscriptions on CroxChain, including the issuance, management and trading of inscriptions, laying a solid foundation for the development of the inscription ecology
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-6 mt-2-0 lg:w-54-7 lg:mt-4-6 xl:w-98-5">
                  <div className="w-full flex justify-start items-start ">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">4</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9  xl:w-80-5">
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Online inscription browser</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Allows users to easily view and track information related to inscriptions, improving user experience and usability.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-6 mt-2-0 lg:w-54-7 lg:mt-4-6 xl:w-98-5">
                  <div className="w-full flex justify-start items-start ">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">5</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9  xl:w-80-5">
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Completed the launch of the cross-chain bridge function</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Enables users to easily transfer inscriptions between different chains and promotes cross-chain interoperability of the inscription ecology
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-22-6 mt-2-0 pb-3-8 lg:w-54-7 lg:mt-4-6 lg:pb-6-3 xl:w-98-5">
                  <div className="w-full flex justify-start items-start ">
                    <div className="w-2-9 h-2-9 bg-border-green p-0-5 rounded-full shadow-xl mt-1-5 lg:w-10-0 lg:h-10-0 lg:p-1-0 lg:mt-3-6 xl:w-10-0 xl:h-10-0 xl:p-1-1">
                      <div className="w-full h-full rounded-full bg-primary-green text-black flex justify-center items-center font-black text-2-0 lg:text-4-0">6</div>
                    </div>
                    <div className="w-18-0 ml-1-8 lg:w-39-3 lg:ml-1-9  xl:w-80-5">
                      <div className="w-full bg-gradient-gray h-0-1"></div>
                      <div className="text-white mt-1-5 font-black text-2-0 lg:text-4-0 lg:mt-4-7">Online trading market</div>
                      <div className="text-word-gray mt-1-6 text-1-2 lg:text-2-5 lg:mt-3-1">
                        Provide users with a safe and efficient trading platform, promote the circulation and trading of inscriptions, and promote the development and prosperity of the entire ecosystem
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="py-10 w-full flex flex-col items-center justify-center xl:hidden">
          <div className="w-11/12 flex flex-col items-center justify-start mt-1-2">
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-2-2 social-item">
              <div className="">
                API
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-3-2 social-item">
              <div>
                Developer services
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-3-2 social-item">
              <div>
                Legal Disclaimer
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-3-2 social-item">
              <div>
                Privacy Policy
              </div>
            </div>
            <div className="flex items-center justify-between font-semibold text-lg w-full mb-3-2 social-item">
              <div>
                Terms of Service
              </div>
            </div>
          </div>
          <div className="font-black text-xl w-11/12 mb-6 mb-3-1">
            Follow us
          </div>
          <div className="w-11/12 block  items-center justify-between lg:flex">
            <div className="flex  items-center font-bold justify-between text-sm mb-3-5 lg:flex-col social-item">
              <div className="icon iconfont icon-github mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                GitHub
              </div>
            </div>
            <div className="flex items-center font-bold justify-between text-sm mb-3-5 lg:flex-col social-item">
              <div className="icon iconfont icon-gitbook mb-2" style={{ fontSize: '24px' }}>
              </div>
              <div>
                Gitbook
              </div>
            </div>
            <div className="flex items-center font-bold justify-between text-sm mb-3-5 lg:flex-col social-item">
              <div className="icon iconfont icon-discord mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Discord
              </div>
            </div>
            <div className="flex  items-center font-bold justify-between text-sm mb-3-5 lg:flex-col social-item">
              <div className="icon iconfont icon-twitter mb-2" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Twitter
              </div>
            </div>
          </div>
        </div>

        <div className="py-5-2 w-full flex-col items-center justify-center hidden lg:hidden xl:flex">

          <div className="w-11/12 flex items-center justify-end mb-4">
            <div className="flex flex-col items-center justify-between text-sm mb-2-2 mr-1-3 cursor-pointer social-item">
              <div className="icon iconfont icon-github mb-0-7" style={{ fontSize: '28px' }}>
              </div>
              <div>
                GitHub
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2-2 mr-1-3 cursor-pointer social-item">
              <div className="icon iconfont icon-gitbook mb-0-7" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Gitbook
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2-2 mr-1-3 cursor-pointer social-item">
              <div className="icon iconfont icon-discord mb-0-7" style={{ fontSize: '28px' }}>
              </div>
              <div>
                Discord
              </div>
            </div>
            <div className="flex flex-col items-center justify-between text-sm mb-2-2 mr-1-3 cursor-pointer social-item">
              <div className="icon iconfont icon-twitter mb-0-7" style={{ fontSize: '28px' }}>
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