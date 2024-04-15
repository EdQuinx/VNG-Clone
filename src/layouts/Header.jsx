const Header = () => {
  return (
    <>
      <div className="relative">
        <div className="h-24"></div>
        <div className="header-wrapper">
          <div className="header-service-wrapper">
            <div className="nav-items-wrapper">
              <div className="service-items">
                <a
                  href="#"
                  target="_blank"
                  className="service-item-a"
                  aria-labelledby="Account Center"
                >
                  <button
                    id="account-center-btn"
                    className="relative m-0 box-border h-[20px] w-[20px] shrink-0 flex-grow-0 basis-0 cursor-pointer items-center justify-center overflow-visible border-0 bg-[transperent] p-0 text-[1.5rem] text-[rgba(0,_0,_0,_0.54)] no-underline outline-0"
                    tabIndex={0}
                    type="button"
                    aria-label="Account Center"
                  >
                    <svg
                      className="svg-header"
                      fill="none"
                      strokeWidth={1.5}
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                  </button>
                  <p className="s-item-p">Account</p>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="service-item-a"
                  aria-labelledby="Fanpage"
                >
                  <button
                    id="account-center-btn"
                    className="relative m-0 box-border h-[20px] w-[20px] shrink-0 flex-grow-0 basis-0 cursor-pointer items-center justify-center overflow-visible border-0 bg-[transperent] p-0 text-[1.5rem] text-[rgba(0,_0,_0,_0.54)] no-underline outline-0"
                    tabIndex={0}
                    type="button"
                    aria-label="Fanpage"
                  >
                    <svg
                      className="svg-header"
                      fill="none"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                      />
                    </svg>
                    <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                  </button>
                  <p className="s-item-p">Fanpage</p>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="service-item-a"
                  aria-labelledby="Discord"
                >
                  <button
                    id="account-center-btn"
                    className="relative m-0 box-border h-[20px] w-[20px] shrink-0 flex-grow-0 basis-0 cursor-pointer items-center justify-center overflow-visible border-0 bg-[transperent] p-0 text-[1.5rem] text-[rgba(0,_0,_0,_0.54)] no-underline outline-0"
                    tabIndex={0}
                    type="button"
                    aria-label="Discord"
                  >
                    <svg
                      className="svg-header"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.317 4.4921C18.7873 3.80147 17.147 3.29265 15.4319 3.00122C15.4007 2.9956 15.3695 3.00965 15.3534 3.03777C15.1424 3.40697 14.9087 3.88862 14.7451 4.26719C12.9004 3.99545 11.0652 3.99545 9.25832 4.26719C9.09465 3.8802 8.85248 3.40697 8.64057 3.03777C8.62449 3.01059 8.59328 2.99654 8.56205 3.00122C6.84791 3.29172 5.20756 3.80054 3.67693 4.4921C3.66368 4.49772 3.65233 4.5071 3.64479 4.51928C0.533392 9.09311 -0.31895 13.5545 0.0991801 17.9606C0.101072 17.9822 0.11337 18.0028 0.130398 18.0159C2.18321 19.4993 4.17171 20.3998 6.12328 20.9967C6.15451 21.0061 6.18761 20.9949 6.20748 20.9695C6.66913 20.3492 7.08064 19.6952 7.43348 19.0073C7.4543 18.967 7.43442 18.9192 7.39186 18.9033C6.73913 18.6597 6.1176 18.3626 5.51973 18.0253C5.47244 17.9981 5.46865 17.9316 5.51216 17.8997C5.63797 17.8069 5.76382 17.7104 5.88396 17.613C5.90569 17.5952 5.93598 17.5914 5.96153 17.6026C9.88928 19.3672 14.1415 19.3672 18.023 17.6026C18.0485 17.5905 18.0788 17.5942 18.1015 17.612C18.2216 17.7095 18.3475 17.8069 18.4742 17.8997C18.5177 17.9316 18.5149 17.9981 18.4676 18.0253C17.8697 18.3692 17.2482 18.6597 16.5945 18.9024C16.552 18.9183 16.533 18.967 16.5538 19.0073C16.9143 19.6942 17.3258 20.3483 17.7789 20.9686C17.7978 20.9949 17.8319 21.0061 17.8631 20.9967C19.8241 20.3998 21.8126 19.4993 23.8654 18.0159C23.8834 18.0028 23.8948 17.9831 23.8967 17.9616C24.3971 12.8676 23.0585 8.4428 20.3482 4.52021C20.3416 4.5071 20.3303 4.49772 20.317 4.4921ZM8.02002 15.2778C6.8375 15.2778 5.86313 14.2095 5.86313 12.8976C5.86313 11.5857 6.8186 10.5175 8.02002 10.5175C9.23087 10.5175 10.1958 11.5951 10.1769 12.8976C10.1769 14.2095 9.22141 15.2778 8.02002 15.2778ZM15.9947 15.2778C14.8123 15.2778 13.8379 14.2095 13.8379 12.8976C13.8379 11.5857 14.7933 10.5175 15.9947 10.5175C17.2056 10.5175 18.1705 11.5951 18.1516 12.8976C18.1516 14.2095 17.2056 15.2778 15.9947 15.2778Z"
                      />
                    </svg>

                    <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                  </button>
                  <p className="s-item-p">Discord</p>
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="service-item-a"
                  aria-labelledby="Support Service"
                >
                  <button
                    id="account-center-btn"
                    className="relative m-0 box-border h-[20px] w-[20px] shrink-0 flex-grow-0 basis-0 cursor-pointer items-center justify-center overflow-visible border-0 bg-[transperent] p-0 text-[1.5rem] text-[rgba(0,_0,_0,_0.54)] no-underline outline-0"
                    tabIndex={0}
                    type="button"
                    aria-label="Support Service"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="svg-header"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                      />
                    </svg>
                    <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                  </button>
                  <p className="s-item-p">Support</p>
                </a>
              </div>
            </div>
          </div>
          <div className="nav-items-wrapper">
            <div className="toolbar-root toolbar-items">
              <div className="flex items-center">
                <div className="logo-header-wrapper">
                  <div className="absolute left-0 top-0 z-[-1] flex h-full w-auto items-center">
                    <h1 className="h1-style">DDTank1</h1>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-ctWhite">
                      <div className="flex h-full items-center">
                        <a href="#" target="_self" className="flex">
                          <div className="logo-img-wrap">
                            <img
                              className="h-full w-full object-contain text-[transperent]"
                              src="./assets/img/logo.webp"
                              alt="DDTank1"
                            />
                          </div>
                        </a>
                      </div>
                    </div>
                    <div className="dot-language"></div>
                    <div className="language">
                      <div className="">
                        <button
                          className="btn-language"
                          type="button"
                          tabIndex={0}
                        >
                          <svg
                            className="svg-language"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#6E625E"
                          >
                            <path
                              d="M12.3812 22C17.9041 22 22.3812 17.5228 22.3812 12C22.3812 6.47715 17.9041 2 12.3812 2C6.85838 2 2.38123 6.47715 2.38123 12C2.38123 17.5228 6.85838 22 12.3812 22Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M8.3812 3H9.3812C7.4312 8.84 7.4312 15.16 9.3812 21H8.3812"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M15.3812 3C17.3312 8.84 17.3312 15.16 15.3812 21"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M3.38123 16V15C9.22123 16.95 15.5412 16.95 21.3812 15V16"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                            <path
                              d="M3.38123 9.0001C9.22123 7.0501 15.5412 7.0501 21.3812 9.0001"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                          <p className="text-language">EN</p>
                          <span className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-items">
                <div className="flex">
                  <div className="nav-box">
                    <a href="#" target="_self" className="no-underline">
                      <div className="flex cursor-pointer items-center text-[16px] capitalize leading-[32px] text-[#605653] no-underline hover:text-[#f05c22] active:font-bold">
                        Home
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="nav-box">
                    <a href="#" target="_self" className="no-underline">
                      <div className="flex cursor-pointer items-center text-[16px] capitalize leading-[32px] text-[#605653] no-underline hover:text-[#f05c22] active:font-bold">
                        News
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex">
                  <div className="nav-box">
                    <a href="#" target="_self" className="no-underline">
                      <div className="flex cursor-pointer items-center text-[16px] capitalize leading-[32px] text-[#605653] no-underline hover:text-[#f05c22] active:font-bold">
                        Guides
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="block">
                <button className="btn-login">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
