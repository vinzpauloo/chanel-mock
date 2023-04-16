// ** React Imports
import React from 'react';

export interface ContentContextData {
    activeContent: string;
    setActiveContent: React.Dispatch<React.SetStateAction<string>>;
}