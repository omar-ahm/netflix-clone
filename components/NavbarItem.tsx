import React from "react";

interface NavbarItemProps {
    label: string;
}


const NavbarItem: React.FC<NavbarItemProps> = ({
    label
}) => {
  return (
    <div className="text-white cursor-pointer hover:gray-300 transtion">
        {label}
    
    </div>
  )
}

export default NavbarItem