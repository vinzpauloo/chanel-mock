import React, { createContext, useContext, useState } from "react";

interface StickyHeaderContextData {
  isHeaderFixed: boolean;
  setIsHeaderFixed: React.Dispatch<React.SetStateAction<boolean>>;
}

// ** Provides a boolean state value and a function to change the state value
const StickyHeaderContext = createContext<StickyHeaderContextData>({
  isHeaderFixed: true,
  setIsHeaderFixed: () => {},
});

// ** Exports

// * Custom hook that uses the useContext hook to get the current state value and function from the context, which can be used by any child component that needs this information
export const useStickyHeader = (): StickyHeaderContextData =>
  useContext(StickyHeaderContext);

// * A wrapper component that renders the children components and provides them with the context data through StickyHeaderContext.Provider. It uses the useState hook to initiate the state value isHeaderFixed to true and also defines the setIsHeaderFixed function that sets the isHeaderFixed state value.
export const StickyHeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(true);

  return (
    <StickyHeaderContext.Provider value={{ isHeaderFixed, setIsHeaderFixed }}>
      {children}
    </StickyHeaderContext.Provider>
  );
};
