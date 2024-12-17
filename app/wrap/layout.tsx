import React, { Suspense } from "react";
import LoadingAnimation from "./loading";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Suspense fallback={<LoadingAnimation />}>{children}</Suspense>
    </div>
  );
};

export default layout;
