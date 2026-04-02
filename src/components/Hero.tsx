import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <>
      <section
        id="hero"
        className="pt-24 pb-16 lg:pt-32 lg:pb-32 px-6 max-w-7xl mx-auto scroll-mt-40"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-5 py-2 bg-orange-100 rounded-full text-orange-600 font-bold mb-6 shadow-sm border border-orange-200">
              Olá, eu sou a Talita.
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Desenvolvedora <br className="hidden lg:block" />
              <span className="text-blue-600">Front-end.</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Trago a minha vivência na resolução de problemas críticos para a
              construção de interfaces. Utilizo{" "}
              <span className="text-blue-600 font-bold">
                React, TypeScript e Tailwind
              </span>{" "}
              para desenvolver aplicações escaláveis e focadas na experiência
              real do usuário.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#projetos"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2"
              >
                Ver Projetos <ArrowRight size={20} />
              </a>

              <a
                href="#contato"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2 border border-gray-200"
              >
                <Mail size={20} className="text-gray-500" />
                Contato
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <div className="w-md h-112 bg-orange-100 rounded-[3rem] overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl border-4 border-white">
              <img
                src="/me.png"
                alt="Foto da Talita, Desenvolvedora Front-end"
                className="w-full h-full object-cover object-[65%_center]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
