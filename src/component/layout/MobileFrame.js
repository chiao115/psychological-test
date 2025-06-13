'use client';

export default function MobileFrame({ children, innerBg = null }) {
  return (
    <div
      className="relative w-[390px] h-[700px] p-5 bg-[#562915] rounded-2xl flex justify-center items-center shadow-xl"
    >
      <div
        className="w-full h-full rounded-lg overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: innerBg ? `url("${innerBg}")` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full h-full flex justify-center items-center overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
