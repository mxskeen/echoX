import React, { useState } from "react";

function picture() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="picture w-full h-[300px] md:h-[800px] overflow-hidden relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.5"
        className="w-full relative h-[300px] sm:h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1511715282680-fbf93a50e721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
      >
        {isHovering && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
            Pristine, deftly moving
          </div>
        )}
      </div>
    </div>
  );
}

export default picture;
