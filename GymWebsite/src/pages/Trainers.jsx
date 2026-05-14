import Trainer_header from '../assets/images/Trainer_header.jpg'
import Trainer_1 from '../assets/images/Trainer_1.webp'
import Trainer_2 from '../assets/images/Trainer_2.webp'
import Trainer_3 from '../assets/images/Trainer_3.webp'

const hrClass =
  'my-3 h-1 w-full max-w-full rounded-full border-0 bg-[rgb(103,4,4)] sm:my-4 md:-mt-8 lg:my-5 3xl:my-6'

const rowFirst =
  'mx-auto mt-10 flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:mt-12 sm:gap-10 sm:px-6 sm:pb-16 md:mt-14 md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:mt-16 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24 3xl:mt-20 3xl:max-w-[min(112rem,96vw)] 3xl:gap-28 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-32 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-40 5xl:px-16 5xl:pb-36'

const row =
  'mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24 3xl:max-w-[min(112rem,96vw)] 3xl:gap-28 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-32 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-40 5xl:px-16 5xl:pb-36'

const rowReverse =
  'mx-auto flex w-full max-w-6xl flex-col-reverse gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:max-w-5xl md:flex-row-reverse md:items-start md:justify-end md:gap-16 md:px-8 lg:max-w-6xl lg:gap-20 lg:pb-20 xl:max-w-7xl xl:gap-24 2xl:max-w-[90rem] 2xl:gap-28 2xl:pb-24 3xl:max-w-[min(112rem,96vw)] 3xl:gap-32 3xl:px-10 3xl:pb-28 4xl:max-w-[min(128rem,96vw)] 4xl:gap-36 4xl:px-12 4xl:pb-32 5xl:max-w-[min(152rem,96vw)] 5xl:gap-44 5xl:px-16 5xl:pb-36'

const imgSquare =
  'h-auto w-full max-w-md object-cover object-center shadow-lg sm:max-w-lg md:max-w-[24rem] lg:max-w-md xl:max-w-lg 2xl:max-w-xl 3xl:max-w-2xl 4xl:max-w-[42rem] 5xl:max-w-[50rem]'

const imgTall =
  'h-64 w-full max-w-md object-cover object-bottom shadow-lg sm:h-72 sm:max-w-lg md:h-80 md:max-w-[26rem] lg:h-96 lg:max-w-lg xl:h-[28rem] xl:max-w-xl 2xl:h-[32rem] 2xl:max-w-2xl 3xl:h-[36rem] 3xl:max-w-[44rem] 4xl:h-[40rem] 4xl:max-w-[50rem] 5xl:h-[44rem] 5xl:max-w-[56rem]'

const colClass =
  'flex w-full flex-col md:w-[42%] lg:w-[40%] xl:w-[38%] 2xl:w-[36%] 3xl:w-[34%] 4xl:w-[32%] 5xl:w-[30%]'

const nameClass =
  'font-saira text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]'

const bioClass =
  'font-saira text-base leading-relaxed sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-[2.35rem] 5xl:text-[2.65rem]'

export default function Trainers() {
  return (
    <>
      <header className="relative flex min-h-[32vh] w-full flex-col overflow-hidden sm:min-h-[36vh] md:h-[40vh] md:min-h-[40vh] md:flex-row lg:min-h-[44vh] xl:min-h-[48vh] 2xl:min-h-[52vh] 3xl:min-h-[18rem] 3xl:max-h-[28rem] 4xl:min-h-[20rem] 4xl:max-h-[32rem] 5xl:min-h-[22rem] 5xl:max-h-[36rem]">
        <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(255,0,0,0.943)_30%,rgba(0,0,0,0.963)_70%)] md:w-1/2 md:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
          <h1 className="font-montserrat relative z-[2] w-full p-6 text-center text-2xl font-extralight text-neutral-300 sm:p-8 sm:text-3xl md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl 4xl:text-8xl 5xl:text-9xl">
            Meet your trainers
          </h1>
        </div>
        <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center overflow-hidden bg-neutral-950 md:w-1/2 md:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
          <img
            className="relative z-0 h-full w-full object-contain object-center"
            src={Trainer_header}
            alt="Trainer header"
          />
        </div>
      </header>

      <div className={rowFirst}>
        <img className={imgSquare} src={Trainer_1} alt="Personal Trainer 1" />
        <div className={colClass}>
          <h1 className={nameClass}>John Adams</h1>
          <hr className={hrClass} />
          <p className={bioClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>

      <div className={rowReverse}>
        <img className={imgTall} src={Trainer_2} alt="Personal Trainer 2" />
        <div className={colClass}>
          <h1 className={nameClass}>Alex Jones</h1>
          <hr className={hrClass} />
          <p className={bioClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>

      <div className={row}>
        <img className={imgTall} src={Trainer_3} alt="Personal Trainer 3" />
        <div className={colClass}>
          <h1 className={nameClass}>Luke James</h1>
          <hr className={hrClass} />
          <p className={bioClass}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>
    </>
  )
}
