"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Photo {
  url: string;
  alt: string;
}

interface PetsAlbumClientProps {
  photos: Photo[];
}

export function PetsAlbumClient({ photos }: PetsAlbumClientProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentIndex === null) return;

      if (event.key === "Escape") {
        setCurrentIndex(null);
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "ArrowLeft") {
        goToPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return prev === photos.length - 1 ? 0 : prev + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? photos.length - 1 : prev - 1;
    });
  };

  return (
    <main className="relative max-w-7xl mx-auto px-6 py-12 lg:py-24 min-h-screen bg-[#FFFAF5]/50">
      <Link
        href="/"
        className="inline-flex items-center text-gray-500 hover:text-orange-500 font-medium mb-12 transition-colors group"
      >
        <ArrowLeft
          className="mr-2 group-hover:-translate-x-1 transition-transform"
          size={20}
        />
        Voltar para o portfólio
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          As verdadeiras <span className="text-orange-500">Tech Leads</span> 🐾
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Responsáveis por revisar meus códigos (deitando no teclado) e garantir
          pausas obrigatórias na rotina.
        </p>
      </div>

      {photos.length === 0 ? (
        <p className="text-gray-500 text-lg">Nenhuma foto encontrada em <code>public/pets/</code>.</p>
      ) : (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {photos.map((photo, index) => (
            <div
              key={photo.url}
              onClick={() => setCurrentIndex(index)}
              className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-sm border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group bg-white"
            >
              <Image
                src={photo.url}
                alt={photo.alt}
                width={800}
                height={600}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ width: "100%", height: "auto" }}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      )}

      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setCurrentIndex(null)}
        >
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Fechar foto"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 text-white hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={32} />
          </button>

          <div
            className="relative flex flex-col items-center justify-center max-w-[85vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[currentIndex].url}
              alt={photos[currentIndex].alt}
              width={1200}
              height={900}
              sizes="90vw"
              style={{ width: "auto", height: "auto", maxHeight: "85vh" }}
              className="rounded-xl shadow-2xl object-contain select-none"
            />
            <div className="absolute -bottom-10 text-white/70 text-sm font-medium">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-white hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Próxima foto"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}
