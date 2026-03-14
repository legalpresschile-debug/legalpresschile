import React from "react";

const WA_BASE = "https://wa.me/56950390399";
const WA_GENERAL = `${WA_BASE}?text=Hola%2C%20necesito%20evaluar%20mi%20caso%20laboral%20municipal.`;
const WA_HONORARIOS = `${WA_BASE}?text=Hola%2C%20trabajo%20a%20honorarios%20en%20una%20municipalidad%20y%20quiero%20evaluar%20mi%20caso.`;
const WA_KARIN = `${WA_BASE}?text=Hola%2C%20quiero%20consultar%20un%20caso%20de%20Ley%20Karin%20en%20una%20municipalidad.`;

const services = [
  {
    icon: "⚖️",
    title: "Tutela laboral y derechos fundamentales",
    description:
      "Hostigamiento, represalias, discriminación, menoscabo, afectación de la integridad psíquica. El arma más potente del Código del Trabajo.",
  },
  {
    icon: "📄",
    title: "Honorarios con relación laboral encubierta",
    description:
      "Cuando llevas años trabajando como honorario con funciones permanentes y subordinación real. Es mi especialidad y conozco la jurisprudencia.",
  },
  {
    icon: "🏛️",
    title: "No renovación de contrata y despido",
    description:
      "Defensa frente a términos arbitrarios, sin fundamento real o con motivación política. Análisis de decretos y toda la cadena documental.",
  },
  {
    icon: "🛡️",
    title: "Defensa en sumarios administrativos",
    description:
      "Representación técnica desde los descargos hasta la impugnación. Conozco el procedimiento desde adentro.",
  },
  {
    icon: "💰",
    title: "Cobro de prestaciones e indemnizaciones",
    description:
      "Nulidad del despido, cotizaciones, feriados, horas extras, indemnizaciones legales y daño moral cuando corresponde.",
  },
  {
    icon: "🎯",
    title: "Estrategia antes de demandar",
    description:
      "Revisión completa del caso antes de iniciar cualquier acción. A veces conviene negociar, a veces urge demandar. Siempre se decide con criterio técnico.",
  },
];

const problems = [
  { num: "01", title: "Despido injustificado de funcionario municipal" },
  { num: "02", title: "No renovación arbitraria de contrata" },
  { num: "03", title: "Honorario municipal que encubre relación laboral" },
  { num: "04", title: "Sumario administrativo en municipalidad" },
  { num: "05", title: "Hostigamiento, exclusión de funciones o menoscabo" },
  { num: "06", title: "Represalias por licencia médica" },
  { num: "07", title: "Personal Código del Trabajo en corporación municipal" },
  { num: "08", title: "Acoso laboral y/o sexual — Ley Karin" },
];

const process = [
  { num: "1", title: "Contacto inicial", text: "Me escribes por WhatsApp con un resumen de tu situación y los documentos disponibles." },
  { num: "2", title: "Evaluación del caso", text: "Reviso antecedentes, identifico el tipo de vínculo, el problema jurídico y la urgencia." },
  { num: "3", title: "Estrategia clara", text: "Te explico si conviene negociar, reclamar administrativamente o demandar judicialmente." },
  { num: "4", title: "Representación", text: "Si decides avanzar, me hago cargo del caso completo con foco técnico y probatorio." },
];

