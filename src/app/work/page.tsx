'use client'

import { motion } from 'framer-motion'
import { cardVariants } from '@/utils'


interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;




function CardItem({ emoji, hueA, hueB }: Props) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div 
      className="card-container" 
      initial="offScreen" 
      whileInView='onScreen' viewport={{ once: false, amount: 0.8 }}>
      <div className="splash" style={{ background }} />
      <motion.div variants={cardVariants} className="card">
        {emoji}
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  const food: [string, number, number][] = [
    ["🍅", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320]
  ];

  return food.map(([emoji, hueA, hueB]) => (
    <CardItem emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
  ));
}