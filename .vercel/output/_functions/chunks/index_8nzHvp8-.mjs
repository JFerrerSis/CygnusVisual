/* empty css               */
import { c as createComponent } from './astro-component_B2yGSP42.mjs';
import './entrypoint_Dp9r-Sdu.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const acceptLanguage = Astro2.request.headers.get("accept-language") || "";
  const preferredLang = acceptLanguage.startsWith("en") ? "en" : "es";
  return Astro2.redirect(`/${preferredLang}`, 302);
}, "/home/jferrer/proyects/CygnusVisual/src/pages/index.astro", void 0);

const $$file = "/home/jferrer/proyects/CygnusVisual/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
