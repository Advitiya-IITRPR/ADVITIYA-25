import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { useRef, useLayoutEffect } from "react";
const Index = () => {
  const page1 = useRef();
  const { contextSafe } = useGSAP({ scope: page1 });
  const tl = useRef();
  const openSidebar = contextSafe(() => {
    gsap.from(["#sidebar div", "#sidebar #btn"], {
      onStart: () => {
        document.querySelector("#sidebar").style.display = "flex";
        document.querySelector("#mobile-nav").style.display = "none";
      },
      y: -50,
      opacity: 0,
      duration: 0.3,
      stagger: 0.1,
    });
  });

  const closeSidebar = contextSafe(() => {
    document.querySelector("#mobile-nav").style.display = "flex";
    document.querySelector("#sidebar").style.display = "none";
  });

  useLayoutEffect(() => {
    const isLargeLaptop = window.innerWidth >= 1280;
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      if (isLargeLaptop) {
        tl.current = gsap
          .timeline()
          .from("nav #nav-btn", {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          })
          .from(["#hero"], {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.7)",
          })
          // .from("#heromain", {
          //   y: -100,
          //   opacity: 0,
          //   duration: 1,
          //   ease: "back.out(1.7)",
          // })
          // .to("#heromain", { // Adjust this line based on your desired animation
          //   scrollTrigger: {
          //     trigger: "#page1",
          //     start: "top center",
          //     end: "bottom center",
          //     scrub: true,
          //   },
          // });
      } else {
        tl.current = gsap
          .timeline()
          .from(["#mobile-nav div"], {
            y: -100,
            opacity: 0,
            duration: 0.5,
          })
          .from(["#hero"], {
            y: -100,
            opacity: 0,
            duration: 1,
          });
      }
    }, page1);

    

    


    return () => ctx.revert();
  }, []);
  return (
    <>
      <div
        ref={page1}
        className="page1 h-[100vh] w-[100%] relative text-white"
      >
        <nav className="hidden  h-[65px] xl:flex items-center justify-between px-[2vw] py-[4vh]">
          <span id="nav-btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">
                Events
                <MdOutlineArrowDropDownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white">
                <DropdownMenuItem>Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem>Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Button id="nav-btn" variant="ghost">
            Schedule
          </Button>
          <Button id="nav-btn" variant="ghost">
            Accommodation
          </Button>
          <Button id="nav-btn" variant="ghost">
            Sponsors
          </Button>
          <Button id="nav-btn" variant="ghost">
            Inter-School-Conclave
          </Button>
          <Button id="nav-btn" variant="ghost">
            Contact Us
          </Button>
          <Button id="nav-btn" variant="ghost">
            About Us
          </Button>
          <Button id="nav-btn" variant="ghost">
            FAQs
          </Button>
          <span id="nav-btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white mt-2 mr-2">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Login/Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </nav>
        <nav
          id="sidebar"
          className="hidden z-10 h-[100vh] flex-col xl:hidden  items-center gap-4 md:gap-6  justify-start px-[2vw] py-[4vh]"
        >
          <div className=" w-full flex text-2xl mt-8 items-start justify-end px-4">
            <FaRegWindowClose onClick={closeSidebar} />
          </div>
          <span id="btn">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none ">
                Events
                <MdOutlineArrowDropDownCircle />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white">
                <DropdownMenuItem>Hackathons</DropdownMenuItem>
                <DropdownMenuItem>Workshops</DropdownMenuItem>
                <DropdownMenuItem>Exhibitions</DropdownMenuItem>
                <DropdownMenuItem>Talk Shows</DropdownMenuItem>
                <DropdownMenuItem>Competitions</DropdownMenuItem>
                <DropdownMenuItem>Robowars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
          <Button id="btn" variant="ghost">
            Schedule
          </Button>
          <Button id="btn" variant="ghost">
            Sponsors
          </Button>
          <Button id="btn" variant="ghost">
            Accommodation
          </Button>
          <Button id="btn" variant="ghost">
            Inter-School-Conclave
          </Button>
          <Button id="btn" variant="ghost">
            Contact Us
          </Button>
          <Button id="btn" variant="ghost">
            About Us
          </Button>
          <Button id="btn" variant="ghost">
            FAQs
          </Button>
          <span id="btn">
            <DropdownMenu id="btn">
              <DropdownMenuTrigger className="flex flex-row items-center gap-2 outline-none text-2xl">
                {" "}
                <CgProfile />
                <FaBars />{" "}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="text-white mt-2 mr-2">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Login/Register</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </span>
        </nav>

        <div
          id="mobile-nav"
          className="flex h-[30px] xl:hidden px-4 py-8 justify-between items-center"
        >
          <div id="left">
            <h1>LOGO</h1>
          </div>
          <div id="right" className="text-2xl" onClick={openSidebar}>
            <FaBars />
          </div>
        </div>

        <div
          id="hero"
          className="h-[calc(100%-65px)] bg-slate-600 hero flex justify-center items-center w-[100%] bg-cover bg-[url('https://images.unsplash.com/photo-1567201864585-6baec9110dac?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "
        >
          <div className="bg-transparent" id="heromain">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl bg-transparent herotext">
              ADVITIYA&#39;24
            </h1>
            <p className="herosubtext text-right tracking-wide  text-md sm:text-xl md:text-2xl lg:text-4xl bg-transparent">
              TechFest IIT ROPAR
            </p>
          </div>
        </div>
      </div>

      <div id="page2" className="h-[100vh] w-[100%]  bg-white"></div>
    </>
  );
};

export default Index;
