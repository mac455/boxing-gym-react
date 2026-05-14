import Boyfight from '../../assets/images/Boyfight.webp'
import weights from '../../assets/images/weights.webp'
import treadmill from '../../assets/images/treadmill.webp'
import abs from '../../assets/images/abs.webp'
import contract from '../../assets/images/contract.webp'
import open_sign from '../../assets/images/open_sign.webp'

export default function Headertag() {
  return (
    <header className="relative flex min-h-[90vh] flex-col overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:bg-cream before:content-[''] before:[clip-path:polygon(0%_100%,100%_57%,100%_100%,0%_100%)] sm:min-h-screen md:h-screen md:min-h-0 md:max-h-[100vh] md:flex-row lg:min-h-screen xl:min-h-[92vh] 2xl:min-h-screen">
      <div className="relative z-[2] flex min-h-[42vh] w-full flex-col justify-center bg-charcoal px-3 pt-20 sm:min-h-[45vh] sm:px-4 sm:pt-24 md:h-full md:w-1/2 md:min-h-0 md:pt-16 lg:px-8 lg:pt-12 xl:px-12 xl:pt-10 2xl:px-16">
        <h1 className="font-montserrat relative z-[2] mt-0 block w-full text-center text-xl font-light uppercase leading-tight text-white sm:text-2xl md:pt-12 md:text-3xl lg:pt-16 lg:text-4xl xl:pt-20 xl:text-5xl 2xl:text-6xl">
          Welcome to <span className="text-red-600">The infantry </span>
          <br />
        </h1>
        <h1 className="font-montserrat mt-2 block w-full text-center text-xl font-light uppercase leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
          Join us <span className="text-green-600">TODAY!</span>
        </h1>
      </div>

      <div className="relative z-[2] flex min-h-[42vh] w-full overflow-hidden bg-charcoal sm:min-h-[45vh] md:h-full md:w-1/2 md:min-h-0">
        <img
          src={Boyfight}
          alt="boy fighting"
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-3 left-1/2 z-[3] flex max-w-[92vw] -translate-x-1/2 flex-wrap justify-center gap-1 rounded-full bg-neutral-200 px-2 py-1 shadow-[0_4px_10px_10px_rgba(210,32,32,0.1)] sm:bottom-4 sm:max-w-[88vw] sm:gap-2 sm:px-3 sm:py-1.5 md:bottom-6 md:max-w-[80vw] md:px-4 lg:max-w-4xl lg:gap-3 lg:px-5 xl:bottom-8 xl:max-w-5xl xl:py-2 2xl:max-w-6xl 2xl:gap-4 2xl:px-6">
        {[
          { src: open_sign, alt: '24/7 open sign', label: 'OPEN 24/7' },
          { src: abs, alt: 'abs', label: 'CORE' },
          { src: weights, alt: 'weights', label: 'WEIGHTS' },
          { src: treadmill, alt: 'treadmill', label: 'CARDIO' },
          { src: contract, alt: 'no contract sign', label: 'NO CONTRACT!' },
        ].map(({ src, alt, label }) => (
          <div
            key={label}
            className="flex min-w-0 flex-1 flex-col items-center px-1 text-center sm:px-2 md:px-3"
          >
            <img
              src={src}
              alt={alt}
              className="mx-auto h-auto w-[72%] max-w-[4.5rem] p-1 sm:max-w-[5rem] sm:p-1.5 md:max-w-[5.5rem] md:p-2 lg:max-w-[6.5rem] lg:p-2.5 xl:max-w-[7.5rem] xl:p-3 2xl:max-w-[8.5rem]"
              loading="lazy"
            />
            <p className="font-saira m-0 p-0 text-[0.65rem] font-bold sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
              {label}
            </p>
          </div>
        ))}
      </div>
    </header>
  )
}
