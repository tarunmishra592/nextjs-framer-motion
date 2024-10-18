'use client'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LoremIpsum } from '@/component/LoremIpsum'
import { motion, useScroll } from 'framer-motion'

export default function About() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="container mx-auto px-4 py-12">
          <motion.div className='progress-bar' style={{scaleX: scrollYProgress}} />
          <LoremIpsum/>
    </div>
  )
}