import React from 'react';

const Partners = () => {
  const partnerLogos = [
    {
      src: "/doorway.png",
      alt: "partner 1",
      className: "aspect-[2.58] object-contain w-20"
    },
    {
      src: "/aws.png",
      alt: "partner 2",
      className: "aspect-[1.67] object-contain w-[60px]"
    },
    {
      src: "/xente.png",
      alt: "partner 3",
      className: "aspect-[3.19] object-contain w-20"
    },
    {
      src: "/lendsqr.png",
      alt: "partner 4",
      className: "aspect-[3.33] object-contain w-[90px]"
    }
  ];

  const bottomPartnerLogos = [
    {
      src: "/creation hub.png",
      alt: "partner 5",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "/sayswitch.png",
      alt: "partner 6",
      className: "aspect-[3.85] object-contain w-[150px]"
    },
    {
      src: "/omni.png",
      alt: "partner 7",
      className: "aspect-[4.83] object-contain w-[150px]"
    },
    {
      src: "/pedistack.png",
      alt: "partner 8",
      className: "aspect-[3.13] object-contain w-[150px]"
    },
    {
      src: "/quabbly.png",
      alt: "partner 9",
      className: "aspect-[2.94] object-contain w-[150px]"
    }
  ];

  return (
    <section className="self-center flex w-[1180px] max-w-full flex-col overflow-hidden items-stretch justify-center px-20 py-[55px] max-md:px-5">
      <div className="flex flex-col items-center justify-center max-md:max-w-full">
        <div className="flex w-[619px] max-w-full items-center gap-[40px_100px] justify-between flex-wrap">
          {partnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity`}
            />
          ))}
        </div>
        <div className="flex max-w-full w-[992px] items-center gap-[40px_58px] justify-between flex-wrap mt-2">
          {bottomPartnerLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} self-stretch shrink-0 my-auto hover:opacity-80 transition-opacity`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
