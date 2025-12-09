'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  MessageCircle,
  Users,
  Calendar,
  CheckCircle
} from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "JALAN SUKAPURART 01RW 06, Kel.Sukapura, Kec.Dayeuhkolot kab.Bandung, Provinsi.JawaBarat",
      color: "text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "0821-6472-6502",
      color: "text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@aliagunanusantara.com",
      color: "text-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:00\nSabtu: 08:00 - 12:00\nMinggu: Tutup",
      color: "text-orange-600"
    }
  ]

  const services = [
    "General Cleaning Services",
    "Industrial Cleaning",
    "Specialized Cleaning",
    "Environmental Services",
    "Post-Construction Cleaning",
    "Lainnya"
  ]

  const whyContactUs = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Konsultasi Gratis",
      description: "Tim kami siap memberikan saran terbaik untuk kebutuhan kebersihan Anda"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Tim Profesional",
      description: "Dapatkan informasi langsung dari ahli kebersihan berpengalaman"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Penjadwalan Fleksibel",
      description: "Atur jadwal survei dan konsultasi sesuai kenyamanan Anda"
    }
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Kontak Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Hubungi Kami untuk Solusi Kebersihan Terbaik
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap memberikan layanan kebersihan profesional dengan standar tertinggi untuk kebutuhan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-0">
              <h3 className="text-2xl font-bold text-primary mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telepon *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="0812-3456-7890"
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Perusahaan
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="PT. Example"
                      className="border-gray-300 focus:border-primary focus:ring-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Layanan yang Dibutuhkan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Pilih Layanan</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Jelaskan kebutuhan kebersihan Anda secara detail..."
                    className="border-gray-300 focus:border-primary focus:ring-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <h3 className="text-2xl font-bold text-primary mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 ${info.color}`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why Contact Us */}
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="pt-0">
                <h3 className="text-xl font-bold text-primary mb-6">Mengapa Hubungi Kami?</h3>
                <div className="space-y-4">
                  {whyContactUs.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="p-8 border-0 shadow-lg">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Lokasi Kami</h3>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Peta Lokasi PT ALIA GUNA NUSANTARA</p>
                <p className="text-sm text-gray-500">JALAN SUKAPURART 01RW 06, Kel.Sukapura, Kec.Dayeuhkolot kab.Bandung</p>
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-white">
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Response Info */}
        <div className="mt-12 bg-primary text-white rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Respons Cepat untuk Kebutuhan Anda</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Tim kami siap merespons pertanyaan dan permintaan Anda dalam waktu 24 jam. Dapatkan solusi kebersihan terbaik untuk bisnis Anda.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24 Jam</div>
                <div className="text-primary-foreground/80">Respon Garansi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">7 Hari</div>
                <div className="text-primary-foreground/80">Layanan Seminggu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-primary-foreground/80">Kepuasan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection