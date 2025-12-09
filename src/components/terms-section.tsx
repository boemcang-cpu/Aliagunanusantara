'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  FileText, 
  Shield, 
  AlertCircle, 
  CheckCircle, 
  Users, 
  Scale,
  Gavel,
  Clock
} from 'lucide-react'

const TermsSection = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Penggunaan Website",
      content: [
        "Website ini disediakan untuk informasi tentang layanan kebersihan PT ALIA GUNA NUSANTARA",
        "Pengguna setuju untuk menggunakan website untuk tujuan yang sah dan legal",
        "Dilarang melakukan aktivitas yang merusak, mengganggu, atau ilegal",
        "Kami berhak membatasi atau menghentikan akses jika terjadi pelanggaran"
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Hak dan Kewajiban Pengguna",
      content: [
        "Hak: Mengakses informasi layanan, menghubungi kami, request konsultasi",
        "Kewajiban: Memberikan informasi akurat, menghormati hak kekayaan intelektual",
        "Kewajiban: Tidak melakukan spam, phishing, atau aktivitas penipuan",
        "Hak: Privasi data sesuai kebijakan privasi yang berlaku"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hak dan Kewajiban Perusahaan",
      content: [
        "Hak: Menyediakan informasi akurat tentang layanan",
        "Hak: Memperbarui konten website tanpa pemberitahuan sebelumnya",
        "Kewajiban: Melindungi data pengguna sesuai GDPR",
        "Kewajiban: Merespons pertanyaan dan permintaan layanan"
      ]
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Batasan Tanggung Jawab",
      content: [
        "Website disediakan 'as is' tanpa jaminan tersurat maupun tersirat",
        "Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung",
        "Kami tidak menjamin website bebas error atau gangguan teknis",
        "Link eksternal bukan tanggung jawab kami"
      ]
    }
  ]

  const serviceTerms = [
    {
      title: "Kualitas Layanan",
      description: "Kami berkomitmen menyediakan layanan kebersihan dengan standar tertinggi sesuai kesepakatan kontrak",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Pembayaran",
      description: "Pembayaran dilakukan sesuai invoice dan ketentuan yang disepakati dalam kontrak",
      icon: <FileText className="w-5 h-5" />
    },
    {
      title: "Jaminan",
      description: "Kami memberikan jaminan kepuasan dengan perbaikan gratis jika hasil tidak sesuai standar",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Asuransi",
      description: "Semua layanan dilindungi asuransi untuk memberikan perlindungan maksimal kepada klien",
      icon: <Scale className="w-5 h-5" />
    }
  ]

  const prohibitedActivities = [
    "Mencoba mendapatkan akses tidak sah ke sistem kami",
    "Mengirim virus, malware, atau kode berbahaya lainnya",
    "Melakukan spam atau mengirim email komersial tanpa persetujuan",
    "Menggunakan website untuk tujuan ilegal atau tidak etis",
    "Mengganggu atau mengganggu pengguna lain",
    "Menyalin, mendistribusikan, atau mengeksploitasi konten tanpa izin",
    "Mencoba mengidentifikasi pengguna lain tanpa izin mereka",
    "Melakukan kegiatan yang melanggar hukum atau peraturan"
  ]

  const intellectualProperty = [
    {
      title: "Hak Cipta",
      description: "Semua konten website termasuk teks, gambar, logo, dan desain dilindungi hak cipta"
    },
    {
      title: "Merek Dagang",
      description: "PT ALIA GUNA NUSANTARA dan logo terkait adalah merek dagang terdaftar"
    },
    {
      title: "Penggunaan Terbatas",
      description: "Konten hanya boleh digunakan untuk tujuan informasi pribadi atau bisnis yang sah"
    },
    {
      title: "Pelarangan Reproduksi",
      description: "Dilarang mereproduksi, mendistribusikan, atau membuat karya turunan tanpa izin tertulis"
    }
  ]

  return (
    <section id="terms" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary-20">
            Syarat & Ketentuan
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Syarat & Ketentuan Penggunaan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Aturan dan ketentuan yang mengatur penggunaan website dan layanan PT ALIA GUNA NUSANTARA
          </p>
        </div>

        {/* Introduction */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gavel className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Penerimaan Syarat & Ketentuan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dengan mengakses dan menggunakan website PT ALIA GUNA NUSANTARA, Anda setuju untuk terikat 
                  oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan bagian manapun dari syarat dan ketentuan ini, 
                  Anda tidak boleh menggunakan website atau layanan kami. Syarat & Ketentuan ini berlaku untuk semua pengguna 
                  website dan layanan yang kami sediakan.
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

        {/* Service Terms */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Ketentuan Layanan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceTerms.map((term, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    {term.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{term.title}</h4>
                    <p className="text-sm text-muted-foreground">{term.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prohibited Activities */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Aktivitas yang Dilarang</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Hak Kekayaan Intelektual</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {intellectualProperty.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dispute Resolution */}
        <Card className="p-8 border-0 shadow-lg mb-12">
          <CardContent className="pt-0">
            <h3 className="text-2xl font-bold text-primary mb-6">Penyelesaian Sengketa</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">Prosedur Mediasi</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Diskusi informal terlebih dahulu</li>
                    <li>• Mediasi oleh pihak ketiga netral</li>
                    <li>• Negosiasi untuk mencapai kesepakatan</li>
                    <li>• Solusi win-win untuk kedua belah pihak</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">Yurisdiksi Hukum</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Hukum Republik Indonesia berlaku</li>
                    <li>• Pengadilan Negeri Bandung berwenang</li>
                    <li>• Arbitrase sebagai alternatif penyelesaian</li>
                    <li>• Putusan bersifat final dan mengikat</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates & Contact */}
        <Card className="p-8 border-0 shadow-lg">
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Pembaruan Syarat & Ketentuan</h3>
                <p className="text-muted-foreground mb-4">
                  Kami berhak mengubah Syarat & Ketentuan ini sewaktu-waktu. Perubahan akan berlaku efektif 
                  setelah dipublikasikan di website. Pengguna disarankan untuk secara berkala meninjau 
                  Syarat & Ketentuan ini.
                </p>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">
                    Update terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">Hubungi Kami</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: legal@aliagunanusantara.com</p>
                  <p>Telepon: 0821-6472-6502</p>
                  <p>Alamat: JALAN SUKAPURART 01RW 06, Kel.Sukapura, Kec.Dayeuhkolot kab.Bandung</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default TermsSection