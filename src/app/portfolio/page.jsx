"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Realtor App",
    desc: " Unlock your dream home with our cutting-edge realtor platform. Seamlessly search for rental and purchase properties, revolutionizing your real estate experience. Welcome to the future of home hunting!",
    img: "/Realtor.png",
    link: "https://realtor-realestate-silk.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-yellow-300",
    title: "Travel App",
    desc: "Experience the ultimate adventure companion! Our travel app ensures you never get lost on nature walks or camps, offering offline maps, adventure scheduling, and precise destination guidance.",
    img: "/Travel app.png",
    link: "https://wander-camp.vercel.app/",
  },
  {
    id: 3,
    color: "from-yellow-300 to-green-300",
    title: "Nike App",
    desc: "Step into greatness with Nike's iconic shoes. Engineered for performance and style, our footwear redefines athleticism, empowering you to unleash your full potential.",
    img: "/Nike logo.png",
    link: "https://nike-app-red.vercel.app/",
  },
  {
    id: 4,
    color: "from-green-300 to-orange-300",
    title: "Snapgram App",
    desc: "Connect with friends, share moments, and explore interests with our dynamic social media app. Stay connected, express yourself, and discover new communities effortlessly.",
    img: "/snapgram.png",
    link: "https://snapgram-blush-one.vercel.app/",
  },
  {
    id: 5,
    color: "from-orange-300 to-coral-300",
    title: "Shoppy app",
    desc: "Real-time insights on sales, customer behavior, inventory, and marketing empower e-commerce decision-making via Shoppy app's admin dashboard.",
    img: "/shoppy app.png",
    link: "https://shoppy-app-six.vercel.app/",
  }, 
  {
    id: 6,
    color: "from-teal-300 to-pink-300",
    title: "Social media  app",
    desc: "Introducing a dynamic social media platform where you can connect, share, and explore with ease. Join our vibrant community and start your journey today!",
    img: "/social app.png",
    link: "https://social-media-app-mu-three.vercel.app/",
  }, 
  {
    id: 7,
    color: "from-pink-300 to-violet-300",
    title: "Brainwave",
    desc: "Experience seamless communication with an AI-powered chat app by OpenAI. Engage in natural conversations and get instant, personalized responses. Elevate your user experience today!",
    img: "/brainwave2.png",
    link: "https://brainwave-sandy.vercel.app/",
  },


];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-100%"]);

  return ( 
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id} 
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-3xl xl:text-4xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[330px] lg:h-[180px] xl:w-[430px] xl:h-[250px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;