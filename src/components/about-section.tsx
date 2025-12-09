'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Eye, 
  Target, 
  Heart, 
  Award, 
  FileCheck,
  Users,
  Clock,
  CheckCircle,
  Building,
  Shield
} from 'lucide-react'

const AboutSection = () => {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integritas",
      description: "Kami menjunjung tinggi kejujuran dan transparansi dalam setiap layanan yang kami berikan"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Kualitas",
      description: "Standar kualitas tertinggi dalam setiap aspek pelayanan kebersihan"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Profesionalisme",
      description: "Tim yang terlatih dan berpengalaman dalam industri jasa kebersihan"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Kepedulian",
      description: "Memahami dan memprioritaskan kebutuhan serta kepuasan pelanggan"
    }
  ]

  const certifications = [
    {
      name: "Sertifikasi ISO 9001:2015",
      description: "Sistem Manajemen Mutu",
      icon: <FileCheck className="w-8 h-8" />
    },
    {
      name: "Sertifikasi K3",
      description: "Keselamatan dan Kesehatan Kerja",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "Sertifikasi Halal",
      description: "Produk Pembersih Halal",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "Sertifikasi Lingkungan",
      description: "Manajemen Lingkungan ISO 14001",
      icon: <Building className="w-8 h-8" />
    }
  ]

  const timeline = [
    {
      year: "2014",
      title: "Berdiri",
      description: "PT ALIA GUNA NUSANTARA didirikan dengan visi menjadi penyedia jasa kebersihan terkemuka"
    },
    {
      year: "2016",
      title: "Ekspansi Layanan",
      description: "Memperluas jangkauan layanan ke berbagai sektor industri dan komersial"
    },
    {
      year: "2018",
      title: "Sertifikasi ISO",
      description: "Mendapatkan sertifikasi ISO 9001:2015 untuk sistem manajemen mutu"
    },
    {
      year: "2020",
      title: "Digitalisasi",
      description: "Mengimplementasikan sistem manajemen digital untuk efisiensi operasional"
    },
    {
      year: "2024",
      title: "Inovasi Berkelanjutan",
      description: "Terus berinovasi dengan produk ramah lingkungan dan teknologi terkini"
    }
  ]

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            PT ALIA GUNA NUSANTARA
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perusahaan jasa kebersihan profesional yang bergerak di bidang General Cleaning Services dengan komitmen pada integritas dan kualitas tertinggi
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi perusahaan jasa kebersihan terkemuka di Indonesia yang mengutamakan kepuasan pelanggan, keberlanjutan lingkungan, dan standar kualitas internasional dalam setiap layanan yang kami berikan.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <CardContent className="pt-0">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Misi Kami</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Menyediakan layanan kebersihan berkualitas tinggi dengan standar internasional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Mengembangkan tim profesional yang terlatih dan bersertifikat</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Menerapkan praktik ramah lingkungan dalam setiap operasional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                  <span>Memberikan nilai tambah dan solusi inovatif untuk setiap klien</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Nilai-Nilai Inti Kami
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fondasi yang memandu setiap tindakan dan keputusan kami dalam melayani klien
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-accent">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Perjalanan Kami
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sejak berdiri, kami terus berkembang dan berinovasi untuk memberikan layanan terbaik
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8">
                    <Card className="p-6 border-0 shadow-lg">
                      <CardContent className="pt-0">
                        <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                          {item.year}
                        </Badge>
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full border-4 border-white relative z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Legalitas */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
              Sertifikasi & Legalitas
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami fully certified dan memenuhi semua persyaratan legal untuk operasional jasa kebersihan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg text-center card-hover">
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-accent">
                    {cert.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Legal Documents */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-6 text-center">Dokumen Legalitas Perusahaan</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Akta Pendirian Perusahaan</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Nomor Induk Berusaha (NIB)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Surat Izin Usaha Perdagangan (SIUP)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Tanda Daftar Perusahaan (TDP)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">NPWP Perusahaan</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">Sertifikasi Badan Usaha</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection