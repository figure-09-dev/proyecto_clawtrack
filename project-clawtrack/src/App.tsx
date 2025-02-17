import React from 'react';
import { Heart, Bone, Bath, ChevronFirst as FirstAid, UtensilsCrossed, Clock } from 'lucide-react';

const cards = [
  {
    title: "Alimentación Balanceada",
    description: "Una dieta equilibrada es esencial para la salud de tu mascota. Aprende sobre las mejores opciones nutricionales.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Cuidados Médicos",
    description: "Mantén al día las vacunas y visitas regulares al veterinario para prevenir enfermedades.",
    icon: FirstAid,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cf5a0c16?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Higiene Personal",
    description: "La limpieza regular y el aseo son fundamentales para mantener a tu mascota saludable.",
    icon: Bath,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=2071"
  },
  {
    title: "Ejercicio Diario",
    description: "El ejercicio regular mantiene a tu mascota en forma y feliz. Descubre actividades divertidas.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Amor y Atención",
    description: "El cariño y la atención son vitales para el bienestar emocional de tu mascota.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2086"
  },
  {
    title: "Juguetes y Entretenimiento",
    description: "Mantén a tu mascota estimulada mental y físicamente con juguetes apropiados.",
    icon: Bone,
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&q=80&w=2074"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-600 text-center">
            ClawTrack
          </h1>
          <p className="text-gray-600 text-center mt-2">
            Todo lo que necesitas saber para mantener a tu mascota feliz y saludable
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <card.icon className="w-6 h-6 text-blue-500 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-800">
                    {card.title}
                  </h2>
                </div>
                <p className="text-gray-600">
                  {card.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                  Leer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ClawTrack. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;