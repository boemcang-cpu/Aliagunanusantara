'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Building,
  Home,
  Factory,
  Car,
  Calendar,
  MapPin,
  Users,
  Award,
  Eye,
  ArrowRight
} from 'lucide-react'

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'office', name: 'Perkantoran' },
    { id: 'industrial', name: 'Industri' },
    { id: 'residential', name: 'Residensial' },
    { id: 'public', name: 'Fasilitas Publik' }
  ]

  const projects = [
    {
      id: 1,
      title: "Gedung Graha Karya",
      category: "office",
      client: "PT. Karya Sejahtera",
      location: "Jakarta Selatan",
      date: "2024",
      area: "12,000 m²",
      duration: "2 tahun",
      description: "Layanan comprehensive cleaning untuk gedung perkantoran 15 lantai dengan fasilitas lengkap termasuk area komersial di lantai dasar.",
      image: "/api/placeholder/600/400",
      features: ["Daily cleaning", "Deep cleaning", "Window cleaning", "Carpet maintenance"],
      result: "95% tenant satisfaction rate"
    },
    {
      id: 2,
      title: "Pabrik Kimia Industri",
      category: "industrial",
      client: "PT. Kimia Nusantara",
      location: "Karawang",
      date: "2023-2024",
      area: "25,000 m²",
      duration: "1 tahun",
      description: "Industrial cleaning khusus untuk area produksi kimia dengan standar keselamatan tinggi dan pengelolaan limbah B3.",
      image: "/api/placeholder/600/400",
      features: ["Chemical cleaning", "Waste management", "Safety compliance", "Emergency response"],
      result: "Zero safety incidents"
    },
    {
      id: 3,
      title: "Apartemen Taman Anggrek",
      category: "residential",
      client: "PT. Properti Sejahtera",
      location: "Bandung",
      date: "2024",
      area: "8,500 m²",
      duration: "6 bulan",
      description: "Layanan kebersihan harian untuk apartemen mewah dengan 300 unit dan fasilitas pendukung lengkap.",
      image: "/api/placeholder/600/400",
      features: ["Daily cleaning", "Lobby maintenance", "Pool cleaning", "Waste management"],
      result: "98% resident satisfaction"
    },
    {
      id: 4,
      title: "Rumah Sakit Kasih Ibu",
      category: "public",
      client: "Yayasan Kesehatan Kasih Ibu",
      location: "Jakarta Timur",
      date: "2023-2024",
      area: "15,000 m²",
      duration: "1 tahun",
      description: "Healthcare cleaning service dengan standar medis untuk rumah sakit tipe B dengan 150 tempat tidur.",
      image: "/api/placeholder/600/400",
      features: ["Medical sanitation", "Disinfection service", "Biohazard handling", "Sterilization"],
      result: "100% health compliance"
    },
    {
      id: 5,
      title: "Gedung Pemerintah",
      category: "office",
      client: "Kantor Walikota",
      location: "Bandung",
      date: "2023",
      area: "10,000 m²",
      duration: "6 bulan",
      description: "Layanan kebersihan untuk kompleks kantor pemerintah dengan area publik yang tinggi.",
      image: "/api/placeholder/600/400",
      features: ["Public area cleaning", "Event support", "Waste management", "Ground maintenance"],
      result: "Excellent service rating"
    },
    {
      id: 6,
      title: "Mall City Center",
      category: "public",
      client: "PT. Retail Maju",
      location: "Jakarta Pusat",
      date: "2022-2024",
      area: "35,000 m²",
      duration: "2 tahun",
      description: "Comprehensive cleaning untuk mall dengan 200 tenant dan traffic pengunjung 20,000 orang/hari.",
      image: "/api/placeholder/600/400",
      features: ["Mall cleaning", "Parking management", "Waste handling", "Event cleaning"],
      result: "90% tenant retention"
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'office': return <Building className="w-4 h-4" />
      case 'industrial': return <Factory className="w-4 h-4" />
      case 'residential': return <Home className="w-4 h-4" />
      case 'public': return <Car className="w-4 h-4" />
      default: return <Building className="w-4 h-4" />
    }
  }

  const getCategoryName = (category: string) => {
    const cat = categories.find(c => c.id === category)
    return cat ? cat.name : 'Other'
  }

  return (
    <section id="portfolio" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Proyek-Proyek Unggulan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami bangga telah melayani berbagai klien dari berbagai sektor dengan hasil yang memuaskan dan standar kualitas tertinggi
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={filter === category.id ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary hover:text-white"}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-0 shadow-lg card-hover">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building className="w-16 h-16 text-primary/30" />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary border-0">
                    {getCategoryIcon(project.category)}
                    <span className="ml-1">{getCategoryName(project.category)}</span>
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-accent text-white border-0">
                    {project.date}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Project Info */}
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Project Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-medium">Klien:</span>
                    <span className="ml-1">{project.client}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-medium">Lokasi:</span>
                    <span className="ml-1">{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-medium">Durasi:</span>
                    <span className="ml-1">{project.duration}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.features.length - 2} lagi
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Result */}
                <div className="bg-accent/10 rounded-lg p-3 mb-4">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 text-accent mr-2" />
                    <span className="text-sm font-medium text-accent">{project.result}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  <Eye className="w-4 h-4 mr-2" />
                  Lihat Detail
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Prestasi Kami dalam Angka
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hasil kerja keras dan dedikasi kami dalam melayani klien dengan standar tertinggi
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Klien Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Tertarik Bekerja Sama dengan Kami?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Mari diskusikan kebutuhan kebersihan Anda dan dapatkan solusi terbaik dari tim profesional kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Calendar className="w-5 h-5 mr-2" />
              Jadwalkan Konsultasi
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Eye className="w-5 h-5 mr-2" />
              Lihat Studi Kasus
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection