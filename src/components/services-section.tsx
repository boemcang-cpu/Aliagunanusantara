'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building,
  Home,
  Factory,
  Car,
  TreePine,
  Wrench,
  Clock,
  Users,
  Shield,
  Sparkles,
  Droplets,
  Wind,
  CheckCircle
} from 'lucide-react'

const ServicesSection = () => {
  const mainServices = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "General Cleaning Services",
      description: "Layanan pembersihan rutin dan berkala untuk semua jenis bangunan dengan standar kualitas tinggi",
      features: [
        "Pembersihan lantai dan karpet",
        "Pencucian kaca dan jendela",
        "Pembersihan ruang tunggu dan lobi",
        "Sanitasi toilet dan kamar mandi",
        "Pengelolaan sampah dan limbah"
      ],
      color: "bg-blue-500"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Cleaning",
      description: "Solusi pembersihan khusus untuk area industri dengan peralatan dan teknik yang sesuai",
      features: [
        "Pembersihan mesin dan peralatan",
        "Degreasing dan penghilangan oli",
        "Pembersihan area produksi",
        "Handling limbah B3",
        "Confined space cleaning"
      ],
      color: "bg-orange-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Specialized Cleaning",
      description: "Layanan pembersihan khusus dengan teknik dan peralatan yang disesuaikan kebutuhan",
      features: [
        "Post-construction cleaning",
        "Deep cleaning dan sanitasi",
        "Fogging dan disinfectant",
        "Marble polishing",
        "High pressure water jet"
      ],
      color: "bg-purple-500"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Environmental Services",
      description: "Layanan ramah lingkungan dengan produk dan metode yang berkelanjutan",
      features: [
        "Gardening dan landscaping",
        "Pest control terpadu",
        "Waste management system",
        "Green cleaning program",
        "Water treatment"
      ],
      color: "bg-green-500"
    }
  ]

  const buildingTypes = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Perkantoran",
      description: "Corporate offices, business centers, co-working spaces"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Residensial",
      description: "Apartments, condominiums, housing complexes, villas"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industri",
      description: "Factories, warehouses, manufacturing plants, workshops"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Fasilitas Publik",
      description: "Malls, hospitals, schools, airports, government buildings"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Fasilitas Khusus",
      description: "Laboratories, data centers, clean rooms, pharmaceutical facilities"
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: "Area Eksterior",
      description: "Parking areas, building facades, outdoor spaces, gardens"
    }
  ]

  const cleaningMethods = [
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Wet Cleaning",
      description: "Metode pembersihan basah untuk hasil maksimal"
    },
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Dry Cleaning",
      description: "Teknik pembersihan kering untuk area sensitif"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sanitization",
      description: "Disinfeksi dan sterilisasi dengan bahan berkualitas"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Scheduled Cleaning",
      description: "Penjadwalan rutin harian, mingguan, atau bulanan"
    }
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Layanan Kebersihan Profesional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Layanan yang kami sediakan meliputi pembersihan harian, mingguan, hingga berkala untuk perkantoran, gedung komersial, industri, fasilitas publik, area residensial, serta ruang interior dan eksterior bangunan
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg card-hover">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Building Types */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Jenis Bangunan yang Kami Layani
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami memiliki pengalaman dalam melayani berbagai jenis bangunan dengan kebutuhan yang berbeda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildingTypes.map((building, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg card-hover">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    {building.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{building.title}</h4>
                  <p className="text-muted-foreground text-sm">{building.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cleaning Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Metode Kerja Kami
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menerapkan metode kerja yang efisien, ramah lingkungan, serta berorientasi pada kepuasan pelanggan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaningMethods.map((method, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent">
                    {method.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{method.title}</h4>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Features */}
        <div className="bg-primary text-white rounded-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Mengapa Layanan Kami Berbeda?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Tim Terlatih & Bersertifikat</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Tenaga profesional yang telah melalui pelatihan intensif dan sertifikasi di bidangnya
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Asuransi & Jaminan</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Perlindungan penuh untuk aset klien dengan jaminan kepuasan 100%
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Fleksibilitas Waktu</h4>
                    <p className="text-primary-foreground/80 text-sm">
                      Layanan 24/7 dengan penjadwalan yang disesuaikan kebutuhan operasional Anda
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-primary-foreground/80 text-sm">Dukungan Darurat</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-primary-foreground/80 text-sm">Kepuasan</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">A+</div>
                <div className="text-primary-foreground/80 text-sm">Grade Chemical</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-accent mb-2">5+</div>
                <div className="text-primary-foreground/80 text-sm">Tahun Pengalaman</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Butuh Solusi Kebersihan Kustom?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Kami siap memberikan konsultasi gratis dan merancang program kebersihan yang sesuai dengan kebutuhan spesifik Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Konsultasi Gratis
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection