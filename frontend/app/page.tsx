"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import ContactModal from "@/components/contact-modal"

export default function Component() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="bg-[#3a52b4] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden sm:flex items-center space-x-1">
              <Image src="/icons/location.svg" alt="Location" width={16} height={16} className="brightness-0 invert" />
              <span>R. 25 DE ABRIL, 4420-353 S. COSME</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/mail.svg" alt="Email" width={16} height={16} className="brightness-0 invert" />
              <span className="hidden sm:inline">GERAL@FOCUSSEGUROS.PT</span>
              <span className="sm:hidden">Email</span>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/phone.svg" alt="Phone" width={16} height={16} className="brightness-0 invert" />
              <span className="hidden sm:inline">+351 919 999 999</span>
              <span className="sm:hidden">Phone</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/icons/instagram.svg" alt="Instagram" width={16} height={16} className="brightness-0 invert" />
            <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={16} height={16} className="brightness-0 invert" />
            <Image src="/icons/facebook.svg" alt="Facebook" width={16} height={16} className="brightness-0 invert" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`bg-white shadow-sm py-4 px-4 transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/images/logo-azul.png"
              alt="Focus Seguros Logo"
              width={200}
              height={60}
              className="h-8 sm:h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/sobre-nos" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
              SOBRE NÓS
            </a>
            <a
              href="/seguros-particulares"
              className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors"
            >
              SEGUROS PARTICULARES
            </a>
            <a href="/seguros-empresas" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
              SEGUROS EMPRESAS
            </a>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#3a52b4] hover:bg-[#2a3f8f] text-white px-6 py-2 rounded transition-colors"
            >
              CONTACTE-NOS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-[#4d4c4c]" /> : <Menu className="h-6 w-6 text-[#4d4c4c]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="/sobre-nos" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
                SOBRE NÓS
              </a>
              <a
                href="/seguros-particulares"
                className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors"
              >
                SEGUROS PARTICULARES
              </a>
              <a href="/seguros-empresas" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
                SEGUROS EMPRESAS
              </a>
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="bg-[#3a52b4] hover:bg-[#2a3f8f] text-white px-6 py-2 rounded transition-colors w-full"
              >
                CONTACTE-NOS
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for sticky nav */}
      {isScrolled && <div className="h-16 sm:h-20"></div>}

      {/* Hero Section */}
      <section className="relative bg-[#ebebeb] py-10 sm:py-20 min-h-[400px] sm:min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src="/images/family-hero.jpg"
            alt="Happy family - father, mother and daughter smiling together"
            fill
            className="object-cover object-right"
          />
          {/* Fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#ebebeb] via-[#ebebeb]/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 flex items-center min-h-[300px] sm:min-h-[400px]">
          <div className="w-full sm:w-1/2 pr-4 sm:pr-12 z-10">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#3a52b4] mb-2">Proteja</h1>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1c1b1b] mb-2">a sua vida</h1>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1c1b1b] mb-2">e a daqueles que</h1>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#1c1b1b] mb-4 sm:mb-8">o rodeiam</h1>
            <p className="text-[#4d4c4c] text-base sm:text-lg mb-2">Encontramos a solução mais adequada</p>
            <p className="text-[#4d4c4c] text-base sm:text-lg">para todos os seus seguros.</p>
          </div>
        </div>
      </section>

      {/* Car Insurance Section */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-12 flex justify-center">
            <Image
              src="/images/car-thumbs-up.jpg"
              alt="Man giving thumbs up while sitting in car"
              width={280}
              height={360}
              className="object-cover object-center shadow-lg sm:w-[350px] sm:h-[450px]"
              style={{ aspectRatio: "7/9" }}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 flex flex-col justify-center">
            <div className="border-l-4 border-[#3a52b4] pl-6">
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1b1b] mb-2">SEGURO</h2>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1b1b] mb-2">AUTOMÓVEL</h2>
              <h2 className="text-2xl sm:text-4xl font-bold text-[#1c1b1b] mb-4 sm:mb-8">À SUA MEDIDA</h2>
            </div>
            <p className="text-[#4d4c4c] mb-4 leading-relaxed text-sm sm:text-base">
              O seu automóvel é mais do que um meio de transporte - é a sua liberdade, a sua segurança e muitas vezes um
              investimento importante. Na Focus Seguros, compreendemos que cada condutor tem necessidades únicas, por
              isso oferecemos soluções de seguro automóvel completamente personalizadas.
            </p>
            <p className="text-[#4d4c4c] mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Desde a cobertura básica obrigatória até às proteções mais abrangentes, trabalhamos consigo para criar um
              seguro que se adapta perfeitamente ao seu perfil de condução, ao seu veículo e ao seu orçamento. Porque
              acreditamos que um bom seguro automóvel deve proteger não apenas o seu carro, mas também a sua
              tranquilidade.
            </p>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#3a52b4] hover:bg-[#2a3f8f] text-white px-6 sm:px-8 py-2 sm:py-3 rounded transition-colors w-full sm:w-auto"
            >
              CONTACTE-NOS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section className="bg-[#3a52b4] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2">FAÇA O SEU SEGURO</h2>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-0">CONNOSCO AGORA</h2>
            <div className="flex items-center justify-center sm:justify-start mt-4 sm:mt-8">
              <Image src="/icons/mail.svg" alt="Email" width={20} height={20} className="brightness-0 invert mr-2" />
              <span className="text-white text-sm sm:text-base">geral@focusseguros.pt</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/whatsapp.svg"
              alt="WhatsApp"
              width={28}
              height={28}
              className="brightness-0 invert sm:w-8 sm:h-8"
            />
            <Image
              src="/icons/facebook.svg"
              alt="Facebook"
              width={28}
              height={28}
              className="brightness-0 invert sm:w-8 sm:h-8"
            />
            <Image
              src="/icons/instagram.svg"
              alt="Instagram"
              width={28}
              height={28}
              className="brightness-0 invert sm:w-8 sm:h-8"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-8 text-white text-xs sm:text-sm">
            <a href="#" className="hover:underline text-center">
              Política de Privacidade
            </a>
            <a href="#" className="hover:underline text-center">
              Termos e Condições
            </a>
          </div>
        </div>
      </section>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}
