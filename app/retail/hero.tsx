import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative lg:h-[fit] pb-[200px] 2xl:h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -top-[108px] z-0">
        <Image
          src={"/images/retail_page/retail.png"}
          alt="background"
          width={1920}
          height={1220}
          className="object-cover w-full h-full "
          priority
        />
      </div>

      <div className="flex flex-col h-full w-full text-center justify-start px-4 sm:px-6 md:px-8 relative z-10">
        {/* Responsive padding top */}
        <div className="pt-[60px] sm:pt-[80px] md:pt-[100px] xl:pt-[160px] 2xl:pt-[220px]">
          <h1
            className="green-outline uppercase font-poppins 
                     text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                     drop-shadow-[0px_0px_4px_rgba(138,253,106,0.8)] 
                     sm:drop-shadow-[0px_0px_8px_rgba(138,253,106,0.6)]
                     lg:drop-shadow-[0px_0px_14px_rgba(138,253,106,.5)] 
                     text-[#8aeb6a] "
          >
            OUR retail channels
          </h1>

          <p
            className="text-lime-500 font-poppins text-center mt-2 sm:mt-3 md:mt-4 
                      text-xs sm:text-base italic md:text-xl lg:text-2xl font-normal 
                      px-1 sm:px-4 md:px-6 relative z-10"
          >
            WHERE TECH MEETS TRUST
          </p>
        </div>
        <div className="flex w-full items-center justify-center text-center">
          <p className="mt-16 text-white text-lg italic max-w-xl">
            Explore how YYWireless delivers trusted, tested devices to customers
            across the world&apos;s top marketplaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
