export const headingVariants = {
    hidden: {
      y:'-100vh', opacity: 0
    },
    visible: {
      y: 0, opacity: 1,
      transition:{
        type: 'spring', stiffness: 120
      }
    }
  }

  export const containerVariats = {
    hidden:{
      opacity: 0,
      x: '100vw'
    },
    visible:{
      opacity: 1,
      x: 0,
      transition:{
        type: 'spring',
        delay: 0.5,
        when: 'beforeChildren'
      }
    }
  }

  export const btnVariants = {
    // visible: {
    //   x: [0 -10, 10, -20, 30, 0 ],
    //   transition: { delay: 2 }
    // },
    hover:{
        scale: 1.1,
        textShadow: '0px 0px 8px #333',
        transition:{
          duration: 0.8,
          repeat: Infinity
        }
        // boxShadow: '0px 0px 8px #333'
    }
  }


  export const cardVariants = {
    offScreen:{
      y: 600
    },
    onScreen:{
      y: 100,
      rotate: -15,
      transition:{
        type: 'spring',
        bounce: 0.4,
        duration: 0.8
      }
    }
  }