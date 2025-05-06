"use client"

import { Mail, Phone, MapPin, ChevronRight } from "lucide-react"

export default function NexusFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/80 border-t border-purple-500/20 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              NEXUS<span className="text-purple-500">WEB</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Créateur d'expériences digitales immersives et futuristes avec des technologies de pointe.
            </p>
            <div className="flex space-x-4">
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

          <div>
            <h4 className="text-lg font-bold mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {["Accueil", "Services", "Technologies", "Projets", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Expériences Web Immersives",
                "Développement Front-end Avancé",
                "Intelligence Artificielle",
                "Applications Web Progressives",
                "Réalité Augmentée Web",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-purple-500 transition-colors duration-300 flex items-center"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">contact@nexusweb.fr</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-purple-500 mr-3 mt-1" />
                <span className="text-gray-400">
                  42 Avenue du Futur
                  <br />
                  75001 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 mt-8 text-center text-gray-500">
          <p>&copy; {currentYear} NexusWeb. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
