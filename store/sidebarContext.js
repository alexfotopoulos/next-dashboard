"use client";

import { createContext, useState } from "react";

//create context for sidebar
export const SidebarContext = createContext({
    showSidebar: false,
    sidebarToggler: () => {},
});

export function SidebarContextProvider({ children }) {
    //initialize state to show sidebar
    const [showSidebar, setShowSidebar] = useState(false);

    //function to toggle sidebar
    function sidebarToggler() {
        setShowSidebar((prev) => !prev);
    }
    //function to disable toggle
    function sidebarToggleDisable() {
        setShowSidebar(false);
    }

    const context = {
        showSidebar,
        sidebarToggler,
        sidebarToggleDisable
    };

    return (
        <SidebarContext.Provider value={context}>
            {children}
        </SidebarContext.Provider>
    );
}

export default SidebarContext;
