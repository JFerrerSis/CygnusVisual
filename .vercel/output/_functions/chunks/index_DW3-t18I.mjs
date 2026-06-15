/* empty css               */
import { c as createComponent } from './astro-component_BZwXg0cz.mjs';
import { m as maybeRenderHead, k as renderTemplate, h as addAttribute, o as renderComponent } from './entrypoint_CIt0mbzC.mjs';
import { r as renderScript, $ as $$BaseLayout, a as $$Hero, b as $$Services, c as $$About, d as $$Team, e as $$Location, f as $$Contact } from './Contact_DiRu3Xni.mjs';

const $$Portfolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Portfolio;
  Astro2.props.t;
  const videos = [
    {
      id: 1,
      title: "Reel Campaña Verano 2024",
      category: "Instagram",
      platform: "Instagram",
      duration: "0:30",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Campaña de verano para marca de moda. +50k reproducciones en 7 días.",
      stats: { views: "50k", likes: "3.2k" }
    },
    {
      id: 2,
      title: "Spot Publicitario - Marca X",
      category: "YouTube",
      platform: "YouTube",
      duration: "1:15",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Spot para televisión y redes sociales. Producción completa con equipo profesional.",
      stats: { views: "100k", comments: "500" }
    },
    {
      id: 3,
      title: "Tutorial: Tips de Marketing",
      category: "TikTok",
      platform: "TikTok",
      duration: "2:45",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Contenido educativo viral. +200k reproducciones y alto engagement.",
      stats: { views: "200k", shares: "5k" }
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="portfolio" class="py-24 bg-gray-50"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <!-- ==================== ENCABEZADO ==================== --> <div class="text-center max-w-3xl mx-auto mb-16"> <div class="inline-flex items-center gap-2 px-4 py-1.5 bg-azul-rey/5 rounded-full border border-azul-rey/10 mb-6"> <svg class="w-4 h-4 text-azul-rey" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path> </svg> <span class="text-xs font-semibold text-azul-rey uppercase tracking-wider">Portafolio</span> </div> <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
Nuestros<span class="text-azul-rey"> Trabajos</span> </h2> <div class="w-20 h-1 bg-azul-rey mx-auto mb-6"></div> <p class="text-gray-500 text-lg max-w-2xl mx-auto">
Proyectos reales que han potenciado la presencia digital de nuestras marcas aliadas
</p> </div> <!-- ==================== FILTROS ==================== --> <div class="flex flex-wrap justify-center gap-3 mb-12"> ${["Todos", "Redes Sociales", "Publicidad", "Branding", "Motion Graphics"].map((filter) => renderTemplate`<button class="filter-btn px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-azul-rey hover:text-white border border-gray-200 bg-white text-gray-600"> ${filter} </button>`)} </div> <!-- ==================== GRID DE VIDEOS ==================== --> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto" id="video-grid"> ${videos.map((video) => renderTemplate`<div class="video-card group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"${addAttribute(video.id, "data-video-id")}> <div class="relative aspect-video bg-gray-900 overflow-hidden"> <img${addAttribute(video.thumbnail, "src")}${addAttribute(video.title, "alt")} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"> <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"> <div class="w-16 h-16 bg-azul-rey rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"> <svg class="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M5 3l14 9-14 9V3z"></path> </svg> </div> </div> <span class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">${video.duration}</span> <span class="absolute top-2 left-2 bg-azul-rey/90 text-white text-xs px-2 py-1 rounded-md">${video.platform}</span> </div> <div class="p-5"> <h3 class="font-bold text-gray-800 mb-2">${video.title}</h3> <p class="text-gray-500 text-sm mb-3">${video.description}</p> <div class="flex items-center gap-3 text-xs text-gray-400"> <span class="flex items-center gap-1">📱 ${video.stats.views} views</span> ${video.stats.likes && renderTemplate`<span class="flex items-center gap-1">❤️ ${video.stats.likes} likes</span>`} ${video.stats.comments && renderTemplate`<span class="flex items-center gap-1">💬 ${video.stats.comments}</span>`} ${video.stats.shares && renderTemplate`<span class="flex items-center gap-1">🔁 ${video.stats.shares} shares</span>`} </div> </div> </div>`)} </div> <!-- ==================== BOTÓN VER MÁS ==================== --> <div class="text-center mt-12"> <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 hover:border-azul-rey hover:text-azul-rey transition-all duration-300"> <span>Ver más proyectos</span> <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </section> <!-- ==================== MODAL LIGHTBOX ==================== --> <div id="video-modal" class="fixed inset-0 bg-black/95 z-50 hidden items-center justify-center p-4"> <div class="relative w-full max-w-5xl"> <button id="close-modal" class="absolute -top-12 right-0 text-white hover:text-azul-rey transition-colors"> <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <div class="aspect-video bg-black rounded-xl overflow-hidden"> <iframe id="video-iframe" class="w-full h-full" src="" frameborder="0" allowfullscreen></iframe> </div> <div id="modal-info" class="mt-4 text-white"> <h3 id="modal-title" class="text-xl font-bold"></h3> <p id="modal-description" class="text-gray-400 text-sm mt-1"></p> </div> </div> </div> ${renderScript($$result, "/home/jferrer/proyects/CygnusVisual/src/components/Portfolio.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/jferrer/proyects/CygnusVisual/src/components/Portfolio.astro", void 0);

const nav = {"home":"Inicio","services":"Servicios","about":"Nosotros","team":"Equipo","location":"Ubicación","contact":"Contacto"};
const hero = {"badge":"Agencia de Marketing & Producción Audiovisual","slogan":"Marketing Audiovisual en RRSS • LATAM™","servicesList":["Diseño","Branding","Fotografía","Vídeo","Gestión RRSS","Producción Audiovisual"],"cta":"Contáctanos","whatsapp":"WhatsApp","badgeAgency":"AGENCIA AUDIOVISUAL","badgeServices":"SERVICIOS","scroll":"SCROLL","stats":{"followers":"+200%","followersLabel":"Crecimiento promedio","projects":"100%","projectsLabel":"Satisfacción cliente","following":"24/7","followingLabel":"Soporte continuo"}};
const services = {"title":"NUESTROS SERVICIOS","subtitle":"Soluciones creativas y profesionales para potenciar tu marca","design":{"title":"Diseño Gráfico","description":"Creamos identidades visuales únicas que reflejan la esencia de tu marca.","items":["Logotipo","Paleta de colores","Tipografía","Post RRSS","Stickers","Mockups","Manual de Marca","Branding completo"]},"advertising":{"title":"Material Publicitario","description":"Diseños impactantes que capturan atención y comunican tu mensaje.","items":["Flyers","Carteles","Tarjetas de Presentación","Catálogos","Invitaciones","Redes Sociales","Diseño de Merch","Empaques y más"]},"additional":{"title":"También ofrecemos","items":[{"title":"Gestión de RRSS","description":"Community management, estrategia y crecimiento"},{"title":"Edición de Videos","description":"Edición profesional, motion graphics y post-producción"},{"title":"Planificación","description":"Calendario editorial, estrategia y contenido"},{"title":"Creación","description":"Fotografía profesional, diseño y contenido original"}]},"cta":"Solicita información"};
const about = {"title":"Sobre Nosotros","description":"En Cygnus Visual combinamos tecnología de vanguardia con creatividad ilimitada. Somos una agencia especializada en marketing audiovisual para redes sociales, combinando creatividad, estrategia y tecnología para potenciar tu marca en LATAM.","mission":"Misión: Democratizar el acceso a contenido visual de alta calidad.","vision":"Visión: Ser referentes en innovación visual en Latinoamérica."};
const team = {"title":"Nuestro Equipo","subtitle":"Profesionales apasionados por lo que hacen","members":[{"name":"Ana Martínez","role":"Directora Creativa","bio":"10+ años de experiencia en diseño y dirección de arte."},{"name":"Laura Gómez","role":"Productora Audiovisual","bio":"Experta en producción de video y fotografía profesional."},{"name":"Carlos López","role":"Community Manager","bio":"Estrategias de crecimiento en redes sociales."}]};
const location = {"title":"Nuestra Ubicación","address":"LATAM — Operaciones en toda la región","schedule":"Lunes a Viernes: 9:00 - 18:00","mapLink":"#"};
const contact = {"title":"Contacto","subtitle":"¿Listo para potenciar tu marca? Escríbenos","name":"Nombre","email":"Correo electrónico","message":"Mensaje","send":"Enviar mensaje","whatsapp":"Contáctanos por WhatsApp"};
const footer = {"rights":"Todos los derechos reservados","social":"Síguenos en redes"};
const translations = {
  nav,
  hero,
  services,
  about,
  team,
  location,
  contact,
  footer,
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "es", "title": "Cygnus Visual - Soluciones Visuales" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "t": translations })} ${renderComponent($$result2, "Services", $$Services, { "t": translations })} ${renderComponent($$result2, "Portfolio", $$Portfolio, { "t": translations })} ${renderComponent($$result2, "About", $$About, { "t": translations })} ${renderComponent($$result2, "Team", $$Team, { "t": translations })} ${renderComponent($$result2, "Location", $$Location, { "t": translations })} ${renderComponent($$result2, "Contact", $$Contact, { "t": translations })} ` })}`;
}, "/home/jferrer/proyects/CygnusVisual/src/pages/es/index.astro", void 0);

const $$file = "/home/jferrer/proyects/CygnusVisual/src/pages/es/index.astro";
const $$url = "/es";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
