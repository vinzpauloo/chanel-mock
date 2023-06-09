// ** React Imports
import React, { createContext, useContext, useState } from "react";

// ** Type Imports
import { ContentContextData } from "../types/homeContentContextTypes";

// Provides a boolean state value and a function to change the state value
const ContentContext = createContext<ContentContextData>({
  activeContent: "11",
  setActiveContent: () => {},
});

// ** Exports
// Provides access to data stored in the ContentContext, returns an object of the type ContentContextData
export const useContentContext = (): ContentContextData =>
  useContext(ContentContext);

// A wrapper component that renders the children components and provides them with the context data through ContentContext.Provider. It uses the useState hook to initiate the state value activeContent to "1" and also defines the setActiveContent function that sets the activeContent state value.
export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeContent, setActiveContent] = useState("11");

  return (
    <ContentContext.Provider value={{ activeContent, setActiveContent }}>
      {children}
    </ContentContext.Provider>
  );
};
