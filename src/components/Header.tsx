"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Inicio" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className="bg-orange-50/80 backdrop-blur-md sticky top-0 z-50">
      <div className="flex justify-between items-center p-5">
        <div className="font-bold text-2xl text-orange-600 tracking-tight">
          Talita<span className="text-gray-500">.dev</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-600 hover:text-orange-500 transition-colors"
          onClick={() => setMenuAberto((prev) => !prev)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuAberto && (
        <nav className="md:hidden flex flex-col border-t border-orange-100 px-5 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={fecharMenu}
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
