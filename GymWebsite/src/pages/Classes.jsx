import class_1 from '../assets/images/class_1.webp'
import class_2 from '../assets/images/class_2.webp'
import class_3 from '../assets/images/class_3.webp'
import { Link } from 'react-router-dom'

const hrClass =
  'my-3 h-1 w-full max-w-full rounded-full border-0 bg-red-600 sm:my-4 md:-mt-8 lg:my-5 3xl:my-6'

const contentRowFirst =
  'mx-auto mt-10 flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:mt-12 sm:gap-10 sm:px-6 sm:pb-16 md:mt-14 md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:mt-16 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24 3xl:mt-20 3xl:max-w-[min(112rem,96vw)] 3xl:gap-28 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-32 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-40 5xl:px-16 5xl:pb-36'

const contentRow =
  'mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24 3xl:max-w-[min(112rem,96vw)] 3xl:gap-28 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-32 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-40 5xl:px-16 5xl:pb-36'

const contentRowReverse =
  'mx-auto flex w-full max-w-6xl flex-col-reverse gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:max-w-5xl md:flex-row-reverse md:items-start md:justify-end md:gap-16 md:px-8 lg:max-w-6xl lg:gap-20 lg:pb-20 xl:max-w-7xl xl:gap-24 2xl:max-w-[90rem] 2xl:gap-28 2xl:pb-24 3xl:max-w-[min(112rem,96vw)] 3xl:gap-32 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-36 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-44 5xl:px-16 5xl:pb-36'

const imgClass =
  'h-auto w-full max-w-md object-cover shadow-lg sm:max-w-lg md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-[42rem] 5xl:max-w-[50rem]'

const colClass = 'flex w-full flex-col md:w-[42%] lg:w-[40%] xl:w-[38%] 2xl:w-[36%] 3xl:w-[34%] 4xl:w-[32%] 5xl:w-[30%]'

const titleClass =
  'font-saira text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]'

const bodyClass =
  'font-saira mb-4 text-base leading-relaxed sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-[2.35rem] 5xl:text-[2.65rem]'

const btnClass =
  'font-montserrat w-full max-w-xs rounded-full bg-red-600 px-6 py-2 text-base font-medium uppercase text-white transition-colors hover:bg-red-700 sm:max-w-sm sm:px-8 sm:py-3 sm:text-lg md:w-auto md:min-w-[12rem] lg:px-10 lg:py-3 lg:text-xl xl:px-12 xl:py-4 xl:text-2xl 2xl:px-14 2xl:text-3xl 3xl:px-16 3xl:py-5 3xl:text-4xl 4xl:px-20 4xl:text-5xl 5xl:px-24 5xl:text-6xl'

export default function Classes() {
  return (
    <div className="w-full">
      <header className="relative flex min-h-[32vh] w-full items-center justify-center overflow-hidden bg-[linear-gradient(to_right,rgba(255,0,0,0.943)_40%,rgba(0,0,0,0.963)_65%)] sm:min-h-[36vh] md:min-h-[40vh] lg:min-h-[44vh] xl:min-h-[48vh] 2xl:min-h-[52vh] 3xl:min-h-[18rem] 3xl:max-h-[28rem] 4xl:min-h-[20rem] 4xl:max-h-[32rem] 5xl:min-h-[22rem] 5xl:max-h-[36rem] after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
        <h1 className="font-montserrat relative z-[2] w-full py-6 text-center text-3xl font-extralight text-white sm:py-8 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[12rem]">
          Classes
        </h1>
      </header>

      <div className={contentRowFirst}>
        <img className={imgClass} src={class_1} alt="Boxing class image" />
        <div className={colClass}>
          <h1 className={titleClass}>Resistance Training</h1>
          <hr className={hrClass} />
          <p className={bodyClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
          <Link to="/SignUp" className="inline-flex w-full justify-center md:block md:w-auto">
            <button type="button" className={btnClass}>
              Book now!
            </button>
          </Link>
        </div>
      </div>

      <div className={contentRowReverse}>
        <img className={imgClass} src={class_2} alt="Boxing class image" />
        <div className={colClass}>
          <h1 className={titleClass}>Cardio</h1>
          <hr className={hrClass} />
          <p className={bodyClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
          <Link to="/SignUp" className="inline-flex w-full justify-center md:block md:w-auto">
            <button type="button" className={btnClass}>
              Book now!
            </button>
          </Link>
        </div>
      </div>

      <div className={contentRow}>
        <img className={imgClass} src={class_3} alt="Boxing class image" />
        <div className={colClass}>
          <h1 className={titleClass}>Boxing drills</h1>
          <hr className={hrClass} />
          <p className={bodyClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
          <Link to="/SignUp" className="inline-flex w-full justify-center md:block md:w-auto">
            <button type="button" className={btnClass}>
              Book now!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
