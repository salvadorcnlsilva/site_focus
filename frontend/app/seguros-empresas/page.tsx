"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, Building, Truck, Users, Shield } from "lucide-react"
import Link from "next/link"
import ContactModal from "@/components/contact-modal"

export default function SegurosEmpresas() {
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
            <Link href="/">
              <Image
                src="/images/logo-azul.png"
                alt="Focus Seguros Logo"
                width={200}
                height={60}
                className="h-8 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/sobre-nos" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
              SOBRE NÓS
            </Link>
            <Link
              href="/seguros-particulares"
              className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors"
            >
              SEGUROS PARTICULARES
            </Link>
            <Link
              href="/seguros-empresas"
              className="text-[#3a52b4] hover:text-[#3a52b4] font-medium transition-colors border-b-2 border-[#3a52b4]"
            >
              SEGUROS EMPRESAS
            </Link>
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
              <Link href="/sobre-nos" className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors">
                SOBRE NÓS
              </Link>
              <Link
                href="/seguros-particulares"
                className="text-[#4d4c4c] hover:text-[#3a52b4] font-medium transition-colors"
              >
                SEGUROS PARTICULARES
              </Link>
              <Link
                href="/seguros-empresas"
                className="text-[#3a52b4] hover:text-[#3a52b4] font-medium transition-colors"
              >
                SEGUROS EMPRESAS
              </Link>
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

      {/* Page Header */}
      <section className="bg-[#ebebeb] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#3a52b4] mb-4">Seguros Empresas</h1>
          <p className="text-xl sm:text-2xl text-[#4d4c4c]">Proteja o seu negócio e colaboradores</p>
        </div>
      </section>

      {/* Business Insurance Types */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Commercial Property */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3a52b4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] text-center mb-3">Seguro Comercial</h3>
              <p className="text-[#4d4c4c] text-center mb-4">Proteja as instalações e equipamentos da sua empresa.</p>
              <ul className="text-sm text-[#4d4c4c] space-y-2 mb-6">
                <li>• Incêndio e Explosão</li>
                <li>• Roubo e Vandalismo</li>
                <li>• Danos Elétricos</li>
                <li>• Perda de Exploração</li>
              </ul>
            </div>

            {/* Fleet Insurance */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3a52b4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] text-center mb-3">Frota Automóvel</h3>
              <p className="text-[#4d4c4c] text-center mb-4">Seguro para frotas de veículos comerciais.</p>
              <ul className="text-sm text-[#4d4c4c] space-y-2 mb-6">
                <li>• Responsabilidade Civil</li>
                <li>• Danos Próprios</li>
                <li>• Mercadorias Transportadas</li>
                <li>• Assistência 24h</li>
              </ul>
            </div>

            {/* Workers Insurance */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3a52b4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] text-center mb-3">Acidentes de Trabalho</h3>
              <p className="text-[#4d4c4c] text-center mb-4">Proteja os seus colaboradores no local de trabalho.</p>
              <ul className="text-sm text-[#4d4c4c] space-y-2 mb-6">
                <li>• Morte e Invalidez</li>
                <li>• Incapacidade Temporária</li>
                <li>• Despesas de Tratamento</li>
                <li>• Responsabilidade Civil</li>
              </ul>
            </div>

            {/* Liability Insurance */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#3a52b4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] text-center mb-3">Responsabilidade Civil</h3>
              <p className="text-[#4d4c4c] text-center mb-4">Proteja-se contra reclamações de terceiros.</p>
              <ul className="text-sm text-[#4d4c4c] space-y-2 mb-6">
                <li>• Danos a Terceiros</li>
                <li>• Produtos Defeituosos</li>
                <li>• Responsabilidade Profissional</li>
                <li>• Defesa Jurídica</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-16 sm:py-20 bg-[#ebebeb]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1b1b] text-center mb-12">Vantagens para Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1c1b1b] mb-6">Soluções Empresariais Completas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#3a52b4] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1b1b]">Consultoria Especializada</h4>
                    <p className="text-[#4d4c4c] text-sm">Análise completa dos riscos do seu negócio</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#3a52b4] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1b1b]">Gestão Centralizada</h4>
                    <p className="text-[#4d4c4c] text-sm">Todos os seus seguros numa única apólice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#3a52b4] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1b1b]">Descontos por Volume</h4>
                    <p className="text-[#4d4c4c] text-sm">Preços especiais para empresas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#3a52b4] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1c1b1b]">Apoio Dedicado</h4>
                    <p className="text-[#4d4c4c] text-sm">Gestor de conta exclusivo para a sua empresa</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/images/construction-workers.png"
                alt="Equipa de trabalho em reunião de segurança"
                width={500}
                height={400}
                className="object-cover shadow-lg"
              />
            </div>
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
