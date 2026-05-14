import boxing_class from '../../assets/images/boxing_class (1).webp'
import boxing_training from '../../assets/images/boxing_training (1).webp'
import { Link } from 'react-router-dom'

const quoteIconClass =
  'h-8 w-8 shrink-0 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16 3xl:h-20 3xl:w-20 4xl:h-24 4xl:w-24 5xl:h-28 5xl:w-28'

export default function body() {
  return (
    <div className="w-full">
      <div className="flex justify-center px-3 pt-6 sm:px-4 sm:pt-8 md:px-6 md:pt-10 lg:px-8 lg:pt-12 xl:px-12 xl:pt-14 2xl:px-16 3xl:px-20 3xl:pt-16 4xl:px-24 5xl:px-28">
        <div className="flex flex-col items-center">
          <h1 className="font-saira text-4xl font-extrabold uppercase text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl 3xl:text-[10rem] 4xl:text-[11rem] 5xl:text-[12rem]">
            Our offer
          </h1>
        </div>
      </div>

      <div className="mx-auto flex max-w-[100rem] flex-wrap justify-center gap-4 px-3 py-6 sm:gap-5 sm:px-4 sm:py-8 md:gap-6 md:px-6 lg:gap-8 lg:px-8 lg:py-10 xl:gap-10 xl:px-12 2xl:gap-12 2xl:px-16 3xl:max-w-[min(120rem,96vw)] 3xl:gap-14 3xl:px-20 4xl:max-w-[min(140rem,96vw)] 4xl:gap-16 4xl:px-24 5xl:max-w-[min(160rem,96vw)] 5xl:gap-20 5xl:px-28">
        {[
          { id: 'card-1', title: '12 month saver', text: 'Explore our ultra 12 month saver' },
          { id: 'card-2', title: '6 month deal', text: 'Join us for a 6-month special!' },
          { id: 'card-3', title: 'Monthly rolling', text: 'Join us on a monthly basis' },
          { id: 'card-4', title: 'Student deals', text: 'Explore our student deals' },
        ].map(({ id, title, text }) => (
          <Link key={id} to="/SignUp" className="min-w-[10rem] max-w-[22rem] flex-1 basis-[85%] no-underline sm:basis-[45%] md:basis-[40%] lg:basis-[22%] lg:min-w-[12rem] xl:max-w-[24rem] 2xl:max-w-[26rem]">
            <div
              id={id}
              className="font-saira flex cursor-pointer flex-col rounded-3xl bg-[rgb(33,37,40)] p-4 text-center text-sm font-semibold capitalize shadow-md transition-colors hover:bg-red-600 hover:opacity-80 sm:p-5 sm:text-base md:p-6 md:text-lg lg:p-7 lg:text-xl xl:p-8 xl:text-2xl 2xl:p-9 2xl:text-[1.35rem] 3xl:p-10 3xl:text-2xl 4xl:p-12 4xl:text-[2.25rem] 5xl:p-14 5xl:text-[2.5rem]"
            >
              <h1 className="mt-0 text-white">{title}</h1>
              <p className="mt-1 text-white sm:mt-2 sm:text-xl md:text-2xl lg:text-[1.65rem] xl:text-3xl 2xl:text-[2rem] 3xl:text-3xl 4xl:text-4xl 5xl:text-[2.75rem]">
                {text}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div
        className="relative z-[1] flex min-h-screen w-full flex-col gap-8 bg-white bg-cover bg-center bg-no-repeat px-4 pb-24 pt-10 before:absolute before:inset-0 before:z-[1] before:bg-black/40 before:content-[''] sm:gap-10 sm:px-5 sm:pb-28 sm:pt-12 md:gap-12 md:px-8 md:pb-32 lg:flex-row lg:items-start lg:justify-between lg:gap-14 lg:px-10 lg:pt-16 xl:gap-16 xl:px-14 xl:pb-36 2xl:mx-auto 2xl:max-w-[min(160rem,98vw)] 2xl:gap-20 2xl:px-20 2xl:pb-40 3xl:gap-24 3xl:px-24 4xl:gap-28 4xl:px-28 5xl:gap-32 5xl:px-32"
        style={{ backgroundImage: "url('/free_gym_pic.webp')" }}
      >
        <h1 className="font-saira relative z-[2] w-full max-w-full text-3xl font-semibold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:max-w-[48%] lg:text-6xl xl:text-7xl 2xl:max-w-[45%] 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]">
          Have a look <br />
          inside !
        </h1>
        <div className="font-saira relative z-[2] w-full max-w-full text-sm font-bold text-cream sm:text-base md:text-lg lg:w-[38%] lg:max-w-xl lg:self-center xl:w-[32%] xl:max-w-2xl xl:text-xl 2xl:w-[30%] 2xl:max-w-3xl 2xl:text-2xl 3xl:max-w-4xl 3xl:text-3xl 4xl:max-w-5xl 4xl:text-4xl 5xl:max-w-6xl 5xl:text-[2.65rem]">
          <svg
            className={`${quoteIconClass} mb-2`}
            height="48"
            version="1.1"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g transform="translate(-407.000000, -9.000000)">
                <path
                  d="M448.6211,37.1646 C448.3691,36.3886 447.9321,35.6776 447.3241,35.0346 C446.6871,34.3626 445.8501,33.8426 444.8121,33.4666 C443.7731,33.0936 442.4391,32.9046 440.7951,32.9046 L438.5641,32.9046 C438.8301,30.1586 439.8081,27.8216 441.5001,25.8896 C443.1891,23.9636 445.5311,22.2686 448.5251,20.8146 L446.7091,18.0006 C442.7671,19.6796 439.3941,22.1356 436.5921,25.3796 C433.7911,28.6266 432.3961,31.8436 432.3961,35.0346 C432.3961,38.4626 433.2051,41.1516 434.8361,43.0926 C436.4671,45.0336 438.8031,46.0006 441.8401,46.0006 C443.7671,46.0006 445.4411,45.3576 446.8651,44.0726 C448.2871,42.7896 449.0001,41.2866 449.0001,39.5726 C449.0001,38.7456 448.8751,37.9406 448.6211,37.1646 M428.2251,37.1646 C427.9711,36.3886 427.5351,35.6776 426.9261,35.0346 C426.2911,34.3626 425.4531,33.8426 424.4141,33.4666 C423.3771,33.0936 422.0431,32.9046 420.3981,32.9046 L418.1661,32.9046 C418.4331,30.1586 419.4101,27.8216 421.1011,25.8896 C422.7911,23.9636 425.1351,22.2686 428.1271,20.8146 L426.3121,18.0006 C422.3691,19.6796 418.9981,22.1356 416.1951,25.3796 C413.3941,28.6266 412.0001,31.8436 412.0001,35.0346 C412.0001,38.4626 412.8071,41.1516 414.4391,43.0926 C416.0681,45.0336 418.4041,46.0006 421.4431,46.0006 C423.3691,46.0006 425.0451,45.3576 426.4691,44.0726 C427.8911,42.7896 428.6031,41.2866 428.6031,39.5726 C428.6031,38.7456 428.4761,37.9406 428.2251,37.1646"
                  fill="#000000"
                />
              </g>
            </g>
          </svg>
          <p className="leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi non vero, expedita nisi
            laborum est officia cumque sequi? Nostrum iure, voluptate necessitatibus veritatis vitae
            doloribus labore libero eius voluptas ratione.
          </p>
          <svg
            className={`${quoteIconClass} ml-auto mt-2 block`}
            height="48"
            version="1.1"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
              <g transform="translate(-347.000000, -9.000000)">
                <path
                  d="M352.377,27.8345 C352.631,28.6105 353.066,29.3245 353.676,29.9645 C354.313,30.6365 355.15,31.1585 356.19,31.5325 C357.225,31.9055 358.559,32.0975 360.205,32.0975 L362.438,32.0975 C362.17,34.8405 361.191,37.1775 359.502,39.1095 C357.813,41.0375 355.469,42.7305 352.475,44.1845 L354.289,46.9995 C358.234,45.3205 361.606,42.8655 364.406,39.6195 C367.209,36.3735 368.602,33.1555 368.602,29.9645 C368.602,26.5365 367.795,23.8485 366.164,21.9065 C364.533,19.9655 362.199,19.0015 359.158,19.0015 C357.234,19.0015 355.557,19.6415 354.135,20.9265 C352.711,22.2115 352,23.7145 352,25.4295 C352,26.2535 352.127,27.0585 352.377,27.8345 M372.775,27.8345 C373.027,28.6105 373.465,29.3245 374.072,29.9645 C374.711,30.6365 375.549,31.1585 376.584,31.5325 C377.623,31.9055 378.957,32.0975 380.602,32.0975 L382.832,32.0975 C382.566,34.8405 381.588,37.1775 379.898,39.1095 C378.207,41.0375 375.867,42.7305 372.871,44.1845 L374.688,46.9995 C378.631,45.3205 382.004,42.8655 384.805,39.6195 C387.606,36.3735 389,33.1555 389,29.9645 C389,26.5365 388.191,23.8485 386.561,21.9065 C384.932,19.9655 382.598,19.0015 379.557,19.0015 C377.629,19.0015 375.955,19.6415 374.533,20.9265 C373.109,22.2115 372.398,23.7145 372.398,25.4295 C372.398,26.2535 372.522,27.0585 372.775,27.8345"
                  fill="#000000"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-8 bg-white px-3 py-8 sm:gap-10 sm:px-4 sm:py-10 md:gap-12 md:px-6 md:py-12 lg:gap-14 lg:px-10 lg:py-14 xl:gap-16 xl:px-14 xl:py-16 2xl:gap-20 2xl:px-20 2xl:py-20 3xl:gap-24 3xl:px-24 4xl:gap-28 4xl:px-28 5xl:gap-32 5xl:px-32">
        <div className="w-full max-w-6xl px-2 text-center sm:px-4 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 3xl:max-w-[min(100rem,92vw)] 4xl:max-w-[min(120rem,92vw)] 5xl:max-w-[min(140rem,92vw)]">
          <h1 className="font-montserrat text-3xl font-extralight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]">
            At <span className="italic text-red-600">The Infantry</span> <br /> We accommodate all
            skill levels
          </h1>
        </div>
        <div className="mx-auto flex w-full max-w-[100rem] flex-col gap-6 md:flex-row md:gap-[5%] lg:gap-[6%] xl:gap-[7%] 2xl:gap-[8%] 3xl:max-w-[min(140rem,96vw)] 3xl:gap-[7%] 4xl:max-w-[min(160rem,96vw)] 5xl:max-w-[min(180rem,96vw)]">
          <div className="group w-full md:w-1/2">
            <Link to="/Classes" className="block no-underline">
              <img
                className="h-auto w-full max-h-[28rem] object-cover transition-opacity group-hover:opacity-80 sm:max-h-[32rem] md:max-h-none lg:min-h-[20rem] xl:min-h-[24rem] 2xl:min-h-[28rem]"
                src={boxing_class}
                alt="classes"
                loading="lazy"
              />
              <div className="flex min-h-[8rem] flex-col bg-black px-3 py-4 text-center sm:min-h-[9rem] sm:px-4 md:min-h-[10rem] lg:min-h-[11rem] xl:min-h-[12rem] 2xl:min-h-[14rem]">
                <h1 className="font-saira text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem]">
                  Unlimited Classes
                </h1>
                <p className="font-saira mt-2 text-sm font-extralight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-[2.35rem] 5xl:text-[2.65rem]">
                  We have unlimited classes available for all members
                </p>
              </div>
            </Link>
          </div>
          <div className="group w-full md:w-1/2">
            <Link to="/Trainers" className="block no-underline">
              <img
                className="h-auto w-full max-h-[28rem] object-cover transition-opacity group-hover:opacity-80 sm:max-h-[32rem] md:max-h-none lg:min-h-[20rem] xl:min-h-[24rem] 2xl:min-h-[28rem]"
                src={boxing_training}
                alt="personal trainers"
                loading="lazy"
              />
              <div className="flex min-h-[8rem] flex-col bg-black px-3 py-4 text-center sm:min-h-[9rem] sm:px-4 md:min-h-[10rem] lg:min-h-[11rem] xl:min-h-[12rem] 2xl:min-h-[14rem]">
                <h1 className="font-saira text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem]">
                  Personal trainers
                </h1>
                <p className="font-saira mt-2 text-sm font-extralight text-white sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-[2.35rem] 5xl:text-[2.65rem]">
                  Our Personal Trainers are always available to help you meet your goal
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full px-2 py-6 text-center sm:px-4 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
          <h1 className="font-montserrat text-3xl font-extralight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]">
            Are you ready to start <br />{' '}
            <span className="italic text-red-600">Your journey?</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
