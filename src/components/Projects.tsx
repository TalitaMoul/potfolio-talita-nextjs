import { ProjectCard } from "./ProjectCard";
import { CloudSun, ListTodo, Code2, Layers } from "lucide-react";

export function Projects() {
  return (
    <section
      id="projetos"
      className="py-16 lg:py-24 px-6 lg:px-16 xl:px-24 scroll-mt-24"
    >
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 lg:mb-10">
          Meus <span className="text-orange-500">Projetos</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Uma seleção de projetos práticos construídos com as ferramentas mais
          modernas do mercado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <ProjectCard
          icon={
            <CloudSun className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="Weather App"
          description="Previsão em tempo real via consumo de API REST, com foco em performance e interface totalmente responsiva."
          technologies={["React", "JavaScript", "CSS"]}
          demoUrl="https://weather-app-mu-two-20.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/weather_app"
        />

        <ProjectCard
          icon={
            <ListTodo className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="To-Do List PRO"
          description="Gerenciador de tarefas com persistência de dados (LocalStorage) e filtros dinâmicos, desenhado para uma experiência contínua do usuário."
          technologies={["React", "Tailwind", "Vite"]}
          demoUrl="https://task-page-eight.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/Task-Page"
        />

        <ProjectCard
          icon={<Code2 className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="Meu Portfólio"
          description="Desenvolvido com arquitetura de componentes em React e Tailwind CSS, priorizando código limpo, escalabilidade e design responsivo."
          technologies={["React", "Tailwind", "TypeScript"]}
          demoUrl="https://portifolio-talita-react.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/portifolio-talita-react"
        />

        <ProjectCard
          icon={
            <Layers className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="Portfólio v2 — Next.js"
          description="Migração e evolução do portfólio para Next.js com App Router, Server Components e otimização automática de imagens. Inclui galeria de pets com lightbox, menu responsivo e fonte via next/font."
          technologies={["React", "TypeScript", "Tailwind", "Next.js"]}
          demoUrl="#"
          repoUrl="#"
        />
      </div>
    </section>
  );
}

export default Projects;
