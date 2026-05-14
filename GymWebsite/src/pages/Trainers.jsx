import Trainer_header from '../assets/images/Trainer_header.jpg'
import Trainer_1 from '../assets/images/Trainer_1.webp'
import Trainer_2 from '../assets/images/Trainer_2.webp'
import Trainer_3 from '../assets/images/Trainer_3.webp'

const hrClass =
  'my-3 h-1 w-full max-w-full rounded-full border-0 bg-[rgb(103,4,4)] sm:my-4 md:-mt-8 lg:my-5'

export default function Trainers() {
  return (
    <>
      <header className="relative flex min-h-[32vh] w-full flex-col overflow-hidden sm:min-h-[36vh] md:h-[40vh] md:min-h-[40vh] md:flex-row lg:min-h-[44vh] xl:min-h-[48vh] 2xl:min-h-[52vh]">
        <div className="relative flex h-full min-h-[16rem] w-full items-center justify-center bg-[linear-gradient(to_right,rgba(255,0,0,0.943)_30%,rgba(0,0,0,0.963)_70%)] md:w-1/2 md:min-h-0 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-black/50 after:content-['']">
          <h1 className="font-montserrat relative z-[2] w-full p-6 text-center text-2xl font-extralight text-neutral-300 sm:p-8 sm:text-3xl md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl 2xl:text-6xl">
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

      <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:mt-12 sm:gap-10 sm:px-6 sm:pb-16 md:mt-14 md:max-h-none md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:mt-16 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24">
        <img
          className="h-auto w-full max-w-md object-cover object-center shadow-lg sm:max-w-lg md:max-h-[28rem] md:max-w-[24rem] lg:max-h-[32rem] lg:max-w-md xl:max-h-[36rem] xl:max-w-lg 2xl:max-h-[40rem] 2xl:max-w-xl"
          src={Trainer_1}
          alt="Personal Trainer 1"
        />
        <div className="flex w-full flex-col md:w-[42%] lg:w-[40%] xl:w-[38%] 2xl:w-[36%]">
          <h1 className="font-saira text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            John Adams
          </h1>
          <hr className={hrClass} />
          <p className="font-saira text-base leading-relaxed sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse gap-8 px-4 pb-12 sm:gap-10 sm:px-6 sm:pb-16 md:max-w-5xl md:flex-row-reverse md:items-start md:justify-end md:gap-16 md:px-8 lg:max-w-6xl lg:gap-20 lg:pb-20 xl:max-w-7xl xl:gap-24 2xl:max-w-[90rem] 2xl:gap-28 2xl:pb-24">
        <img
        className="h-[350px] w-auto object-contain sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]"
        src={Trainer_2}
        alt="Alex Jones"
         />
        <div className="flex w-full flex-col md:w-[42%] lg:w-[40%] xl:w-[38%] 2xl:w-[36%]">
          <h1 className="font-saira text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Alex Jones
          </h1>
          <hr className={hrClass} />
          <p className="font-saira text-base leading-relaxed sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex space-x-40 w-full max-w-6xl flex-col gap-8 px-4 pb-12 sm:mt-12 sm:gap-10 sm:px-6 sm:pb-16 md:mt-14 md:max-h-none md:max-w-5xl md:flex-row md:items-start md:justify-start md:gap-12 md:px-8 lg:mt-16 lg:max-w-6xl lg:gap-16 lg:pb-20 xl:max-w-7xl xl:gap-20 2xl:max-w-[90rem] 2xl:gap-24 2xl:pb-24">
        <img
          className="h-[350px]  w-auto object-contain sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]"
          src={Trainer_3}
          alt="Luke James"
        />
        <div className="flex w-full flex-col md:w-[42%] lg:w-[40%] xl:w-[38%] 2xl:w-[36%]">
          <h1 className="font-saira text-4xl font-medium sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Luke James
          </h1>
          <hr className={hrClass} />
          <p className="font-saira text-base leading-relaxed sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nulla sed nam
            veritatis quisquam architecto! Soluta quis doloribus beatae nam culpa distinctio
            praesentium. Quae error explicabo ea dolorem magnam.
          </p>
        </div>
      </div>
    </>
  )
}
