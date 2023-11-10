'use client';
export default function MenuBody({ image }) {
  return (
    <>
      <header className="h-full w-full  bg-white overflow-hidden mb-10">
        <img src={image} alt="menu" className="mx-auto" />
      </header>
    </>
  );
}
