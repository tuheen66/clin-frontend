const Header = () => {
  return (
    // <div className="text-center">
    //   <div className="flex justify-center items-center">
    //     <img src="/src/assets/images/logo.png" alt="" />
    //   </div>
    //   <h1 className="font-inter text-[2.986rem] md:text-[2.986rem] font-extrabold text-[#3C83F6]">
    //     Clin Technologies
    //   </h1>
    //   <p className="w-[95%] mx-auto font-inter text-[1.728rem] md:text-[1.728rem] font-normal text-[#94a3b8] mt-[10px]">
    //     Revolutionizing clinical documentation through{" "}
    //     <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span>
    //     advanced artificial <br /> intelligence, giving healthcare providers more time
    //     for what truly matters — patient care. try it for <br /> <span className="text-[#f59e0b] font-semibold">FREE </span>
    //     today
    //   </p>
    //   <p className="text-[1.44rem] text-[#e2e8f0] max-w-[700px] mx-auto mt-[30px] ">
    //     Our sophisticated AI platform intelligently processes clinical
    //     conversations, creating accurate documentation that integrates with your
    //     existing EMR system.
    //   </p>
    //   <div className="flex gap-8 justify-center items-center mt-[30px]">
    //     <button className="border-2 border-[#3C83F6] py-3 px-6 rounded-full hover:bg-[#0F1A38]">Login</button>
    //     <button className="border-2 border-[#3C83F6] bg-[#3C83F6] py-3 px-6 rounded-full">Signup</button>
    //   </div>
    // </div>
    <div className="relative overflow-hidden bg-[#0F1A38] text-white py-16">
      {/* Animated background */}
      <div className="absolute inset-0 animate-gradient z-0"></div>

      {/* Header Content */}
      <div className="relative z-10 text-center">
        <div className="flex justify-center items-center">
          <div className="w-[120px] h-[120px] mx-auto mb-[15px] relative">
            <svg
              className="absolute top-0 left-0 w-full h-full animate-[pulse_5s_infinite] filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
              viewBox="0 0 100 100"
            >
              <path
                d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
                fill="none"
                stroke="#60a5fa"
                stroke-width="2"
              ></path>
            </svg>
            <svg
              className="absolute top-0 left-0 w-full h-full animate-[glow_3s_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75"
                stroke="#93c5fd"
                stroke-width="1.5"
                fill="none"
              ></path>
              <circle cx="35" cy="40" r="2" fill="#93c5fd"></circle>
              <circle cx="65" cy="40" r="2" fill="#93c5fd"></circle>
              <circle cx="50" cy="60" r="2" fill="#93c5fd"></circle>
              <circle cx="35" cy="80" r="2" fill="#93c5fd"></circle>
              <circle cx="65" cy="80" r="2" fill="#93c5fd"></circle>
            </svg>
          </div>
        </div>
        <h1 className="font-inter text-[2.986rem] font-extrabold text-[#3C83F6]">
          Clin Technologies
        </h1>
        <p className="w-[95%] mx-auto font-inter text-[1.728rem] font-normal text-[#94a3b8] mt-[10px]">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#f59e0b] font-semibold">HIPAA COMPLIANT</span>{" "}
          advanced artificial <br />
          intelligence, giving healthcare providers more time for what truly
          matters — patient care. Try it for <br />
          <span className="text-[#f59e0b] font-semibold">FREE</span> today.
        </p>
        <p className="text-[1.44rem] text-[#e2e8f0] max-w-[700px] mx-auto mt-[30px]">
          Our sophisticated AI platform intelligently processes clinical
          conversations, creating accurate documentation that integrates with
          your existing EMR system.
        </p>
        <div className="flex gap-8 justify-center items-center mt-[30px]">
          <button className="border-2 border-[#3C83F6] py-3 px-6 rounded-full hover:bg-[#0F1A38]">
            Login
          </button>
          <button className="border-2 border-[#3C83F6] bg-[#3C83F6] py-3 px-6 rounded-full">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
