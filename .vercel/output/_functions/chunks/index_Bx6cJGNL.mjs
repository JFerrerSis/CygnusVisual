/* empty css               */
import { c as createComponent } from './astro-component_BZwXg0cz.mjs';
import { o as renderComponent, k as renderTemplate } from './entrypoint_CIt0mbzC.mjs';
import { $ as $$BaseLayout, a as $$Hero, b as $$Services, c as $$About, d as $$Team, e as $$Location, f as $$Contact } from './Contact_DiRu3Xni.mjs';

const nav = {"home":"Home","services":"Services","about":"About","team":"Team","location":"Location","contact":"Contact"};
const hero = {"badge":"Marketing & Audiovisual Production Agency","title":"CYGNUS VISUAL","slogan":"Audiovisual Marketing on Social Media • LATAM™","services":"Design | Branding | Photography | Video | Social Media Management | Audiovisual Production","cta":"Contact us","whatsapp":"WhatsApp","badgeAgency":"AUDIOVISUAL AGENCY","badgeServices":"SERVICES","scroll":"SCROLL","stats":{"followers":"+200%","followersLabel":"Average growth","projects":"100%","projectsLabel":"Client satisfaction","following":"24/7","followingLabel":"Continuous support"}};
const services = {"title":"OUR SERVICES","subtitle":"Creative and professional solutions to boost your brand","design":{"title":"Graphic Design","description":"We create unique visual identities that reflect the essence of your brand.","items":["Logo","Color Palette","Typography","Social Media Posts","Stickers","Mockups","Brand Manual","Complete Branding"]},"advertising":{"title":"Advertising Material","description":"Impactful designs that capture attention and communicate your message.","items":["Flyers","Posters","Business Cards","Catalogs","Invitations","Social Media","Merchandise Design","Packaging"]},"additional":{"title":"We also offer","items":[{"title":"Social Media Management","description":"Community management, strategy and growth"},{"title":"Video Editing","description":"Professional editing, motion graphics and post-production"},{"title":"Content Planning","description":"Editorial calendar, strategy and scheduled content"},{"title":"Content Creation","description":"Professional photography, design and original content"}]},"cta":"Request information"};
const about = {"title":"About Us","description":"At Cygnus Visual we combine cutting-edge technology with unlimited creativity. We are an agency specialized in audiovisual marketing for social media, combining creativity, strategy and technology to boost your brand in LATAM.","mission":"Mission: Democratize access to high-quality visual content.","vision":"Vision: Be leaders in visual innovation in Latin America."};
const team = {"title":"Our Team","subtitle":"Professionals passionate about what they do","members":[{"name":"Ana Martínez","role":"Creative Director","bio":"10+ years of experience in design and art direction."},{"name":"Laura Gómez","role":"Audiovisual Producer","bio":"Expert in video production and professional photography."},{"name":"Carlos López","role":"Community Manager","bio":"Growth strategies on social networks."}]};
const location = {"title":"Our Location","address":"LATAM — Operations throughout the region","schedule":"Monday to Friday: 9:00 - 18:00","mapLink":"#"};
const contact = {"title":"Contact","subtitle":"Ready to boost your brand? Write to us","name":"Name","email":"Email","message":"Message","send":"Send message","whatsapp":"Contact us on WhatsApp"};
const footer = {"rights":"All rights reserved","social":"Follow us on social media"};
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "lang": "en", "title": "Cygnus Visual - Visual Solutions" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "t": translations })} ${renderComponent($$result2, "Services", $$Services, { "t": translations })} ${renderComponent($$result2, "About", $$About, { "t": translations })} ${renderComponent($$result2, "Team", $$Team, { "t": translations })} ${renderComponent($$result2, "Location", $$Location, { "t": translations })} ${renderComponent($$result2, "Contact", $$Contact, { "t": translations })} ` })}`;
}, "/home/jferrer/proyects/CygnusVisual/src/pages/en/index.astro", void 0);

const $$file = "/home/jferrer/proyects/CygnusVisual/src/pages/en/index.astro";
const $$url = "/en";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
