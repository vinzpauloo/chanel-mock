import React from 'react';

export interface StickyHeaderContextData {
    isHeaderFixed: boolean;
    setIsHeaderFixed: React.Dispatch<React.SetStateAction<boolean>>;
}