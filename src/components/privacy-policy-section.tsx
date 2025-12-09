'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'

const PrivacyPolicySection = () => {
  const sections = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Informasi pribadi yang Anda berikan secara sukarela (nama, email, telepon, perusahaan)",
        "Informasi teknis (alamat IP, browser, perangkat, waktu akses)",
        "Informasi penggunaan website (halaman yang dikunjungi, durasi kunjungan)",
        "Informasi komunikasi (pesan, permintaan layanan, konsultasi)"
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Penggunaan Informasi",
      content: [
        "Merpons permintaan layanan dan konsultasi",
        "Mengirimkan informasi tentang layanan kami",
        "Meningkatkan kualitas layanan dan pengalaman pengguna",
        "Mengirimkan newsletter dan update (dengan persetujuan)",
        "Melakukan analisis untuk pengembangan website"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Keamanan Data",
      content: [
        "Enkripsi data selama transmisi menggunakan SSL/TLS",
        "Akses terbatas untuk personil yang berwenang",
        "Server aman dengan firewall dan proteksi malware",
        "Backup data rutin untuk mencegah kehilangan data",
        "Audit keamanan berkala untuk identifikasi vulnerabilitas"
      ]
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Hak Pengguna (GDPR)",
      content: [
        "Hak untuk mengetahui data pribadi yang kami simpan",
        "Hak untuk memperbaiki data yang tidak akurat",
        "Hak untuk menghapus data pribadi (right to be forgotten)",
        "Hak untuk membatasi pemrosesan data",
        "Hak untuk memindahkan data (data portability)",
        "Hak untuk menarik persetujuan kapan saja"
      ]
    }
  ]

  const gdprPrinciples = [
    {
      title: "Kewajaran, Legalitas, dan Transparansi",
      description: "Memproses data secara legal, adil, dan transparan terhadap data subject"
    },
    {
      title: "Batasan Tujuan",
      description: "Mengumpulkan data untuk tujuan spesifik, eksplisit, dan sah"
    },
    {
      title: "Minimasi Data",
      description: "Mengumpulkan data yang memadai dan relevan untuk tujuan yang ditentukan"
    },
    {
      title: "Akurasi",
      description: "Memastikan data yang disimpan akurat dan diperbarui sesuai kebutuhan"
    },
    {
      title: "Batasan Penyimpanan",
      description: "Menyimpan data dalam waktu yang tidak lebih lama dari yang diperlukan"
    },
    {
      title: "Integritas dan Kerahasiaan",
      description: "Memproses data dengan cara yang aman dan melindungi privasi"
    },
    {
      title: "Akuntabilitas",
      description: " Bertanggung jawab atas pemrosesan data dan dapat membuktikan kepatuhan"
    }
  ]

  return (
    <section id="privacy" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Kebijakan Privasi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Kebijakan Privasi & Perlindungan Data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan data pribadi Anda sesuai standar internasional GDPR
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Komitmen Privasi Kami</h3>
                <p className="text-muted-foreground leading-relaxed">
                  PT ALIA GUNA NUSANTARA ("kami") sangat memahami pentingnya privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan 
                  informasi pribadi Anda ketika menggunakan website kami atau menggunakan layanan kami. Kami beroperasi 
                  sesuai dengan General Data Protection Regulation (GDPR) dan peraturan perlindungan data yang berlaku di Indonesia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {sections.map((section, index) => (
            <Card key={index} className="p-6 border-0 shadow-lg">
              <CardContent className="pt-0">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-3">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GDPR Principles */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Prinsip-Prinsip GDPR yang Kami Terapkan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gdprPrinciples.map((principle, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Breach Policy */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Kebijakan Pelanggaran Data</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Kami memiliki prosedur yang jelas untuk menangani pelanggaran data:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Deteksi & Respons</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Pemantauan keamanan 24/7</li>
                    <li>• Tim respons insiden siaga</li>
                    <li>• Investigasi segera setelah deteksi</li>
                    <li>• Dokumentasi lengkap insiden</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary">Notifikasi & Pemulihan</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Notifikasi kepada otoritas dalam 72 jam</li>
                    <li>• Informasi kepada data subject yang terdampak</li>
                    <li>• Langkah mitigasi segera</li>
                    <li>• Review dan perbaikan sistem</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact for Privacy */}
        <Card className="p-8 border-0 shadow-lg">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Hubungi Kami untuk Privasi Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Data Protection Officer (DPO)</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: dpo@aliagunanusantara.com</p>
                  <p>Telepon: 0821-6472-6502</p>
                  <p>Alamat: JALAN SUKAPURART 01RW 06, Kel.Sukapura, Kec.Dayeuhkolot kab.Bandung</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Hak Privasi Anda</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Jika Anda ingin menggunakan hak privasi Anda atau memiliki pertanyaan tentang kebijakan privasi kami, 
                  silakan hubungi DPO kami. Kami akan merespons permintaan Anda dalam waktu 30 hari kerja.
                </p>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Update terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default PrivacyPolicySection