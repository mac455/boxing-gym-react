export default function Footer() {
  return (
    <footer className="box-border flex w-full flex-wrap bg-black p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
      <div className="mx-auto flex w-full max-w-[100rem] flex-col flex-wrap gap-8 md:flex-row md:justify-between md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
        <div className="mx-0 flex flex-col text-white sm:mx-4 md:mx-6 lg:mx-8">
          <h1 className="font-montserrat mb-3 text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Get in Touch
          </h1>
          <div className="flex items-center text-white">
            <svg
              className="mr-4 h-7 w-7 shrink-0 text-white sm:h-8 sm:w-8 md:mr-6 md:h-9 md:w-9 lg:h-10 lg:w-10 xl:h-11 xl:w-11 2xl:h-12 2xl:w-12"
              enableBackground="new 0 0 32 32"
              height="32"
              viewBox="0 0 32 32"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <g>
                <rect fill="none" height="32" width="32" />
              </g>
              <g className="fill-current">
                <path d="M0,4v24h15.518c1.614,2.411,4.361,3.999,7.482,4c3.12-0.001,5.867-1.589,7.481-4H32V4H0z M28.149,6l-12.151,9.719L3.851,6   H28.149z M2,25.999V7.081l13.563,10.85C14.578,19.375,14,21.119,14,23c0,1.054,0.19,2.06,0.522,2.999H2z M23,29.883   c-3.801-0.009-6.876-3.084-6.885-6.883c0.009-3.801,3.084-6.876,6.885-6.884c3.799,0.008,6.874,3.083,6.883,6.884   C29.874,26.799,26.799,29.874,23,29.883z M23,14c-0.657,0-1.296,0.075-1.913,0.208l8.912-7.127v10.267   C28.35,15.307,25.829,14,23,14z" />
                <polygon points="18,23 20,21 22,23 26,19 28,21 22,27" />
              </g>
            </svg>
            <h2 className="font-montserrat break-all text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              info@theinfantrygyms.com
            </h2>
          </div>
          <div className="mt-3 flex items-center sm:mt-4">
            <svg
              className="mr-4 h-7 w-7 shrink-0 text-white sm:h-8 sm:w-8 md:mr-6 md:h-9 md:w-9 lg:h-10 lg:w-10"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect className="fill-transparent" height="256" width="256" />
              <path
                d="M159.4,40A80.1,80.1,0,0,1,216,96.6"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M151.1,70.9a47.9,47.9,0,0,1,34,34"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <path
                d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <p className="font-montserrat text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
              0753 445 7845
            </p>
          </div>
        </div>
        <div className="mx-0 flex flex-col sm:mx-4 md:mx-6 lg:mx-8">
          <h1 className="font-montserrat text-xl font-semibold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Follow us online!
          </h1>
          <div className="social-icons mt-2 min-h-[1rem]" />
        </div>
      </div>
    </footer>
  )
}
