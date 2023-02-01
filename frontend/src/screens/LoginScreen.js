import React from "react";

const LoginScreen = () => {
  return (
    <>
      <div className="bg-slate-100 w-full h-screen">
        <div className="lg:grid-cols-2 grid pt-10 h-[80%] items-center lg:items-start lg:pt-[10rem]">
          <div className="flex flex-col items-center text-center lg:pl-10">
            <span className="text-red-500 font-bold text-5xl">fakebook</span>
            <span className="text-2xl px-3 pt-3">
              Fakebook helps you connect and share with the people in your life.
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white mt-10 lg:mt-0 w-[350px] h-[340px] rounded-lg shadow-lg flex flex-col items-center">
              <input
                className="w-[320px] h-[50px] mt-4 rounded-lg border-2 text-lg placeholder:pl-3"
                placeholder="Email address"
              />
              <input
                className="w-[320px] h-[50px] mt-3 rounded-lg border-2 text-lg placeholder:pl-3"
                placeholder="Password"
              />
              <button className="w-[320px] h-[50px] mt-3 rounded-lg bg-blue-600 text-white text-xl font-bold">
                Log in
              </button>
              <span className="text-blue-500 mt-3">Forgotten password?</span>
              <hr className="w-[80%] mt-3" />
              <button className="w-[230px] h-[50px] mt-6 rounded-lg bg-green-600 text-white text-xl font-bold">
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
          <hr className="w-[45%] mt-1" />
          <span className="text-sm mt-1">Sign UpLog inMessengerFacebook LiteWatchPlacesGamesMarketplaceMeta PayOculusPortalInstagramBulletinFundraisers</span>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
