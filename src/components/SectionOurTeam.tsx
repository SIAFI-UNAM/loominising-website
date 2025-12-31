import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    id: 1,
    name: "Aldo Delgado Pimentel",
    position: "Project Manager & Desarrollador Full Stack",
    image: "/team-member-aldo.png",
    description:
      "Líder del equipo con experiencia en gestión de proyectos y desarrollo web. Encargado de coordinar las actividades del equipo y contribuir al desarrollo de la plataforma.",
    bgColor: "from-blue-950 via-blue-950 to-blue-700",
    contacts: {
      email: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 2,
    name: "María González López",
    position: "Ingeniera de Machine Learning",
    image: "/team-member-fernando-ortega.png",
    description:
      "Experta en algoritmos de aprendizaje automático y redes neuronales. Enfocada en desarrollar modelos de IA para procesamiento de imágenes y reconocimiento de patrones artísticos.",
    bgColor: "from-blue-950 via-blue-950 to-blue-700",
    contacts: {
      email: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    name: "Carlos Ramírez Torres",
    position: "Diseñador UX/UI",
    image: "/person.png",
    description:
      "Diseñador con ojo artístico y pasión por la usabilidad. Se especializa en crear interfaces visuales atractivas que facilitan la interacción del usuario con herramientas de IA.",
    bgColor: "from-blue-950 via-blue-950 to-blue-700",
    contacts: {
      email: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    name: "Ana Martínez Silva",
    position: "Científica de Datos",
    image: "/person.png",
    description:
      "Analista de datos con experiencia en procesamiento de grandes volúmenes de información. Especializada en optimización de modelos y análisis de métricas de rendimiento.",
    bgColor: "from-blue-950 via-blue-950 to-blue-700",
    contacts: {
      email: "#",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  },
];

export default function SectionOurTeam() {
  return (
    <>
      <section className="bg-background w-full h-auto flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-center font-bold text-white text-4xl">
            Nuestro Equipo
          </p>
          <p className="text-center text-neutral-300 text-xl mt-2 mb-8 w-2/3">
            Estudiantes de la Facultad de Ingeniería de la UNAM y miembros de
            SIAFI (Sociedad de Inteligencia Artificial de la Facultad de
            Ingeniería). Compartimos una pasión por el dibujo y la inteligencia
            artificial, y nuestro objetivo es ayudar a las personas a mejorar
            sus habilidades artísticas mediante herramientas potenciadas por IA.
          </p>
        </div>
        <div className="w-full flex flex-wrap items-stretch justify-center gap-10 px-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col w-80 h-full"
            >
              <div
                className={`w-full h-96 card-member relative flex items-end justify-center bg-gradient-to-tl ${member.bgColor} overflow-hidden`}
              >
                <Image
                  width={300}
                  height={200}
                  src={member.image}
                  alt={`Miembro ${member.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-2xl mt-2">{member.name}</span>
              <span className="text-neutral-300 text-lg mt-1 min-h-[3.5rem]">
                {member.position}
              </span>
              <span className="text-neutral-100 text-lg mt-5 flex-grow">
                {member.description}
              </span>
              <div className="flex justify-start gap-5 mt-10">
                {/* Email */}
                <Link
                  className="rounded-full hover:bg-[#4e3fec] p-2 transition-colors duration-300"
                  href={member.contacts.email}
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="m1 3.5.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5zm1 1.035V12h12V4.536L8.31 8.9H7.7zM13.03 4H2.97L8 7.869z"
                    />
                  </svg>
                </Link>
                {/* GitHub */}
                <Link
                  className="rounded-full hover:bg-[#4e3fec] p-2 transition-colors duration-300"
                  href={member.contacts.github}
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>
                {/* LinkedIn */}
                <Link
                  className="rounded-full hover:bg-[#4e3fec] p-2 transition-colors duration-300"
                  href={member.contacts.linkedin}
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </Link>
                {/* Twitter/X */}
                <Link
                  className="rounded-full hover:bg-[#4e3fec] p-2 transition-colors duration-300"
                  href={member.contacts.twitter}
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
