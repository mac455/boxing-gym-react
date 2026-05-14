const labelClass =
  'font-montserrat mb-1 text-sm text-black sm:text-base md:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl 5xl:text-5xl'

const inputClass =
  'mb-4 rounded-md border border-black/50 px-3 py-2 text-sm sm:mb-5 sm:px-4 sm:py-2.5 sm:text-base md:text-lg lg:py-3 lg:text-xl 2xl:text-2xl 2xl:py-4 3xl:text-3xl 3xl:py-5 4xl:text-4xl 4xl:px-6 5xl:text-5xl 5xl:py-6'

const SignUp = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-hidden bg-[linear-gradient(to_right,rgba(255,0,0,0.943)_40%,rgba(0,0,0,0.963)_65%)] px-4 py-8 before:pointer-events-none before:absolute before:inset-0 before:z-[1] before:bg-black/50 before:content-[''] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-12 xl:py-16 2xl:px-16 2xl:py-20 3xl:px-20 3xl:py-24 4xl:px-24 5xl:px-28">
      <header className="relative z-[2] mb-4 mt-16 text-center sm:mb-6 sm:mt-20 md:mt-24 lg:mt-28 xl:mb-8 xl:mt-32 2xl:mt-36 3xl:mt-40 4xl:mt-44">
        <h1 className="font-montserrat m-0 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[10rem] 5xl:text-[11rem]">
          Sign Up
        </h1>
      </header>
      <div className="relative z-[2] w-full max-w-md rounded-xl bg-white/90 p-5 shadow-xl sm:max-w-lg sm:p-6 md:max-w-xl md:p-8 lg:max-w-2xl lg:p-10 xl:max-w-3xl xl:p-12 2xl:max-w-4xl 2xl:p-14 3xl:max-w-5xl 3xl:p-16 4xl:max-w-6xl 4xl:p-20 5xl:max-w-7xl 5xl:p-24">
        <form className="flex flex-col gap-1">
          <label htmlFor="name" className={labelClass}>
            Name:
          </label>
          <input type="text" id="name" className={inputClass} required />

          <label htmlFor="email" className={labelClass}>
            Email:
          </label>
          <input type="email" id="email" className={inputClass} required />

          <label htmlFor="password" className={labelClass}>
            Password:
          </label>
          <input type="password" id="password" className={inputClass} required />

          <label htmlFor="confirm-password" className={labelClass}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            className={`${inputClass} mb-6 sm:mb-8 lg:mb-10`}
            required
          />

          <button
            type="submit"
            className="font-montserrat cursor-pointer rounded-full bg-red-600 px-4 py-3 text-base uppercase text-white transition-colors hover:bg-red-700 sm:py-3.5 sm:text-lg md:text-xl lg:py-4 lg:text-2xl xl:py-5 xl:text-3xl 2xl:text-4xl 3xl:py-6 3xl:text-5xl 4xl:py-7 4xl:text-6xl 5xl:py-8 5xl:text-7xl"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}
export default SignUp
