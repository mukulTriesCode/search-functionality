import React from "react";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen relative font-basheq">
      <div className="min-h-screen w-full bg-dark absolute left-0 top-0 -z-10">
        <div
          className="min-h-screen w-full opacity-60"
          style={{ backgroundImage: "url('./noise.svg')" }}
        ></div>
      </div>
      <section className="container text-light py-20 text-center">
        <h1 className="text-8xl">
          Enter the{" "}
          <span className="underline decoration-primary underline-offset-[1rem] decoration-4">
            realm
          </span>
        </h1>
      </section>
    </main>
  );
};

export default Home;