const faqs = [
  {
    q: "¿Puedo demandar si soy honorario municipal?",
    a: "Sí. Muchos vínculos a honorarios encubren una relación laboral real. Si tienes funciones permanentes, horario fijo y subordinación efectiva, la ley puede reconocerte como trabajador dependiente. Hay que analizar el caso concreto.",
  },
  {
    q: "¿Cuánto tiempo tengo para actuar después de un despido?",
    a: "Depende de la acción. La tutela laboral tiene 60 días hábiles desde el despido. Para otras acciones los plazos varían. Mientras antes consultes, más opciones tendrás disponibles.",
  },
  {
    q: "¿Trabajas solo con funcionarios de planta?",
    a: "No. Atiendo funcionarios de planta y contrata, trabajadores a honorarios, personal de corporaciones municipales y cualquier trabajador regido por el Código del Trabajo en el ámbito municipal.",
  },
  {
    q: "¿Qué documentos necesito para la evaluación inicial?",
    a: "Lo que tengas disponible: contrato o decreto de nombramiento, correos, WhatsApp, liquidaciones, licencias médicas, resoluciones o cualquier antecedente que muestre cómo trabajabas realmente.",
  },
  {
    q: "¿Atiendes casos de Ley Karin en municipalidades?",
    a: "Sí. Tanto a víctimas de acoso laboral o sexual como a funcionarios investigados. Las municipalidades están obligadas a aplicar el protocolo de la Ley Karin y hay acciones disponibles cuando no lo hacen.",
  },
  {
    q: "¿Cómo son los honorarios del estudio?",
    a: "Depende del caso. En algunos asuntos se trabaja con honorario fijo, en otros con participación en el resultado. Lo conversamos en la evaluación inicial con transparencia.",
  },
];

