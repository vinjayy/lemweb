'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Globe, Zap, Shield, Target, Users, CheckCircle, ChevronRight, HardHat, Building2, Server, Cctv, Bell, Zap as Lightning, ArrowRight, Award, Info } from 'lucide-react';

// --- COMPONENTS ---

const Navbar = ({ currentPage, setCurrentPage }: { currentPage: string; setCurrentPage: (page: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Our Service' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNav = (id: string) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* LOGO SECTION */}
        <div className="flex items-center cursor-pointer group" onClick={() => handleNav('home')}>
          <img src="/logo.png" alt="Logo" className="h-12 w-auto mr-3" />
          <div>
            <h1 className="text-lg md:text-xl font-bold leading-tight tracking-wider text-[#136193]">LUMAJANG ELECTRICAL</h1>
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#5168fa] font-semibold">METALINDO</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentPage === item.id ? 'bg-[#5168fa] text-white' : 'text-[#136193] hover:bg-[#136193]/10'}`}>
              {item.label}
            </button>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#136193]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`md:hidden absolute w-full bg-white border-b transition-all overflow-hidden ${isOpen ? 'max-h-64 shadow-lg' : 'max-h-0'}`}>
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNav(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all ${currentPage === item.id ? 'bg-[#5168fa] text-white' : 'text-[#136193] hover:bg-[#136193]/5'}`}>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0a3652] text-gray-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center mb-6">
          <img src="/logo.png" alt="Logo" className="h-10 mr-3 rounded" />
          <h2 className="text-white text-sm font-bold">LUMAJANG ELECTRICAL METALINDO</h2>
        </div>
        <p className="text-sm leading-relaxed text-gray-400">Solusi terpercaya untuk instalasi kelistrikan gedung dan industri di seluruh Indonesia dengan mengutamakan standar K3.</p>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6">Layanan</h3>
        <ul className="text-sm space-y-3">
          <li className="flex items-center"><ChevronRight size={14} className="text-[#5168fa] mr-2" /> Instalasi Listrik Gedung</li>
          <li className="flex items-center"><ChevronRight size={14} className="text-[#5168fa] mr-2" /> Panel Listrik & Genset</li>
          <li className="flex items-center"><ChevronRight size={14} className="text-[#5168fa] mr-2" /> CCTV & Alarm System</li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-semibold mb-6">Hubungi Kami</h3>
        <div className="space-y-4 text-sm">
          <p className="flex items-center"><Phone size={16} className="text-[#5168fa] mr-3" /> 0877-4141-0666</p>
          <p className="flex items-center"><Mail size={16} className="text-[#5168fa] mr-3" /> lumajangelectrical@gmail.com</p>
        </div>
      </div>
    </div>
    <div className="border-t border-white/10 mt-12 pt-8 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} Lumajang Electrical Metalindo. All rights reserved.
    </div>
  </footer>
);

// --- PAGE COMPONENTS ---

const Home = ({ setCurrentPage }: { setCurrentPage: (page: string) => void }) => {
  return (
    <div className="animate-fadeIn">
      {/* Banner 1: Hero */}
      <section className="relative h-[90vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image1.png')" }}>
        <div className="absolute inset-0 bg-[#136193]/75"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-6">Expert Electrical <br /> Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto mb-10 text-blue-100">Menangani instalasi listrik gedung, data center, hingga sistem keamanan nasional.</p>
          <button onClick={() => setCurrentPage('services')} className="bg-[#5168fa] hover:bg-blue-600 px-8 py-4 rounded-full font-bold shadow-2xl flex items-center mx-auto group">
            Lihat Layanan <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img src="/image2.png" alt="Kerja Lapangan" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#136193] mb-6">Kontraktor Listrik Berpengalaman</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Lumajang Electrical Metalindo hadir sebagai mitra yang mengedepankan keamanan dan hasil maksimal di setiap jengkal kabel yang kami pasang.
            </p>
            <button onClick={() => setCurrentPage('about')} className="bg-[#136193] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0d456b] transition-all">
              Tentang Kami
            </button>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan: 1 Image */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#136193] mb-4">Layanan Unggulan Kami</h2>
            <p className="text-gray-500">Keahlian teknis tinggi untuk setiap kebutuhan infrastruktur</p>
          </div>
          <div className="relative group rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <img src="/image6.png" alt="Layanan Unggulan" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#136193]/90 to-transparent flex items-center p-8 md:p-16">
              <div className="max-w-md text-white">
                <h3 className="text-3xl font-bold mb-4">Integrasi Sistem Listrik & Keamanan</h3>
                <p className="mb-8 text-blue-50 opacity-90 leading-relaxed">Dari instalasi panel distribusi hingga konfigurasi sistem keamanan CCTV dan Alarm tercanggih.</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm font-semibold"><CheckCircle size={16} className="mr-2" /> Instalasi Gedung</div>
                  <div className="flex items-center text-sm font-semibold"><CheckCircle size={16} className="mr-2" /> Panel Listrik</div>
                  <div className="flex items-center text-sm font-semibold"><CheckCircle size={16} className="mr-2" /> Alarm & CCTV</div>
                  <div className="flex items-center text-sm font-semibold"><CheckCircle size={16} className="mr-2" /> Penangkal Petir</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const About = () => (
  <div className="animate-fadeIn">
    {/* Banner 2 */}
    <div className="h-[50vh] relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image1.png')" }}>
      <div className="absolute inset-0 bg-[#136193]/80"></div>
      <h1 className="relative text-5xl font-bold text-white uppercase tracking-wider">About Us</h1>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#136193] mb-6">Lumajang Electrical Metalindo</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Perusahaan di Indonesia yang bergerak di bidang electrical contractor. Kami sudah menangani berbagai proyek untuk pembuatan gedung di bagian instalasi kelistrikan dan beberapa bidang yang lainnya.
          </p>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-xl border-l-8 border-[#5168fa]">
          <h3 className="text-2xl font-bold text-[#136193] mb-4">VISI</h3>
          <p className="text-gray-600 italic">"Menjadi perusahaan yang terpercaya, handal dan kompetitif dalam membangun suatu proyek yang kami kerjakan agar mendapat hasil yang maksimal."</p>
        </div>
      </div>

      <div className="bg-[#136193] p-12 rounded-3xl text-white">
        <h3 className="text-2xl font-bold mb-8 text-center uppercase tracking-widest">Core Values</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white/10 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">INOVASI</h4>
            <p className="text-blue-100 text-sm">Memberi nilai tambah berkelanjutan bagi pelanggan.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">FOKUS</h4>
            <p className="text-blue-100 text-sm">Mengutamakan kualitas dan nilai tambah yang ditawarkan.</p>
          </div>
          <div className="p-6 bg-white/10 rounded-2xl">
            <h4 className="font-bold text-xl mb-3">PEDULI</h4>
            <p className="text-blue-100 text-sm">Fokus terhadap orang lain dan lingkungan sekitar.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CountingNumber = ({ value, duration = 1000 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}</span>;
};

const Services = () => {
  const galleryProjects = [
    { id: 1, name: "SpaceX Starlink", year: "2024" },
    { id: 2, name: "Bali Beach Hotel", year: "2024" },
    { id: 3, name: "Equinix Data Center", year: "2024" },
    { id: 4, name: "Transmart Mall", year: "2024" },
    { id: 5, name: "Office Tower Jakarta", year: "2024" },
    { id: 7, name: "Data Center JK-6", year: "2024" },
    { id: 8, name: "Villa Uluwatu", year: "2024" },
    { id: 9, name: "Starlink Ground Station", year: "2024" },
    { id: 10, name: "Laboratory Tech Park", year: "2024" },
  ];

  const allProjects = [
    { year: "2024", name: "BW Digital Data Center Batam" },
    { year: "2024", name: "PT. Data Center Indonesia JK-6 Cibitung" },
    { year: "2024", name: "Equinix Data Center Jakarta" },
    { year: "2024", name: "Dakota Data Center Batam" },
    { year: "2024", name: "Bali Beach Hotel" },
    { year: "2024", name: "3R Hotel Manado" },
    { year: "2024", name: "Hotel The Zuri Lubuk Linggau" },
    { year: "2024", name: "PT. Data Center Indonesia JK-5 Cibitung" },
    { year: "2024", name: "Transmart Cilegon" },
    { year: "2024", name: "Hotel Yello Jambi" },
    { year: "2024", name: "Hotel The Zuri Palembang" },
    { year: "2024", name: "Hotel Surya Tretes Pasuruan" },
  ];

  const stats = [
    { label: "SpaceX Starlink", count: 10, icon: <Lightning className="text-yellow-500" size={24} /> },
    { label: "Hotel/Villa", count: 12, icon: <Building2 className="text-[#5168fa]" size={24} /> },
    { label: "Mall", count: 6, icon: <Globe className="text-green-500" size={24} /> },
    { label: "Data Center", count: 12, icon: <Server className="text-orange-500" size={24} /> },
    { label: "Office/Lab", count: 4, icon: <HardHat className="text-gray-500" size={24} /> },
  ];

  return (
    <div className="animate-fadeIn">
      {/* Banner 3 */}
      <div className="h-[50vh] relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image1.png')" }}>
        <div className="absolute inset-0 bg-[#136193]/80"></div>
        <h1 className="relative text-5xl font-bold text-white uppercase tracking-wider">Services & Projects</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Gallery Project */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-[#136193] text-center mb-12">Gallery Project</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {galleryProjects.map((p) => (
              <div key={p.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <img src={`/p${p.id}.jpeg`} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg leading-tight">{p.name}</h3>
                  <p className="text-blue-400 text-sm font-semibold">{p.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* New Statistics Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#136193] mb-8 border-b pb-4 uppercase tracking-wider text-center">Proyek yang sudah kami kerjakan</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="mb-4 bg-white p-3 rounded-full shadow-sm">{stat.icon}</div>
                  <div className="text-2xl font-black text-[#136193] mb-1">
                    <CountingNumber value={stat.count} />
                  </div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-tighter text-center">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* List Project */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-[#136193] mb-8 border-b pb-4 uppercase tracking-wider">Daftar Pengalaman Proyek</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {allProjects.map((p, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 hover:bg-gray-50 px-2 transition-colors">
                <span className="text-gray-700 font-medium">{p.name}</span>
                <span className="text-[#5168fa] font-bold text-sm">{p.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <div className="animate-fadeIn">
    {/* Banner 4 */}
    <div className="h-[50vh] relative flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/image1.png')" }}>
      <div className="absolute inset-0 bg-[#136193]/80"></div>
      <h1 className="relative text-5xl font-bold text-white uppercase tracking-wider">Contact Us</h1>
    </div>

    <div className="max-w-4xl mx-auto px-4 py-24">
      <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start">
              <MapPin className="text-[#5168fa] mr-4 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Kantor Utama</h3>
                <p className="text-gray-600 text-sm">Dusun BEDOK 1, RT/RW: 006/005, Tempeh Lor, Lumajang - Jawa Timur</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="text-[#5168fa] mr-4 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <p className="text-gray-600 text-sm">0877-4141-0666</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <Mail className="mx-auto text-[#136193] mb-4" size={40} />
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-[#5168fa] font-semibold">lumajangelectrical@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FloatingWhatsApp = () => (
  <a href="https://wa.me/6287741410666" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] flex items-center group">
    <span className="mr-3 bg-white text-[#128C7E] text-sm font-bold px-4 py-2 rounded-xl shadow-lg border border-gray-100 group-hover:-translate-x-1 transition-transform">WhatsApp Kami</span>
    <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg group-hover:scale-110 transition-all duration-300">
      <Phone size={28} />
    </div>
  </a>
);

// --- MAIN APP ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}