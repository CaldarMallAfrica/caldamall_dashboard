"use client"
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from "next/image"

import { IoHomeOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { BsTicketDetailed } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import avatar from "../../public/assets/IMG_0162.JPG"


/**
 * Functional component representing the Sidebar.
 * @returns {JSX.Element} The Sidebar component.
 */
const Sidebar = () => {
    
    // State variables
    const [bg, setBg] = useState("overview");
    const [showSettings, setShowSettings] = useState(false);
    const [hideTicket, setHideTicket] = useState(false);

    /**
     * Function to handle ticket dropdown.
     * @param {string} nav - Navigation identifier.
     */
    const ticketDropdown = (nav) => {
        setHideTicket(!hideTicket);
        setBg(nav);
    };

    /**
     * Function to change the background of the navgation.
     * @param {string} nav - Navigation identifier.
     */
    const changeBackground = (nav) => {
        setBg(nav);
    };

    /**
     * Function to generate background styles.
     * @param {string} name - Navigation identifier.
     * @returns {Object} The style object for background.
     */
    const bgStyle = (name) => {
        return { background: bg === name ? "#E66700" : "white", color: bg === name ? "white" : "black" };
    };

    /**
     * Function to handle showing or hiding settings.
     */
    const showSettingsHandle = () => {
        setShowSettings(!showSettings);
    };

    return (
        <div className='sidebar_container'>
            <div className='navigations'>
                {/* Overview Link */}
                <Link href="/" className='sidebar_nav' style={bgStyle("overview")} onClick={() => changeBackground("overview")}>
                    <IoHomeOutline className="sidebar_icon" />
                    <div>
                        <p>Overview</p>
                    </div>
                </Link>

                {/* Sales Link */}
                <Link href="/sales" className='sidebar_nav' style={bgStyle("sales")} onClick={() => changeBackground("sales")}>
                    <BsCart3 className="sidebar_icon" />
                    <div>
                        <p>Sales</p>
                    </div>
                </Link>

                {/* Ticket Link */}
                <div className='sidebar_nav ticket' onClick={() => ticketDropdown("ticket")} style={bgStyle("ticket")}>
                    <BsTicketDetailed className="sidebar_icon" />
                    <div>
                        <p>Ticket</p>
                    </div>
                    {hideTicket ? (<IoIosArrowUp className="arrow" />) : (<IoIosArrowDown className="arrow" />)}
                </div>

                {/* Hidden Ticket Links */}
                {hideTicket && (
                    <div className='nav_hidden'>
                        {/* Available Tickets Link */}
                        <Link href="/availableticket" className='sidebar_nav' style={bgStyle("availableticket")}>
                            <CgProfile className="sidebar_icon" />
                            <div>
                                <p>Available Tickets</p>
                            </div>
                        </Link>

                        {/* Add Ticket Link */}
                        <Link href="/addTicket" className='sidebar_nav' style={bgStyle("addTicket")}>
                            <IoPersonAddOutline className="sidebar_icon" />
                            <div>
                                <p>Add Tickets</p>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Notification Link */}
                <Link href="/notification" className='sidebar_nav' style={bgStyle("notification")} onClick={() => changeBackground("notification")}>
                    <IoMdNotificationsOutline className="sidebar_icon" />
                    <div>
                        <p>Notification</p>
                    </div>
                </Link>
            </div>

            {/* User Profile Section */}
            <div className='profile'>
                <div className='users' onClick={() => showSettingsHandle()}>
                    <Image
                        src={avatar}
                        width={42}
                        height={42}
                        alt='profile Picture'
                        objectFit='contain'
                        className='picture'
                    />

                    <div>
                        <h2>David Mabadejs</h2>
                        <p>@davidmabadejs</p>
                    </div>
                    {showSettings ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </div>

                {/* Profile Settings */}
                {showSettings && (
                    <div className='profile_nav'>
                        {/* Settings Link */}
                        <Link href="/" className='profile_setting'>
                            <IoSettingsOutline className="sidebar_icon" />
                            <h1>Settings</h1>
                        </Link>

                        {/* Logout Link */}
                        <Link href="/" className='profile_setting'>
                            <IoIosArrowDropleft className="sidebar_icon" />
                            <h1>Logout</h1>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;


/************************** 
const Sidbar = () => {
    
    const [ bg, setBg ] = useState("overview") 
    //const [ ticketBg, setTicketBg ] = useState(true)

    const [ showSettings, setShowSettings ] = useState(false)
    const [ hideTicket, setHideTicket ] = useState(false)
    
    const ticketDropdown = (nav) => {
        setHideTicket(!hideTicket)
        setBg(nav)
    }

    const changeBackground = (nav)=>{
        setBg(nav)
    }

    const bgStyle =(name)=>{
        return {background: bg === name ? "#E66700" : "white", color: bg === name ? "white" : "black"}
    }

    //  const ticketDropStyle =()=>{
    //     return {background: ticketBg ? "#FFBC66" : "white", color: ticketBg ? "white" : "black"}
    //  }
    
    const showSettingsHandle = ()=>{
        setShowSettings(!showSettings)
    }

  return (
    <div  className='sidebar_container'>
       <div className='navigations'>
         <Link href="/" className='sidebar_nav' style={bgStyle("overview")} onClick={()=> changeBackground("overview")}  >
              <IoHomeOutline className="sidebar_icon" />
              <div>
                  <p>Overview</p>
              </div>  
          </Link>
          
          <Link href="/sales" className='sidebar_nav' style={bgStyle("sales")} onClick={()=> changeBackground("sales")} >
              <BsCart3 className="sidebar_icon" />
              <div>
                  <p>Sales</p>
              </div>  
          </Link>

          <div className='sidebar_nav ticket' onClick={()=>ticketDropdown("ticket")} style={bgStyle("ticket")} >
              <BsTicketDetailed className="sidebar_icon" />
              <div>
                  <p>Ticket</p>
              </div> 
              {hideTicket ? (<IoIosArrowUp className="arrow"/>): (<IoIosArrowDown className="arrow" />)}
          </div>

          {
              hideTicket && (
                   <div className='nav_hidden'>
                        <Link href="/availableticket" className='sidebar_nav' style={{background: ticketBg ? "#FFBC66" : "white", color: ticketBg ? "white" : "black"}}>
                            <CgProfile className="sidebar_icon" />
                            <div>
                                <p>Available Tickets</p>
                            </div> 
                         </Link>
              
                        <Link href="/addTicket" className='sidebar_nav' style={{background: !ticketBg ? "#FFBC66" : "white", color: !ticketBg ? "white" : "black"}}>
                            <IoPersonAddOutline className="sidebar_icon" />
                            <div>
                                <p>Add Tickets</p>
                            </div> 
                        </Link> 
                    </div>
                )
          }
          
          <Link href="/notification" className='sidebar_nav' style={bgStyle("notification")} onClick={()=> changeBackground("notification")} >
              <IoMdNotificationsOutline  className="sidebar_icon" />
              <div>
                  <p>Notification</p>
              </div>  
          </Link>
          </div>
          
          <div className='profile'>
              <div className='users' onClick={()=>showSettingsHandle()}>
                  <Image
                      src={avatar}
                      width={ 42}
                      height={42 }
                      alt='profile Picture'
                      objectFit='contain'
                    className='picture'
                  />

                  <div>
                      <h2>David Mabadejs</h2>
                      <p>@davidmabadejs</p>
                  </div>
                  {showSettings ? <IoIosArrowDown/> : <IoIosArrowUp/>}
              </div>
              {
                  showSettings && (
                    <div className='profile_nav'>
                        <Link href="/" className='profile_setting'>
                            <IoSettingsOutline className="sidebar_icon" />
                            <h1>Settings</h1>
                        </Link>
                        <Link href="/" className='profile_setting'>
                            <IoIosArrowDropleft  className="sidebar_icon" />
                            <h1>Logout</h1>
                        </Link>
                    </div>
                  )
              }
          </div>

    </div>
  )
}

export default Sidbar
**************************/