const styles = `
  *{margin:0;padding:0;box-sizing:border-box}
  :root{
    --ink:#0f0f0f;
    --ink2:#3a3a3a;
    --muted:#6b6b6b;
    --line:#e2e2e2;
    --bg:#fafaf8;
    --white:#ffffff;
    --accent:#1a3a5c;
    --accent2:#c8a96e;
    --danger:#8b1a1a;
  }
  body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--ink);line-height:1.6}
  a{text-decoration:none;color:inherit}
  nav{position:sticky;top:0;z-index:100;background:rgba(250,250,248,0.97);border-bottom:1px solid var(--line);backdrop-filter:blur(8px)}
  .nav-inner{max-width:1100px;margin:0 auto;padding:0 2rem;height:64px;display:flex;align-items:center;justify-content:space-between}
  .logo-main{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:var(--ink);letter-spacing:-0.5px}
  .logo-sub{font-size:11px;color:var(--muted);letter-spacing:0.08em;text-transform:uppercase}
  .nav-links{display:flex;gap:2rem;font-size:14px;font-weight:500;color:var(--ink2)}
  .nav-links a:hover{color:var(--accent)}
  .nav-cta{background:var(--accent);color:#fff;padding:10px 22px;border-radius:6px;font-size:14px;font-weight:600;transition:background 0.2s}
  .nav-cta:hover{background:#0d2840}
  .hero{max-width:1100px;margin:0 auto;padding:80px 2rem 60px;display:grid;grid-template-columns:1.1fr 0.9fr;gap:60px;align-items:center}
  .hero-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--white);border:1px solid var(--line);padding:6px 14px;border-radius:4px;font-size:12px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:var(--muted);margin-bottom:24px}
  .hero-eyebrow-dot{width:6px;height:6px;border-radius:50%;background:var(--accent2);display:inline-block}
  h1{font-family:'Playfair Display',serif;font-size:clamp(32px,4.5vw,52px);font-weight:900;line-height:1.1;letter-spacing:-1px;color:var(--ink);margin-bottom:20px}
  h1 em{font-style:normal;color:var(--accent)}
  .hero-sub{font-size:17px;color:var(--ink2);line-height:1.7;margin-bottom:32px;max-width:500px}
  .hero-btns{display:flex;gap:12px;flex-wrap:wrap}
  .btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#fff;padding:14px 28px;border-radius:6px;font-size:15px;font-weight:600;transition:background 0.2s}
  .btn-primary:hover{background:#0d2840}
  .btn-secondary{display:inline-flex;align-items:center;gap:8px;border:1.5px solid var(--line);background:var(--white);color:var(--ink);padding:14px 24px;border-radius:6px;font-size:15px;font-weight:500;transition:border-color 0.2s}
  .btn-secondary:hover{border-color:var(--accent)}
  .hero-trust{margin-top:36px;display:flex;gap:20px;flex-wrap:wrap}
  .trust-chip{font-size:12px;font-weight:500;color:var(--muted);display:flex;align-items:center;gap:6px}
  .trust-chip::before{content:'';width:16px;height:1px;background:var(--accent2)}
  .hero-card{background:var(--white);border:1px solid var(--line);border-radius:12px;overflow:hidden;box-shadow:0 4px 40px rgba(0,0,0,0.06)}
  .card-header{background:var(--accent);padding:24px;color:#fff}
  .card-header-label{font-size:11px;letter-spacing:0.15em;text-transform:uppercase;opacity:0.7;margin-bottom:4px}
  .card-header-title{font-family:'Playfair Display',serif;font-size:20px;font-weight:700}
  .card-body{padding:24px}
  .card-item{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--line)}
  .card-item:last-child{border-bottom:none}
  .card-icon{width:32px;height:32px;border-radius:6px;background:rgba(26,58,92,0.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
  .card-text{font-size:14px;color:var(--ink2);line-height:1.5}
  .card-text strong{color:var(--ink);font-weight:600;display:block;font-size:13px;margin-bottom:2px}
  .urgency-bar{background:rgba(200,169,110,0.12);border:1px solid var(--accent2);border-radius:8px;padding:14px 18px;margin:0 24px 24px;text-align:center;font-size:13px;color:var(--ink2)}
  .urgency-bar strong{color:var(--accent);font-weight:600}
  .section{max-width:1100px;margin:0 auto;padding:80px 2rem}
  .section-eyebrow{font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--accent2);margin-bottom:12px}
  h2{font-family:'Playfair Display',serif;font-size:clamp(26px,3.5vw,40px);font-weight:800;line-height:1.15;letter-spacing:-0.5px;margin-bottom:16px}
  .section-desc{font-size:16px;color:var(--ink2);max-width:560px;line-height:1.7}
  .problems-grid{margin-top:48px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px}
  .problem-card{background:var(--white);border:1px solid var(--line);border-radius:10px;padding:20px;transition:border-color 0.2s,box-shadow 0.2s}
  .problem-card:hover{border-color:var(--accent);box-shadow:0 2px 20px rgba(26,58,92,0.08)}
  .problem-num{font-size:11px;font-weight:700;letter-spacing:0.12em;color:var(--accent2);margin-bottom:8px}
  .problem-title{font-size:15px;font-weight:600;color:var(--ink);line-height:1.4}
  .section-dark{background:var(--accent);padding:80px 0}
  .section-dark-inner{max-width:1100px;margin:0 auto;padding:0 2rem}
  .services-grid{margin-top:48px;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:20px}
  .service-card{background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:10px;padding:28px;transition:background 0.2s}
  .service-card:hover{background:rgba(255,255,255,0.1)}
  .service-icon{font-size:24px;margin-bottom:16px;display:block}
  .service-title{font-size:16px;font-weight:600;color:#fff;margin-bottom:8px}
  .service-desc{font-size:14px;color:rgba(255,255,255,0.65);line-height:1.6}
  .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
  .why-stats{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:36px}
  .stat-box{background:var(--white);border:1px solid var(--line);border-radius:10px;padding:20px}
  .stat-num{font-family:'Playfair Display',serif;font-size:36px;font-weight:900;color:var(--accent);line-height:1}
  .stat-label{font-size:13px;color:var(--muted);margin-top:4px}
  .why-right{display:flex;flex-direction:column;gap:16px}
  .why-item{display:flex;gap:16px;align-items:flex-start;background:var(--white);border:1px solid var(--line);border-radius:10px;padding:20px}
  .why-num{font-family:'Playfair Display',serif;font-size:28px;font-weight:900;color:var(--line);line-height:1;flex-shrink:0}
  .why-text h3{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:4px}
  .why-text p{font-size:14px;color:var(--muted);line-height:1.6}
  .karin-banner{background:rgba(139,26,26,0.06);border:1px solid rgba(139,26,26,0.2);border-radius:12px;padding:32px 36px;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;margin-top:48px}
  .karin-badge{display:inline-block;background:var(--danger);color:#fff;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;padding:4px 10px;border-radius:4px;margin-bottom:10px}
  .karin-title{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--ink);margin-bottom:8px}
  .karin-desc{font-size:14px;color:var(--ink2);line-height:1.6;max-width:540px}
  .karin-cta{background:var(--danger);color:#fff;padding:14px 26px;border-radius:6px;font-size:14px;font-weight:600;white-space:nowrap;transition:background 0.2s;display:inline-block}
  .karin-cta:hover{background:#6b1313}
  .process-grid{margin-top:48px;display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
  .process-step{background:var(--white);border:1px solid var(--line);border-radius:10px;padding:24px 20px}
  .process-step-num{width:40px;height:40px;border-radius:50%;background:var(--accent);color:#fff;font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
  .process-step h3{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:6px}
  .process-step p{font-size:13px;color:var(--muted);line-height:1.6}
  .faq-grid{margin-top:48px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
  .faq-item{background:var(--white);border:1px solid var(--line);border-radius:10px;padding:24px}
  .faq-q{font-size:15px;font-weight:600;color:var(--ink);margin-bottom:10px}
  .faq-a{font-size:14px;color:var(--ink2);line-height:1.7}
  .cta-banner{background:var(--ink);border-radius:16px;padding:60px 48px;text-align:center;margin:0 2rem 80px}
  .cta-banner-inner{max-width:1100px;margin:0 auto}
  .cta-eyebrow{font-size:11px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:var(--accent2);margin-bottom:16px}
  .cta-banner h2{font-family:'Playfair Display',serif;color:#fff;margin-bottom:16px}
  .cta-banner p{font-size:16px;color:rgba(255,255,255,0.65);max-width:500px;margin:0 auto 32px}
  .cta-btns{display:flex;justify-content:center;gap:16px;flex-wrap:wrap}
  .btn-gold{background:var(--accent2);color:var(--ink);padding:14px 28px;border-radius:6px;font-size:15px;font-weight:700;transition:opacity 0.2s;display:inline-block}
  .btn-gold:hover{opacity:0.9}
  .phone-chip{border:1.5px solid rgba(255,255,255,0.25);color:#fff;padding:14px 24px;border-radius:6px;font-size:15px;font-weight:500;display:inline-flex;align-items:center}
  footer{background:var(--ink);border-top:1px solid rgba(255,255,255,0.08);padding:40px 2rem}
  .footer-inner{max-width:1100px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px}
  .footer-logo{font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff}
  .footer-sub{font-size:12px;color:rgba(255,255,255,0.4);margin-top:2px}
  .footer-right{font-size:13px;color:rgba(255,255,255,0.5)}
  .wa-float{position:fixed;bottom:24px;right:24px;z-index:200;background:#25D366;color:#fff;border-radius:50px;padding:14px 22px;display:flex;align-items:center;gap:10px;font-size:14px;font-weight:700;box-shadow:0 4px 20px rgba(37,211,102,0.4);transition:transform 0.2s}
  .wa-float:hover{transform:translateY(-2px)}
  .divider{border:none;border-top:1px solid var(--line);margin:0}
  .white-section{background:var(--white);padding:80px 0}
  @media(max-width:900px){
    .hero{grid-template-columns:1fr}
    .hero-card{display:none}
    .why-grid{grid-template-columns:1fr}
    .process-grid{grid-template-columns:1fr 1fr}
    .faq-grid{grid-template-columns:1fr}
    .karin-banner{grid-template-columns:1fr}
    .nav-links{display:none}
  }
  @media(max-width:600px){
    .process-grid{grid-template-columns:1fr}
    .why-stats{grid-template-columns:1fr 1fr}
    .cta-banner{padding:40px 24px;margin:0 1rem 60px}
  }
`;

