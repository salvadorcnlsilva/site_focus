"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Mail, Phone, MessageSquare } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        insuranceType: "",
        message: "",
      })
      onClose()
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#3a52b4]">Contacte-nos</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5 text-[#4d4c4c]" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <>
              <p className="text-[#4d4c4c] mb-6">
                Preencha o formulário abaixo e entraremos em contacto consigo brevemente.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1c1b1b] mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a52b4] focus:border-transparent"
                    placeholder="O seu nome completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1c1b1b] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a52b4] focus:border-transparent"
                    placeholder="o.seu.email@exemplo.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1c1b1b] mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a52b4] focus:border-transparent"
                    placeholder="+351 9XX XXX XXX"
                  />
                </div>

                {/* Insurance Type */}
                <div>
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-[#1c1b1b] mb-1">
                    Tipo de Seguro
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a52b4] focus:border-transparent"
                  >
                    <option value="">Selecione o tipo de seguro</option>
                    <option value="automovel">Seguro Automóvel</option>
                    <option value="habitacao">Seguro Habitação</option>
                    <option value="saude">Seguro de Saúde</option>
                    <option value="vida">Seguro de Vida</option>
                    <option value="comercial">Seguro Comercial</option>
                    <option value="frota">Frota Automóvel</option>
                    <option value="acidentes-trabalho">Acidentes de Trabalho</option>
                    <option value="responsabilidade-civil">Responsabilidade Civil</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1c1b1b] mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3a52b4] focus:border-transparent resize-none"
                    placeholder="Descreva as suas necessidades ou questões..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#3a52b4] hover:bg-[#2a3f8f] text-white py-3 rounded-md transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "A enviar..." : "Enviar Mensagem"}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-[#4d4c4c] mb-3">Ou contacte-nos diretamente:</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#3a52b4]" />
                    <span className="text-sm text-[#4d4c4c]">+351 919 999 999</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-[#3a52b4]" />
                    <span className="text-sm text-[#4d4c4c]">geral@focusseguros.pt</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1b1b] mb-2">Mensagem Enviada!</h3>
              <p className="text-[#4d4c4c] mb-4">
                Obrigado pelo seu contacto. Entraremos em contacto consigo brevemente.
              </p>
              <p className="text-sm text-[#4d4c4c]">Esta janela irá fechar automaticamente...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
