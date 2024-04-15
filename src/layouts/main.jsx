const Main = () => {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex max-w-[100vw] justify-center overflow-hidden">
          <div className="main-layout">
            <div className="flex w-full flex-col justify-center opacity-100">
              <div className="mt-[-96px] flex w-full flex-col items-center gap-10 pb-[98px]">
                <div className="slider-wrapper">
                  {/*background*/}
                  <div className="absolute h-full w-screen">
                    <img
                      src="./assets/img/banner-bg-1_2x.webp"
                      className="h-full w-full object-cover text-transparent"
                      alt=""
                    />
                    <div className="h-full w-full mix-blend-luminosity">
                      <img
                        src="./assets/img/bg-slider-1.jpg"
                        className="absolute left-0 top-0 h-full w-full object-cover text-transparent opacity-100"
                        alt=""
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 h-35-custom w-full bg-gradient-to-t"></div>
                  </div>
                  {/*slider*/}
                  <div className="absolute left-0 top-0 flex h-full w-full justify-center pt-24">
                    <div className="flex h-full w-full flex-col items-center gap-6 px-0 py-[35px]">
                      <div className="bg-slider">
                        <img
                          src="./assets/img/bg-slider-1.jpg"
                          className="absolute h-full w-full rounded-[20px] object-cover text-transparent opacity-100"
                          alt=""
                        />
                        <div className="absolute bottom-0 left-0 h-1/2 w-full rounded-custom bg-custom-gradient"></div>
                        <div className="h-full w-full">
                          <div className="z-3 absolute left-0 top-0 flex h-[95%] w-full flex-col items-center justify-end gap-2 opacity-100">
                            <div className="h-16 w-[227px]">
                              <img
                                src="./assets/img/logo-slider-1.png"
                                className="h-full w-full rounded-lg object-contain text-transparent"
                                alt=""
                              />
                            </div>
                            <p className="desc-slider">
                              DDTank series games have developed continuously,
                              constantly providing more interesting, friendlier
                              and more convenient online experience for global
                              competition enthusiasts all along.
                            </p>
                            <div className="z-[1]">
                              <a
                                className="no-underline"
                                href="#"
                                target="_blank"
                              >
                                <button
                                  className="relative m-0 box-border inline-block h-[46px] min-w-16 cursor-pointer select-none items-center justify-center rounded bg-white px-5 py-3 text-base normal-case no-underline outline-0 transition-all duration-200 ease-linear hover:scale-105 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                  tabIndex={0}
                                  type="button"
                                  data-ripple-light="true"
                                >
                                  <p className="m-0 text-sm font-bold text-[#f05c22]">
                                    See More
                                  </p>
                                  <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                                </button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
