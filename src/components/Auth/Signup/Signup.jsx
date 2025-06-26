import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="  bg-[#f8f8f8] text-black  mx-auto font-montserrat h-screen ]">
      <div className=" bg-[#f8f8f8]">
        <div className="flex justify-center">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png"
            alt="Logo"
            class="h-20 w-auto mb-4"
          ></img>
        </div>

        <div className="text-center mb-2">
          <h2 className="text-[1.8rem] font-bold text-gray-800">
            Create account
          </h2>
          <p className="lg:w-[448px] mx-auto text-gray-500 text-sm">
            Enter The Email Address Associated With Your Account. We'll Send You
            An OTP To Your Email.
          </p>
        </div>

        <div className="w-[448px] mx-auto  p- rounded-lg ">
          <form
            // onSubmit={handleRegister}
            className="form-action"
          >
            <div className="w-full mb-2">
              <label className="text-sm " htmlFor="email">
                Your Email
              </label>
              <input
                className=" py-2 px-4 w-full my-2 ml-2 border border-gray-300 rounded-md bg-white text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email "
              />
            </div>

            <div className="w-full relative mb-2 text-sm">
              <label className=" " htmlFor="password">
                New Password
              </label>

              <input
                className=" py-2 px-4 w-full my-2 ml-2  border border-gray-300 rounded-md bg-white"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter New Password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-11 text-xl"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <div className="w-full relative text-sm">
              <label className=" " htmlFor="password">
                Confirm Password
              </label>
              <input
                className=" py-2 px-4 w-full my-2 ml-2  border border-gray-300 rounded-md bg-white"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Confirm New Password"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-11 text-xl"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <input
              className="btn  bg-[#1D4ED8] py-2 w-full border-none rounded-md  mt-6  hover:bg-[#113db4] "
              type="submit"
              value="Sign Up"
            />
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-500">
              {" "}
              Already have an account?
              <Link className="  ml-2 text-[#1D4ED8]" to="/">
                Login{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