export default function App() {
  return (
    <>
      <style>{styles}</style>

      {/* Floating WhatsApp */}
      <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="wa-float">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Consultar ahora
      </a>

      {/* NAV */}
      <nav>
        <div className="nav-inner">
          <div>
            <div className="logo-main">LegalPressChile</div>
            <div className="logo-sub">Abogado Eduardo Yévenes</div>
          </div>
          <div className="nav-links">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#ley-karin">Ley Karin</a>
            <a href="#faq">Preguntas</a>
          </div>
          <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="nav-cta">
            Evaluar mi caso →
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            Defensa laboral municipal en Chile
          </div>
          <h1>¿La municipalidad<br />terminó tu contrato?<br /><em>Tienes derechos.</em></h1>
          <p className="hero-sub">
            Funcionarios, honorarios y personal Código del Trabajo. Despidos, no renovación de contrata, hostigamiento y Ley Karin. Evaluación seria, estrategia clara.
          </p>
          <div className="hero-btns">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Consultar por WhatsApp
            </a>
            <a href="#servicios" className="btn-secondary">Ver servicios →</a>
          </div>
          <div className="hero-trust">
            <span className="trust-chip">26 años de experiencia</span>
            <span className="trust-chip">Atención directa del abogado</span>
            <span className="trust-chip">Solo sector municipal</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-header">
            <div className="card-header-label">Estudio Jurídico</div>
            <div className="card-header-title">Eduardo Yévenes<br />LegalPressChile</div>
          </div>
          <div className="card-body">
            {[
              ["⚖️", "Especialización única", "Conflictos laborales del ámbito municipal: contratas, honorarios, sumarios, Ley Karin"],
              ["📋", "Análisis documental completo", "Decretos, contratos, correos, liquidaciones, resoluciones"],
              ["🎯", "Estrategia antes de demandar", "Negociar, recurrir administrativamente o litigar: se decide con criterio"],
              ["🤝", "Atención directa", "Hablas con el abogado. Sin intermediarios."],
            ].map(([icon, title, desc]) => (
              <div className="card-item" key={title}>
                <div className="card-icon">{icon}</div>
                <div className="card-text"><strong>{title}</strong>{desc}</div>
              </div>
            ))}
          </div>
          <div className="urgency-bar">
            Los plazos laborales son breves.<br /><strong>No esperes demasiado para consultar.</strong>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PROBLEMS */}
      <section className="section" id="problemas">
        <div className="section-eyebrow">Casos frecuentes</div>
        <h2>¿Cuál es tu situación?</h2>
        <p className="section-desc">Trabajo con personas del ámbito municipal que enfrentan conflictos reales. Si tu situación es alguna de estas, puedo ayudarte.</p>
        <div className="problems-grid">
          {problems.map((p) => (
            <div className="problem-card" key={p.num}>
              <div className="problem-num">{p.num}</div>
              <div className="problem-title">{p.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-dark" id="servicios">
        <div className="section-dark-inner">
          <div className="section-eyebrow" style={{ color: "#c8a96e" }}>Servicios jurídicos</div>
          <h2 style={{ color: "#fff" }}>Defensa en cada etapa del conflicto</h2>
          <p className="section-desc" style={{ color: "rgba(255,255,255,0.7)" }}>Desde el análisis inicial hasta la sentencia o el acuerdo. Sin asesoría genérica.</p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <span className="service-icon">{s.icon}</span>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="white-section">
        <div className="section why-grid" style={{ padding: "0 2rem" }}>
          <div>
            <div className="section-eyebrow">Por qué este estudio</div>
            <h2>No es asesoría genérica.<br />Es defensa con foco.</h2>
            <p style={{ fontSize: 16, color: "var(--ink2)", lineHeight: 1.8, marginBottom: 16 }}>
              Los conflictos en municipalidades tienen su propio lenguaje: contratas, decretos, estatuto administrativo, honorarios, corporaciones. Un abogado generalista puede perderse en ese laberinto.
            </p>
            <p style={{ fontSize: 16, color: "var(--ink2)", lineHeight: 1.8 }}>
              Trabajo exclusivamente en este ámbito desde hace años. Conozco la jurisprudencia, los argumentos que funcionan y los que no.
            </p>
            <div className="why-stats">
              {[["26", "años en litigación"], ["100%", "foco municipal"], ["1", "abogado directo"], ["3", "vías: negociar, Inspección o demandar"]].map(([n, l]) => (
                <div className="stat-box" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-right">
            {[
              ["01", "Revisión documental completa", "Decretos, contratos, correos, WhatsApp, licencias, resoluciones, sumarios. Todo importa."],
              ["02", "Teoría del caso desde el día uno", "No se demanda a ciegas. Antes de cualquier acción se construye la estrategia correcta."],
              ["03", "Plazos bajo control", "Los plazos laborales son breves. Desde el primer contacto se mapean todas las urgencias."],
              ["04", "Representación de principio a fin", "Desde los descargos o la demanda hasta la sentencia o el acuerdo. Sin cambios de abogado."],
            ].map(([n, t, d]) => (
              <div className="why-item" key={n}>
                <div className="why-num">{n}</div>
                <div className="why-text"><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEY KARIN */}
      <section className="section" id="ley-karin">
        <div className="section-eyebrow">Ley Karin</div>
        <h2>Acoso laboral y sexual<br />en municipalidades</h2>
        <p className="section-desc">La Ley N° 21.643, vigente desde agosto de 2024, transformó radicalmente la protección frente al acoso en el trabajo. Las municipalidades son empleadores obligados.</p>
        <div className="karin-banner">
          <div>
            <span className="karin-badge">Ley Karin · Vigente</span>
            <div className="karin-title">¿Sufres acoso laboral o sexual en tu municipalidad?</div>
            <p className="karin-desc">La ley amplió la definición de acoso, creó nuevas obligaciones para el empleador y estableció sanciones más severas. Si fuiste víctima o testigo, los plazos para actuar son breves. Cuéntame tu caso.</p>
          </div>
          <a href={WA_KARIN} target="_blank" rel="noreferrer" className="karin-cta">Consultar Ley Karin →</a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="proceso" style={{ background: "var(--white)", maxWidth: "100%", padding: "80px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <div className="section-eyebrow">Cómo trabajamos</div>
          <h2>Del primer contacto<br />a la solución</h2>
          <div className="process-grid">
            {process.map((s) => (
              <div className="process-step" key={s.num}>
                <div className="process-step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-eyebrow">Preguntas frecuentes</div>
        <h2>Respuestas antes de consultar</h2>
        <div className="faq-grid">
          {faqs.map((f) => (
            <div className="faq-item" key={f.q}>
              <div className="faq-q">{f.q}</div>
              <div className="faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="cta-banner">
          <div className="cta-eyebrow">¿Listo para evaluar tu caso?</div>
          <h2>El primer paso es una consulta<br />sin compromiso</h2>
          <p>Cuéntame tu situación. Te doy una evaluación jurídica seria, sin rodeos y con criterio estratégico.</p>
          <div className="cta-btns">
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="btn-gold">Consultar por WhatsApp →</a>
            <span className="phone-chip">+56 9 5039 0399</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-logo">LegalPressChile</div>
            <div className="footer-sub">Abogado Eduardo Yévenes · Defensa laboral municipal en Chile</div>
          </div>
          <div className="footer-right">+56 9 5039 0399 · legalpresschile.cl</div>
        </div>
      </footer>
    </>
  );
}
