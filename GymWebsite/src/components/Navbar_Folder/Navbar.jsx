import { NavLink, Link } from 'react-router-dom'

const linkBase =
  'font-saira font-semibold uppercase no-underline transition-opacity hover:opacity-60 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[1.75rem] 3xl:text-[2rem] 4xl:text-[2.25rem] 5xl:text-[2.5rem]'

export default function Navbar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-[200] pt-3 sm:pt-4 md:pt-5">
      <nav className="pointer-events-auto mx-auto flex w-full max-w-[min(180rem,98vw)] items-center justify-between gap-3 px-3 sm:gap-4 sm:px-4 md:px-5 lg:px-6 3xl:px-8 4xl:px-10 5xl:px-12">
        <Link
          to="/"
          className="font-saira flex min-w-0 shrink-0 items-center gap-1 text-base font-semibold capitalize leading-none text-white no-underline sm:gap-1.5 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl 5xl:text-7xl"
          aria-label="The Infantry home"
        >
          <svg
            className="h-9 w-auto shrink-0 fill-white sm:h-10 md:h-11 lg:h-12 xl:h-14 2xl:h-16 3xl:h-[4.25rem] 4xl:h-20 5xl:h-24"
            width="49"
            height="58"
            viewBox="0 0 49 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.02158 25.1753L3.92707 24.9132C2.54099 21.0565 2.69149 16.8255 4.34554 13.1482C5.99958 9.47099 9.02214 6.64776 12.7502 5.29781L22.7993 1.67305C26.5307 0.332355 30.6595 0.576074 34.2801 2.35075C37.9007 4.12543 40.7174 7.28616 42.1124 11.1396L47.2585 25.4064C48.496 28.8196 48.6805 32.5199 47.7864 35.9988L47.269 38.0273L47.8361 39.5995C48.6294 41.803 48.5437 44.2211 47.5978 46.3221C46.652 48.4232 44.9234 50.0353 42.792 50.8041L24.7083 57.3269C22.576 58.096 20.2153 57.9582 18.1455 56.9436C16.0756 55.929 14.4662 54.1209 13.6712 51.917L13.1911 50.5859L11.7953 49.9463C9.65829 48.9599 7.72896 47.5441 6.12353 45.7842C4.5181 44.0243 3.2698 41.9567 2.45385 39.7059L0.899383 35.3964C0.237206 33.5539 0.1848 31.551 0.750369 29.7013C1.31594 27.8516 2.46756 26.2594 4.02496 25.174L4.02158 25.1753ZM23.2059 53.1723L41.293 46.6483C41.8207 46.4579 42.3046 46.1619 42.7169 45.7773C43.1292 45.3927 43.4619 44.9269 43.6959 44.4065C44.1686 43.3556 44.211 42.1463 43.8136 41.0445L17.6868 50.4685C17.8836 51.0142 18.1826 51.517 18.5665 51.9482C18.9504 52.3794 19.4118 52.7306 19.9243 52.9817C20.4368 53.2328 20.9904 53.3789 21.5535 53.4116C22.1165 53.4443 22.678 53.363 23.2059 53.1723ZM6.46945 38.2575C7.08208 39.9453 8.01876 41.4956 9.22311 42.8153C10.4275 44.1349 11.8746 45.1965 13.4773 45.9361L15.1298 46.6943L43.1815 36.576L43.6352 34.7995C44.3053 32.1881 44.1662 29.4108 43.237 26.8491L40.6882 19.7829C39.7314 20.9554 38.4837 21.8407 37.0719 22.3489L23.0038 27.4233C22.4708 27.6155 21.8808 27.581 21.3634 27.3274C20.8461 27.0739 20.4438 26.6219 20.2451 26.0711C20.0464 25.5202 20.0675 24.9155 20.3039 24.3901C20.5402 23.8646 20.9724 23.4614 21.5054 23.2692L35.5718 18.1954C36.0999 18.0051 36.5842 17.7092 36.9968 17.3244C37.4094 16.9397 37.7423 16.4737 37.9765 15.953C38.2106 15.4324 38.3415 14.8673 38.3616 14.2902C38.3817 13.713 38.2905 13.135 38.0934 12.5893C37.097 9.83664 35.085 7.57882 32.4987 6.31112C29.9124 5.04342 26.9631 4.86937 24.2977 5.82713L14.2486 9.45188C11.5855 10.4161 9.4264 12.4328 8.24487 15.0596C7.06334 17.6863 6.95588 20.7086 7.94605 23.4636L8.04056 23.7256C9.93221 23.5669 11.835 24.0573 13.4511 25.1201C15.0673 26.1829 16.3055 27.758 16.9719 29.599L19.2195 35.8301C19.4182 36.3809 19.397 36.9856 19.1607 37.5111C18.9243 38.0365 18.4922 38.4397 17.9592 38.6319C17.4263 38.8242 16.8362 38.7897 16.3188 38.5361C15.8015 38.2825 15.3992 37.8306 15.2005 37.2797L12.9529 31.0486C12.5555 29.9467 11.7507 29.0426 10.7158 28.5353C9.68089 28.028 8.50053 27.9591 7.43441 28.3436C6.36829 28.7282 5.50373 29.5348 5.03093 30.5859C4.55813 31.637 4.51581 32.8466 4.91329 33.9486L6.46945 38.2575Z"
              fill="#FDFDFD"
            />
          </svg>
          <span className="whitespace-nowrap">
            <span className="text-white">The </span>
            <span className="text-red-600">Infantry</span>
          </span>
        </Link>

        <ul className="m-0 flex min-w-0 list-none flex-wrap items-center justify-end gap-x-2 gap-y-1 pl-0 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 xl:gap-x-6 3xl:gap-x-8 4xl:gap-x-10 5xl:gap-x-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'italic text-[aquamarine]' : 'text-white'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'italic text-[aquamarine]' : 'text-white'}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Trainers"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'italic text-[aquamarine]' : 'text-white'}`
              }
            >
              Trainer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Classes"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? 'italic text-[aquamarine]' : 'text-white'}`
              }
            >
              Classes
            </NavLink>
          </li>
          <li className="ml-1 sm:ml-2 md:ml-3">
            <Link
              to="/SignUp"
              className="inline-block rounded-full bg-red-600 px-3 py-1 font-saira text-xs font-extrabold uppercase text-white no-underline [text-shadow:0.08rem_0_0_black] sm:px-4 sm:py-1.5 sm:text-sm md:px-5 md:text-base lg:px-6 lg:text-lg xl:text-xl 3xl:px-7 3xl:text-2xl 4xl:px-8 4xl:text-3xl 5xl:px-10 5xl:text-4xl"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
