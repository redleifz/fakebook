import axios from "axios";
import React, { useContext, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { URL } from "../App";
import { Store } from "../Store";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LoginScreen = () => {
  const rootEl = document.getElementById("root");
  let currentYear = new Date().getFullYear();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitHandler = async (e) => {
    console.log("submit");
    e.preventDefault();
    try {
      const { data } = await axios.post(`${URL}/api/users/signin`, {
        email,
        password,
      });
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      window.location.href = "/";
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div className="bg-slate-100 w-full h-screen">
        <div className="lg:grid-cols-2 grid pt-10 h-[80%] items-center lg:items-start lg:pt-[10rem]">
          <div className="flex flex-col items-center text-center lg:pl-10">
            <span className="text-red-500 font-bold text-5xl uppercase">
              fakebook
            </span>
            <span className="text-2xl px-3 pt-3">
              Fakebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white mt-10 lg:mt-0 w-[350px] h-[340px] rounded-lg shadow-lg flex flex-col items-center">
              <form className="flex flex-col" onSubmit={submitHandler}>
                <input
                  className="w-[320px] h-[50px] mt-4 rounded-lg border-2 text-lg px-3"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
                <input
                  className="w-[320px] h-[50px] mt-3 rounded-lg border-2 text-lg px-3"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                />
                <button
                  className="w-[320px] h-[50px] mt-3 rounded-lg bg-blue-600 text-white text-xl font-bold"
                  type="submit"
                  value="Submit"
                >
                  Log in
                </button>
              </form>
              <span className="text-blue-500 mt-3">Forgotten password?</span>
              <hr className="w-[80%] mt-3" />

              <button
                className="w-[230px] h-[50px] mt-6 rounded-lg bg-green-600 text-white text-xl font-bold"
                onClick={openModal}
              >
                Create new account
              </button>
            </div>
            <div className="mt-7">
              <span className="font-bold">Create a Page </span>
              <span>for a celebirty, brand or business.</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-start h-[20%]  w-full bg-white">
          <span className="pt-5 text-sm">
            English (UK) ภาษาไทย 日本語 中文(简体) Tiếng Việt Français (France)
            Deutsch Русский Español Português (Brasil) Italiano
          </span>
          <hr className="w-[900px] mt-1" />
          <span className="text-sm mt-1">
            Sign UpLog inMessengerFakebook LiteWatchPlacesGamesMarketplaceMeta
            PayOculusPortalInstagramBulletinFundraisers
          </span>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="#main"
          appElement={rootEl}
        >
          <div className="w-[400px] rounded-xl">
            {" "}
            <div className="flex w-full flex-row justify-between ">
              {" "}
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <button onClick={closeModal} className="text-xl">
                X
              </button>
            </div>
            <div className="border-b-2">
              {" "}
              <span>It's quick and easy.</span>
            </div>
            <form>
              <div className="flex justify-between pt-3">
                {" "}
                <input
                  placeholder="First name"
                  className="bg-gray-50 border-slate-400 border-[1px]  h-[35px] rounded-sm text-md w-[49%] placeholder:pl-2 py-2"
                />
                <input
                  placeholder="Surname"
                  className="bg-gray-50 border-slate-400 border-[1px]  h-[35px] rounded-sm text-md w-[49%] placeholder:pl-2"
                />
              </div>
              <div className="flex flex-col pt-3">
                <input
                  placeholder="Email Address"
                  className="bg-gray-50 border-slate-400 border-[1px] h-[35px] rounded-sm text-md w-full placeholder:pl-2 "
                />
                <input
                  placeholder="New password"
                  className="bg-gray-50 mt-3  border-slate-400 border-[1px] h-[35px] rounded-sm text-md w-full placeholder:pl-2 "
                />
                <label className="text-sm pt-3">Date of birth</label>
                <div className="flex flex-row justify-between">
                  <select className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] pl-1 w-[120px]">
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(
                      (number) => (
                        <option key={number} value={number}>
                          {number}
                        </option>
                      )
                    )}
                  </select>
                  <select className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] pl-1 w-[120px]">
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] pl-1 w-[120px]">
                    {Array.from(
                      { length: currentYear - (currentYear - 140) },
                      (_, i) => currentYear - i
                    ).map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                <label className="text-sm pt-3">Date of birth</label>
                <div className="flex flex-row justify-between">
                  <div className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] w-[120px] flex justify-between">
                    <label htmlFor="Male" className="pl-2">
                      Male
                    </label>
                    <input
                      className="mr-2"
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                    />
                  </div>
                  <div className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] w-[120px] flex justify-between">
                    <label htmlFor="Female" className="pl-2">
                      Female
                    </label>
                    <input
                      className="mr-2"
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                  </div>
                  <div className="bg-gray-50 mt-2 rounded-sm border-slate-400 border-[1px] w-[120px] flex justify-between">
                    <label htmlFor="Other" className="pl-2">
                      Other
                    </label>
                    <input
                      className="mr-2"
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                    />
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-gray-500 leading-[15px] mt-3">
                People who use our service may have uploaded your contact
                information to Facebook. Learn more.
              </p>
              <p className="text-[11px] text-gray-500 leading-[15px] mt-3">
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS notifications from us and
                can opt out at any time.
              </p>
              <div className="flex justify-center mt-4">
                {" "}
                <button className="text-white bg-green-600 font-bold py-2 w-[200px] rounded-md">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default LoginScreen;
