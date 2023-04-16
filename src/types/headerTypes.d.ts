// ** React Imports
import React from 'react';

export interface HeaderProps {
    open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface TopTabNavigationProps {
  selectedTab: string;
  orientation?: "horizontal" | "vertical";
  marginLeft?: number;
}

