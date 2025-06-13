export default function Home() {
  return (
    <div className="w-full h-[3000px] flex flex-col gap-20 bg-[#050505] p-10">
      <div className="text-white pt-[200px]">
          <p className="max-w-[700px] text-[20px] leading-[30px] text-[#7f7f7f] font-semibold">
            Transform your business ideas into powerful digital solutions withs
            our trusted offshore development team. We deliver high quality
            software development at competitive rates while ensuring quality and
            reliability.
          </p>
        </div>

        <a
          href="https://calendly.com/help-decods/30min"
          target="_blank"
          rel="noreferrer"
          aria-label="calendly"
          className="w-fit"
        >
          <button
            className="w-[196px] leading-[30px] h-[56px] text-white font-semibold mt-4 bg-[#292929]"
          >
            Book a Call
          </button>
        </a>
    </div>
  );
}
