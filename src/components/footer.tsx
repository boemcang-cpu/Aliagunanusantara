import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary-foreground">
              PT ALIA GUNA NUSANTARA
            </h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Perusahaan jasa kebersihan profesional yang berkomitmen menghadirkan solusi cleaning service yang tepercaya, responsif, dan berstandar tinggi untuk mendukung operasional dan kenyamanan lingkungan kerja maupun hunian klien.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">
                  JALAN SUKAPURART 01RW 06, Kel.Sukapura, Kec.Dayeuhkolot kab.Bandung, Provinsi.JawaBarat
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">0821-6472-6502</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-primary-foreground/80 text-sm">info@aliagunanusantara.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">
              Link Cepat
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors duration-200">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-foreground">
              Jam Operasional
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Senin - Jumat</p>
                  <p className="text-primary-foreground/60 text-xs">08:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Sabtu</p>
                  <p className="text-primary-foreground/60 text-xs">08:00 - 12:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">Minggu</p>
                  <p className="text-primary-foreground/60 text-xs">Tutup</p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} PT ALIA GUNA NUSANTARA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#terms" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer