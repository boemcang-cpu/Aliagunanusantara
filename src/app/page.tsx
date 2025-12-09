'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Shield, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  Building,
  Home,
  Factory,
  Car,
  TreePine
} from 'lucide-react'

// Import section components
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import PortfolioSection from '@/components/portfolio-section'
import ContactSection from '@/components/contact-section'
import PrivacyPolicySection from '@/components/privacy-policy-section'
import TermsSection from '@/components/terms-section'

const HomePage = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Berstandar Tinggi",
      description: "Menerapkan standar operasional modern dengan sistem quality control yang ketat"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tenaga Profesional",
      description: "Tim yang terlatih dan bersertifikat di bidang jasa kebersihan profesional"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Responsif & Tepat Waktu",
      description: "Pelayanan yang cepat tanggap dan disiplin dalam setiap penjadwalan"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Terpercaya",
      description: "Reputasi terbukti dengan pengalaman melayani berbagai klien korporat"
    }
  ]

  const services = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Perkantoran",
      description: "Pembersihan rutin untuk area kerja, ruang meeting, dan fasilitas kantor"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residensial",
      description: "Layanan kebersihan untuk apartemen, rumah, dan kompleks perumahan"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industri",
      description: "Pembersihan area produksi, gudang, dan fasilitas industri"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Area Publik",
      description: "Kebersihan mall, hotel, rumah sakit, dan fasilitas umum lainnya"
    }
  ]

  const achievements = [
    { number: "500+", label: "Klien Puas" },
    { number: "10+", label: "Tahun Pengalaman" },
    { number: "50+", label: "Tim Profesional" },
    { number: "24/7", label: "Dukungan" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent hover:bg-accent text-white px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Jasa Kebersihan Profesional
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow">
              Solusi Kebersihan Terpercaya untuk Bangunan Anda
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Perusahaan jasa kebersihan profesional yang berkomitmen menghadirkan lingkungan bersih, higienis, dan nyaman dengan standar tertinggi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3">
                Hubungi Kami
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Lihat Layanan
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami menghadirkan solusi cleaning service yang tepercaya, responsif, dan berstandar tinggi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Tentang Kami
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                PT ALIA GUNA NUSANTARA
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sebagai perusahaan jasa kebersihan yang profesional, kami menghadirkan solusi cleaning service yang tepercaya, responsif, dan berstandar tinggi, guna mendukung operasional dan kenyamanan lingkungan kerja maupun hunian klien.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Dengan integritas dan kualitas sebagai prioritas, perusahaan kami siap menjadi mitra terpercaya dalam menjaga kebersihan bangunan Anda.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Sertifikasi Resmi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Asuransi Komprenhensif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Peralatan Modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">Ramah Lingkungan</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg"></div>
                  <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg"></div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg"></div>
                  <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Layanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Layanan Kebersihan Komprehensif
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Layanan yang kami sediakan meliputi pembersihan harian, mingguan, hingga berkala untuk berbagai jenis bangunan dengan metode kerja yang efisien dan ramah lingkungan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover p-6 border-0 shadow-lg">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Lihat Semua Layanan
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 lg:py-24 navy-gradient text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Prestasi & Pengalaman
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Kami bangga telah melayani ratusan klien dengan dedikasi dan komitmen tertinggi
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <div className="text-primary-foreground/80">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Sections */}
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <PrivacyPolicySection />
      <TermsSection />

      {/* Final CTA Section */}
      <section className="py-16 lg:py-24 bg-accent text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Siap Mewujudkan Lingkungan yang Bersih dan Sehat?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik untuk kebutuhan kebersihan bangunan Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold px-8 py-3">
                <TreePine className="w-5 h-5 mr-2" />
                Hubungi Kami Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-accent">
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage