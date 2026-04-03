import { motion } from 'framer-motion';

export default function AnimatedVisual() {
  return (
    <div className="absolute right-0 md:right-[5%] top-[10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] hidden lg:flex justify-center items-center pointer-events-none z-10 perspective-[1000px]">
      <motion.div 
        animate={{ rotateZ: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full flex justify-center items-center preserve-3d"
      >
        {/* Core Energy Glow */}
        <div className="absolute w-[180px] h-[180px] bg-primary-container/30 blur-[60px] rounded-full mix-blend-screen" />
        
        {/* Outer Wireframe Sphere */}
        <motion.div 
           className="absolute w-[70%] h-[70%] rounded-full border-[1.5px] border-[#B87BE4]/20"
           animate={{ rotateX: 360, rotateY: 180 }}
           transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
           className="absolute w-[70%] h-[70%] rounded-full border-[1.5px] border-[#00D4AA]/20 border-dashed"
           animate={{ rotateX: -360, rotateY: 360 }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Wireframe Sphere */}
        <motion.div 
           className="absolute w-[45%] h-[45%] rounded-full border-2 border-[#B87BE4]/40"
           animate={{ rotateX: 180, rotateY: -360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Center Abstract Geometry (Icosahedron projection base) */}
        <motion.svg
          viewBox="0 0 200 200"
          className="absolute w-[35%] h-[35%] text-[#00D4AA] opacity-50"
          animate={{ rotateZ: -360, rotateX: 360, rotateY: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {/* Main geometric lines */}
          <polygon points="100,10 190,60 190,140 100,190 10,140 10,60" fill="none" stroke="currentColor" strokeWidth="1" />
          <polygon points="100,40 160,80 160,120 100,160 40,120 40,80" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <polygon points="100,70 130,90 130,110 100,130 70,110 70,90" fill="none" stroke="#B87BE4" strokeWidth="2" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="60" x2="190" y2="140" stroke="currentColor" strokeWidth="0.5" />
          <line x1="10" y1="140" x2="190" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="4" fill="#B87BE4" />
        </motion.svg>
        
        {/* Floating Particles Orbiting */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              backgroundColor: Math.random() > 0.5 ? '#00D4AA' : '#B87BE4',
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px currentColor'
            }}
            animate={{
              x: [(Math.random() - 0.5) * 600, (Math.random() - 0.5) * 700, (Math.random() - 0.5) * 600],
              y: [(Math.random() - 0.5) * 600, (Math.random() - 0.5) * 700, (Math.random() - 0.5) * 600],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
