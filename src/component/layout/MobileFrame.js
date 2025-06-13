'use client';

export default function MobileFrame({ children, innerBg = null }) {
  return (
    <div className="relative w-[33%] min-w-[380px] max-w-[420px] h-[85%] p-[20px] bg-[#562915] rounded-2xl flex justify-center items-center">
      <div
        className="w-full h-full rounded-lg overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: innerBg ? `url("${innerBg}")` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
