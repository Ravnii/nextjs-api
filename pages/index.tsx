import Image from 'next/image'
import frontpageBanner from '../public/images/frontpage_banner.jpg'

export default function Home() {
  return (
    <>
      <Image
        priority
        src={frontpageBanner}
        alt="Frontpage banner"
        className="object-cover w-full h-[83vh] absolute top-0 -z-10"
      />
      <div className="absolute bg-black/60 top-0 left-0 right-0 bottom-0 -z-[5] h-[83vh]"></div>
      <div className="text-white relative top-[21vh] md:top-[32vh] -z-[1]">
        <h1 className="text-5xl font-light tracking-[5.5px] uppercase text-center leading-tight pb-[10px]">
          Jesper Ravn Jørgensen
        </h1>
        <p className="text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2 pb-[5px]">
          Software Developer : Scrum master : Azure Dev
        </p>
        <p className="text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2">
          PHP - C# - Next.js - Node.js - TypeScript
        </p>
      </div>
      <div className="mt-[62vh] md:mt-[70vh] dark:text-slate-300">
        <h1 className="text-5xl font-semibold tracking-[5.5px] uppercase text-center leading-tight pb-[10px]">
          Hi, and welcome to my site
        </h1>
        <p className="text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2 pb-[5px] mt-4">
          I&lsquo;m a software developer with a passion for web development and
          cloud computing. I&lsquo;m currently working as a software developer
          at
          <a href="https://www.jfmedier.dk" className="text-blue-500">
            {' '}
            JF Medier
          </a>
        </p>
        <p className="text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2 pb-[5px] mt-4">
          As You may notice, this site is still under construction. I&lsquo;m
          working on it as much as I can, but I have a bunch of small fun
          projects up in the air, so things take time.
        </p>
        <p className="text-xs font-medium tracking-[3.5px] uppercase text-center leading-normal opacity-70 pl-2 pr-2 pb-[5px] mt-4">
          I&lsquo;m am heavily investing in getting smarter about software
          development, and not so much at finishing every little detail.
        </p>
        <div className="mt-16">
          <h2 className="text-2xl font-semibold tracking-[5.5px] uppercase text-center leading-tight pb-[10px] pl-2 pr-2">
            Feel free to link up with me
          </h2>
          <div className="flex justify-evenly mt-4 mb-6">
            <a href="https://www.linkedin.com/in/jesper-ravn-joergensen/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="dark:fill-current dark:text-blue-500"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="https://github.com/Ravnii">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="dark:fill-current dark:text-blue-500"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
              </svg>
            </a>

            <a href="mailto:jspr.ravn@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                className="dark:fill-current dark:text-blue-500"
              >
                <path d="M13.718 10.528c0 .792-.268 1.829-.684 2.642-1.009 1.98-3.063 1.967-3.063-.14 0-.786.27-1.799.687-2.58 1.021-1.925 3.06-1.624 3.06.078zm10.282 1.472c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.194c0-3.246-2.631-5.601-6.256-5.601-4.967 0-7.744 3.149-7.744 7.073 0 3.672 2.467 6.517 7.024 6.517 2.52 0 4.124-.726 5.122-1.288l-.687-.991c-1.022.593-2.251 1.136-4.256 1.136-3.429 0-5.733-2.199-5.733-5.473 0-5.714 6.401-6.758 9.214-5.071 2.624 1.642 2.524 5.578.582 7.083-1.034.826-2.199.799-1.821-.756 0 0 1.212-4.489 1.354-4.975h-1.364l-.271.952c-.278-.785-.943-1.295-1.911-1.295-2.018 0-3.722 2.19-3.722 4.783 0 1.73.913 2.804 2.38 2.804 1.283 0 1.95-.726 2.364-1.373-.3 2.898 5.725 1.557 5.725-3.525z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
