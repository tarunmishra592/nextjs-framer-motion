"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {motion} from 'framer-motion'
import { btnVariants, containerVariats } from '@/utils';
import Banner from '@/component/Banner';
import Projects from '@/component/Projects';
import ParallaxProject from '@/component/ParallaxProject/ParallaxProject';

export default function Home() {

  

  return (
    // <div className="container mx-auto px-4 py-12">

    //   <section className="mb-16">
        
    //     <div className="relative rounded-lg overflow-hidden shadow-lg">
    //       <Banner/>
    //     </div>
    //     <p className="text-center mt-4 text-gray-600">Check out our latest creative process!</p>
    //   </section>

    //   <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        
    //     <motion.div whileHover={{ scale: 1.1 }}>
    //       <Card className="bg-gradient-to-br from-pink-400 to-red-500 text-white">
    //           <CardHeader>
    //             <CardTitle>About Me</CardTitle>
    //           </CardHeader>
    //           <CardContent>
    //             <p>Discover the passion and skills that drive my creative journey.</p>
    //             <motion.div whileHover={{ scale: 1.1, textShadow: '1px 1px 1px #333', originX: 0 }}>
    //               <Button className="mt-4 bg-white text-pink-500 hover:bg-gray-100">
    //                 <span>Learn More</span>
    //               </Button>
    //             </motion.div>
    //           </CardContent>
    //       </Card>
    //     </motion.div>


    //     <motion.div whileHover={{ scale: 1.1 }}>
    //     <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
    //       <CardHeader>
    //         <CardTitle>My Work</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <p>Explore a vibrant collection of my latest projects and designs.</p>
    //           <Button asChild className="mt-4 bg-white text-orange-500 hover:bg-gray-100">
    //             <Link href="/work">View Portfolio</Link>
    //           </Button>
    //       </CardContent>
    //     </Card>
    //     </motion.div>

    //     <motion.div whileHover={{ scale: 1.1 }}>
    //     <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white">
    //       <CardHeader>
    //         <CardTitle>Get in Touch</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <p>Lets collaborate and bring your ideas to life with vibrant creativity.</p>
    //         <Button asChild className="mt-4 bg-white text-blue-500 hover:bg-gray-100">
    //           <Link href="/contact">Contact Me</Link>
    //         </Button>
    //       </CardContent>
    //     </Card>
    //     </motion.div>

    //   </section>

    //   <section className="text-center">
    //     <div className="mb-16">
    //       <Projects/>
    //     </div>

    //         <motion.p variants={containerVariats} initial="hidden" animate="visible" className="text-xl text-gray-600 mb-4">A glimpse into my latest creative endeavor</motion.p>
    //         <motion.div variants={btnVariants} whileHover="hover">
    //           <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
    //             <Link href="/work">See All Projects</Link>
    //           </Button>
    //         </motion.div>
    //   </section>
    // </div>
    <>
      <ParallaxProject/>
    </>
  )
}