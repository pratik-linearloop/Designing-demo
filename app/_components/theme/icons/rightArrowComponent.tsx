import React from "react";

const RightArrowComponent = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={17}
      height={10}
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RightArrowComponent;
