import React from "react";

const BannerImage: React.FC = () => {
  return (
    <section className="">
      <div className="w-full h-[400px] object-cover relative">
        <div className="w-full h-full object-cover absolute z-20">
          <img
            className="w-full h-full object-cover"
            src="./noise.svg"
            alt="noise"
            draggable="false"
          />
        </div>
        <img
          className="w-full h-full object-cover grayscale"
          src="https://images.unsplash.com/photo-1598559411608-e6dddb68e5f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="banner-image"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default BannerImage;
