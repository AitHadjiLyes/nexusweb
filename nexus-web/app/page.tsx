"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronDown,
  ChevronRight,
  Globe,
  Code,
  Cpu,
  Database,
  Layers,
  Wifi,
  Shield,
  Mail,
  Phone,
  MapPin,
  ChevronUp,
} from "lucide-react"
import NexusHeader from "@/components/nexus-header"
import NexusFooter from "@/components/nexus-footer"
import GlitchText from "@/components/glitch-text"
import CyberButton from "@/components/cyber-button"
import HolographicCard from "@/components/holographic-card"
import NeonText from "@/components/neon-text"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [audioEnabled, setAudioEnabled] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Refs for each section
  const heroRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const techRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      // Simple calculation to determine which section is in view
      if (scrollY < windowHeight * 0.5) {
        setActiveSection("hero")
      } else if (scrollY < windowHeight * 1.5) {
        setActiveSection("services")
      } else if (scrollY < windowHeight * 2.5) {
        setActiveSection("tech")
      } else if (scrollY < windowHeight * 3.5) {
        setActiveSection("projects")
      } else {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Loading sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Audio handling
  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioEnabled) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setAudioEnabled(!audioEnabled)
    }
  }

  // Parallax effect values
  const parallaxY1 = useTransform(useScroll().scrollYProgress, [0, 1], [0, -300])
  const parallaxY2 = useTransform(useScroll().scrollYProgress, [0, 1], [0, -150])
  const parallaxY3 = useTransform(useScroll().scrollYProgress, [0, 1], [0, -450])

  // Scroll-triggered animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background audio */}
      <audio ref={audioRef} loop src="/audio/cyberpunk-ambience.mp3" />

      {/* Loading screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="w-32 h-32 border-t-2 border-purple-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="mt-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <GlitchText text="INITIALIZING NEXUSWEB" />
            </motion.div>
            <motion.div
              className="mt-4 w-64 h-2 bg-gray-800 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mouse follower */}
      <div
        className="fixed w-8 h-8 rounded-full bg-purple-500/30 pointer-events-none mix-blend-screen z-50 hidden md:block"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: "translate(-50%, -50%)",
          filter: "blur(5px)",
          boxShadow: "0 0 20px 5px rgba(168, 85, 247, 0.5)",
        }}
      />

      {/* Audio toggle */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-purple-500/50 hover:border-pink-500 transition-all duration-300"
      >
        <Wifi className={`w-5 h-5 ${audioEnabled ? "text-pink-500" : "text-gray-400"}`} />
      </button>

      {/* Background effects */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-purple-950/20 to-black opacity-70" />

      {/* Header */}
      <NexusHeader activeSection={activeSection} />

      {/* Hero section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-cover opacity-20" />

        <motion.div
          className="container mx-auto text-center z-10 mt-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={fadeInVariants}>
            <NeonText
              text="NEXUSWEB"
              className="text-6xl md:text-8xl font-extrabold mb-4"
              primaryColor="#a855f7"
              secondaryColor="#ec4899"
              glowStrength={10}
            />
          </motion.div>

          <motion.h2 variants={fadeInVariants} className="text-xl md:text-2xl mb-8 text-gray-300">
            Expériences Digitales Immersives & Futuristes
          </motion.h2>

          <motion.div variants={fadeInVariants} className="flex flex-col md:flex-row gap-4 justify-center">
            <CyberButton onClick={() => servicesRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Découvrir nos services <ChevronRight className="ml-2 w-5 h-5" />
            </CyberButton>

            <CyberButton variant="outline" onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}>
              Démarrer un projet
            </CyberButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-purple-500" />
        </motion.div>
      </section>

      {/* Services section */}
      <section id="services" ref={servicesRef} className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="NOS SERVICES" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nous créons des expériences digitales qui transcendent les limites du possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "Expériences Web Immersives",
                description:
                  "Sites web interactifs avec animations 3D, effets parallaxe et interfaces futuristes qui captent l'attention.",
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: "Développement Front-end Avancé",
                description:
                  "Interfaces utilisateur de nouvelle génération avec WebGL, Three.js et les dernières technologies web.",
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: "Intelligence Artificielle",
                description:
                  "Intégration d'IA conversationnelle, analyse prédictive et systèmes de recommandation personnalisés.",
              },
              {
                icon: <Database className="w-10 h-10" />,
                title: "Applications Web Progressives",
                description:
                  "Applications performantes fonctionnant en ligne et hors ligne avec des fonctionnalités natives.",
              },
              {
                icon: <Layers className="w-10 h-10" />,
                title: "Réalité Augmentée Web",
                description:
                  "Expériences AR accessibles directement depuis le navigateur sans installation d'application.",
              },
              {
                icon: <Shield className="w-10 h-10" />,
                title: "Cybersécurité Avancée",
                description: "Protection des données et des applications avec les dernières technologies de sécurité.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.1,
                    },
                  },
                }}
              >
                <HolographicCard>
                  <div className="p-6">
                    <div className="w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mb-6 border border-purple-500/50">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology section */}
      <section id="tech" ref={techRef} className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-cover opacity-10" />

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="TECHNOLOGIES" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Notre stack technologique de pointe pour créer des expériences digitales révolutionnaires
            </p>
          </motion.div>

          <Tabs defaultValue="frontend" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="frontend" className="data-[state=active]:bg-purple-900/50">
                Front-end
              </TabsTrigger>
              <TabsTrigger value="backend" className="data-[state=active]:bg-purple-900/50">
                Back-end
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-purple-900/50">
                Outils
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="frontend"
              className="border border-purple-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["React", "Three.js", "WebGL", "GSAP", "Framer Motion", "Tailwind CSS", "TypeScript", "Next.js"].map(
                  (tech, index) => (
                    <motion.div
                      key={index}
                      className="p-4 border border-purple-500/30 rounded-lg text-center hover:border-pink-500/50 transition-all duration-300 hover:bg-purple-900/20"
                      whileHover={{ y: -5, scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <p className="font-medium">{tech}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent
              value="backend"
              className="border border-purple-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Node.js", "GraphQL", "MongoDB", "Firebase", "Supabase", "Serverless", "WebSockets", "Redis"].map(
                  (tech, index) => (
                    <motion.div
                      key={index}
                      className="p-4 border border-purple-500/30 rounded-lg text-center hover:border-pink-500/50 transition-all duration-300 hover:bg-purple-900/20"
                      whileHover={{ y: -5, scale: 1.03 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <p className="font-medium">{tech}</p>
                    </motion.div>
                  ),
                )}
              </div>
            </TabsContent>

            <TabsContent
              value="tools"
              className="border border-purple-500/30 rounded-lg p-6 bg-black/50 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Figma", "Blender", "GitHub", "CI/CD", "Docker", "AWS", "Vercel", "Analytics"].map((tech, index) => (
                  <motion.div
                    key={index}
                    className="p-4 border border-purple-500/30 rounded-lg text-center hover:border-pink-500/50 transition-all duration-300 hover:bg-purple-900/20"
                    whileHover={{ y: -5, scale: 1.03 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="font-medium">{tech}</p>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="mt-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h3 className="text-2xl font-bold mb-6">Visualisation des compétences</h3>
            <div className="max-w-3xl mx-auto">
              {[
                { name: "Développement Front-end", value: 95 },
                { name: "Animations & Effets 3D", value: 90 },
                { name: "UX/UI Design", value: 85 },
                { name: "Performance & Optimisation", value: 88 },
                { name: "Intelligence Artificielle", value: 80 },
              ].map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" ref={projectsRef} className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="NOS PROJETS" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Découvrez nos réalisations les plus innovantes et immersives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "NeoVerse",
                category: "Expérience 3D Interactive",
                image: "/placeholder.svg?height=600&width=800",
                description:
                  "Plateforme immersive de visualisation de données avec navigation 3D et interactions en temps réel.",
              },
              {
                title: "Synthwave Portal",
                category: "Site Web Artistique",
                image: "/placeholder.svg?height=600&width=800",
                description: "Galerie d'art numérique avec effets visuels dynamiques et expérience audio réactive.",
              },
              {
                title: "CyberRetail",
                category: "E-commerce Futuriste",
                image: "/placeholder.svg?height=600&width=800",
                description: "Plateforme de shopping avec essayage virtuel et visualisation 3D des produits.",
              },
              {
                title: "Neural Dashboard",
                category: "Interface Analytique",
                image: "/placeholder.svg?height=600&width=800",
                description: "Tableau de bord avec visualisations de données avancées et IA prédictive.",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.8,
                      delay: index * 0.2,
                    },
                  },
                }}
                whileHover="hover"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg border border-purple-500/30">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80" />

                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-end"
                    variants={{
                      hover: {
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.3 },
                      },
                    }}
                    initial={{ y: 20, opacity: 0.8 }}
                  >
                    <span className="text-purple-400 text-sm font-medium mb-2">{project.category}</span>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <CyberButton size="sm">Voir le projet</CyberButton>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <CyberButton variant="outline">Voir tous les projets</CyberButton>
          </motion.div>
        </div>
      </section>

      {/* 3D Experience section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-cover opacity-10" />

        <div className="container mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="EXPÉRIENCE 3D" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explorez notre univers digital en trois dimensions
            </p>
          </motion.div>

          <div className="h-[500px] rounded-lg border border-purple-500/30 overflow-hidden bg-black/30">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 border-4 border-purple-500 rounded-full animate-spin"></div>
                <p className="text-xl text-purple-400">Chargement de l'expérience 3D...</p>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <p className="text-gray-400 mb-6">
              Nos expériences 3D sont optimisées pour les navigateurs modernes et offrent des performances
              exceptionnelles
            </p>
            <CyberButton>Explorer en réalité augmentée</CyberButton>
          </motion.div>
        </div>
      </section>

      {/* Terminal section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <div className="rounded-lg overflow-hidden border border-purple-500/30">
              <div className="bg-gray-900 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="ml-4 text-sm text-gray-400">nexusweb-terminal</div>
              </div>
              <div className="bg-black p-6">
                <div className="font-mono text-sm text-green-500">
                  <div className="mb-2">&gt; Initializing NexusWeb interface...</div>
                  <div className="mb-2">&gt; Loading advanced visualization modules...</div>
                  <div className="mb-2">&gt; Connecting to neural network...</div>
                  <div className="mb-2">&gt; Establishing secure connection...</div>
                  <div>&gt; Welcome to NexusWeb. Ready to create the future?</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" ref={contactRef} className="relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="CONTACT" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prêt à transformer votre vision digitale en réalité ?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>

              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Nom
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Votre nom"
                    className="bg-black/50 border-purple-500/30 focus:border-pink-500 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    className="bg-black/50 border-purple-500/30 focus:border-pink-500 text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Décrivez votre projet..."
                    className="w-full rounded-md bg-black/50 border border-purple-500/30 focus:border-pink-500 text-white placeholder:text-gray-500 p-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                </div>

                <CyberButton type="submit" className="w-full">
                  Envoyer le message
                </CyberButton>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
              }}
            >
              <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">contact@nexusweb.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Téléphone</h4>
                    <p className="text-gray-400">+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Adresse</h4>
                    <p className="text-gray-400">
                      42 Avenue du Futur
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-medium text-white mb-4">Suivez-nous</h4>
                  <div className="flex gap-4">
                    {["twitter", "instagram", "linkedin", "github"].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-10 h-10 rounded-full bg-purple-900/30 flex items-center justify-center border border-purple-500/50 hover:bg-purple-800/50 hover:border-pink-500 transition-all duration-300"
                      >
                        <i className={`fab fa-${social} text-white`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 border border-purple-500/30 rounded-lg bg-black/50 backdrop-blur-sm">
                <h4 className="font-bold text-white mb-2">Horaires</h4>
                <p className="text-gray-400">
                  Lundi - Vendredi: 9h - 18h
                  <br />
                  Weekend: Fermé
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data visualization */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <GlitchText text="DATA FLOW" />
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Visualisation en temps réel de notre écosystème digital
            </p>
          </motion.div>

          <div className="h-[300px] relative border border-purple-500/30 rounded-lg overflow-hidden bg-black/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 border-2 border-t-purple-500 border-r-pink-500 border-b-purple-500 border-l-pink-500 rounded-full animate-spin"></div>
                <p className="text-lg text-purple-400">Chargement des données...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <NexusFooter />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-purple-500/50 hover:border-pink-500 transition-all duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 300 ? 1 : 0 }}
        whileHover={{ y: -5 }}
      >
        <ChevronUp className="w-5 h-5 text-purple-500" />
      </motion.button>
    </main>
  )
}
