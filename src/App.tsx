import React, { FunctionComponent } from "react";

export const App: FunctionComponent = () => {
  return (
    <main className="h-screen bg-blue-main flex place-items-center place-content-center">
      <div className="w-[20rem] bg-blue-card rounded-3xl p-5 space-y-5 text-primary-blue font-thin">
        <div className="group relative">
          <div className="absolute opacity-0 cursor-pointer flex rounded-2xl top-0 bg-primary-cyan/30 w-full h-full place-items-center place-content-center group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <img src={`${process.env.PUBLIC_URL}/images/icon-view.svg`} alt="QR code" />
          </div>
          <img className="rounded-2xl" src={`${process.env.PUBLIC_URL}/images/image-equilibrium.jpg`} alt="QR code" />
        </div>

        <h1 className="text-white text-xl font-bold cursor-pointer hover:text-primary-cyan transition-all duration-300 ease-in-out">Equilibrium #3429</h1>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <div className="flex justify-between text-sm">
          <div className="text-primary-cyan flex place-items-center gap-2">
            <img src={`${process.env.PUBLIC_URL}/images/icon-ethereum.svg`} alt="Ethereum" />
            0.041 ETH
          </div>

          <div className="flex place-items-center gap-2">
            <img src={`${process.env.PUBLIC_URL}/images/icon-clock.svg`} alt="Clock" />3 days left
          </div>
        </div>
        <hr className="border-blue-line" />
        <div className="flex place-items-center gap-5">
          <img className="rounded-full border max-h-10" src={`${process.env.PUBLIC_URL}/images/image-avatar.png`} alt="Avatar" />
          <div>
            Creation of <p className="text-white inline cursor-pointer hover:text-primary-cyan transition-all duration-300 ease-in-out">Jules Wyvern</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
