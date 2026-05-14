import Girlfight from '../assets/images/Girlfight.jpg'
import boxer_header from '../assets/images/boxer_header.jpg'
import Boxer_champ1 from '../assets/images/Boxer_champ1.jpg'
import Boxer_champ2 from '../assets/images/Boxer_champ2.jpg'
import Boxer_champ3 from '../assets/images/Boxer_champ3.jpg'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="w-full">
      <header className="relative flex min-h-[32vh] w-full flex-col overflow-hidden sm:min-h-[36vh] md:h-[40vh] md:min-h-[40vh] md:flex-row lg:min-h-[44vh] xl:min-h-[48vh] 2xl:min-h-[52vh] 3xl:min-h-[18rem] 3xl:max-h-[28rem] 4xl:min-h-[20rem] 4xl:max-h-[32rem] 5xl:min-h-[22rem] 5xl:max-h-[36rem]">
        <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(255,0,0,0.943)_30%,rgba(0,0,0,0.963)_70%)] md:w-1/2 md:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
          <h1 className="font-montserrat relative z-[2] w-full p-6 text-center text-2xl font-extralight text-neutral-300 sm:p-8 sm:text-3xl md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
            ABOUT US
          </h1>
        </div>
        <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center overflow-hidden bg-neutral-950 md:w-1/2 md:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
          <img
            className="relative z-0 h-full w-full object-contain"
            src={boxer_header}
            alt="boxing header"
          />
        </div>
      </header>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center gap-8 px-4 pb-12 sm:mt-12 sm:gap-10 sm:px-6 sm:pb-16 md:mt-14 md:max-w-5xl md:flex-row md:items-start md:gap-10 md:px-8 lg:mt-16 lg:max-w-6xl lg:gap-12 lg:pb-20 xl:max-w-7xl xl:gap-16 2xl:max-w-[90rem] 2xl:gap-20 2xl:pb-24 3xl:mt-20 3xl:max-w-[min(112rem,96vw)] 3xl:gap-24 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-28 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-32 5xl:px-16 5xl:pb-36">
        <img
          className="h-auto w-full max-w-md rounded-lg object-cover shadow-lg sm:max-w-lg md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-[42rem] 5xl:max-w-[50rem]"
          src={Girlfight}
          alt="girl fighting"
        />
        <div className="flex w-full max-w-xl flex-col items-start text-base sm:text-lg md:max-w-md md:text-xl lg:max-w-lg lg:text-2xl xl:max-w-2xl xl:text-2xl 2xl:max-w-3xl 2xl:text-3xl 3xl:max-w-4xl 3xl:text-4xl 4xl:max-w-5xl 4xl:text-[2.35rem] 5xl:max-w-6xl 5xl:text-[2.65rem]">
          <h1 className="font-montserrat text-3xl font-normal sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl 4xl:text-9xl 5xl:text-[10rem]">
            Our Story
          </h1>
          <hr className="my-2 h-1 w-full max-w-full rounded-full border-0 bg-red-600 sm:my-3 md:-mt-2 lg:my-4" />
          <p className="font-saira leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ex nesciunt nulla
            tenetur, ducimus omnis molestiae aliquid blanditiis at iste magni cumque vel
            reprehenderit explicabo ea facere earum beatae minus.
          </p>
        </div>
      </div>

      <div className="bg-white pb-12 pt-8 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12 lg:pb-24 lg:pt-14 xl:pb-28 2xl:pb-32">
        <h1 className="font-montserrat px-4 pb-8 text-center text-3xl font-extralight capitalize leading-tight sm:text-4xl sm:pb-10 md:text-5xl md:pb-12 lg:text-6xl lg:pb-14 xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]">
          Now,
          <br /> How will your story <br /> <span className="text-red-600">Finish?</span>
        </h1>
        <div className="mx-auto flex max-w-[100rem] flex-wrap items-center justify-center gap-6 px-4 pb-8 sm:gap-8 sm:pb-10 md:gap-10 md:pb-12 lg:gap-12 xl:gap-14 2xl:gap-16 3xl:max-w-[min(120rem,96vw)] 3xl:gap-20 4xl:max-w-[min(140rem,96vw)] 4xl:gap-24 5xl:max-w-[min(160rem,96vw)] 5xl:gap-28">
          {[Boxer_champ1, Boxer_champ2, Boxer_champ3].map((src, i) => (
            <img
              key={i}
              className="h-auto w-full max-w-[18rem] rounded-md object-cover shadow-md sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-[42rem] 5xl:max-w-[50rem]"
              src={src}
              alt={i === 0 ? 'female boxing athlete' : 'male boxing athlete'}
            />
          ))}
        </div>
        <div className="flex justify-center px-4">
          <Link to="/SignUp" className="inline-block">
            <button
              type="button"
              className="font-montserrat rounded-full bg-green-700 px-8 py-4 text-base font-extralight uppercase text-white transition-opacity hover:opacity-80 sm:px-10 sm:py-5 sm:text-lg md:px-12 md:py-6 md:text-xl lg:px-14 lg:py-7 lg:text-2xl xl:px-16 xl:py-8 xl:text-3xl 2xl:px-20 2xl:py-9 2xl:text-4xl 3xl:px-24 3xl:py-10 3xl:text-5xl 4xl:px-28 4xl:text-6xl 5xl:px-32 5xl:text-7xl"
            >
              Start Today!
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
