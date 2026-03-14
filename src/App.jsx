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
    a: "No. Atiendo func
