/*
 * Origen de la visita en los botones de WhatsApp.
 *
 * Si la persona llegó desde Instagram o Facebook (por el parámetro utm_source
 * del enlace o por la página de la que viene), los enlaces de WhatsApp agregan
 * al final del mensaje un código como "(ref. LAB-IG)". Así cada consulta que
 * llega por WhatsApp muestra de dónde vino.
 *
 * El origen se recuerda 30 días en este navegador (solo "IG" o "FB" y la
 * fecha). No usa cookies ni envía datos a terceros.
 *
 * Uso: <script defer src="/origen.js" data-prefijo="LAB"></script>
 */
(function () {
  "use strict";

  var script = document.currentScript;
  var PREFIJO = (script && script.getAttribute("data-prefijo")) || "WEB";
  var CLAVE = "lpc_origen";
  var DURACION_MS = 30 * 24 * 60 * 60 * 1000;
  var WHATSAPP = /^https?:\/\/(wa\.me|api\.whatsapp\.com|(www\.)?whatsapp\.com)\//i;

  // "IG" o "FB" si la visita viene de esas redes, "OTRO" si trae otra
  // utm_source (otra campaña) y "" si no se sabe de dónde viene.
  function origenDeEstaVisita() {
    var fuente = "";
    try {
      fuente = (new URLSearchParams(window.location.search).get("utm_source") || "").toLowerCase();
    } catch (e) {}
    if (/^(instagram|ig)/.test(fuente)) return "IG";
    if (/^(facebook|fb)/.test(fuente)) return "FB";
    if (fuente) return "OTRO";
    var referencia = (document.referrer || "").toLowerCase();
    if (/^https?:\/\/([a-z0-9-]+\.)*instagram\.com(\/|$)/.test(referencia)) return "IG";
    if (/^https?:\/\/([a-z0-9-]+\.)*(facebook\.com|fb\.com|messenger\.com)(\/|$)/.test(referencia)) return "FB";
    return "";
  }

  function origenGuardado() {
    try {
      var guardado = JSON.parse(window.localStorage.getItem(CLAVE) || "null");
      if (guardado && guardado.o && Date.now() - guardado.t < DURACION_MS) return guardado.o;
    } catch (e) {}
    return "";
  }

  var origen = origenDeEstaVisita();
  if (origen === "OTRO") {
    try {
      window.localStorage.removeItem(CLAVE);
    } catch (e) {}
    return;
  }
  if (origen) {
    try {
      window.localStorage.setItem(CLAVE, JSON.stringify({ o: origen, t: Date.now() }));
    } catch (e) {}
  } else {
    origen = origenGuardado();
  }
  if (!origen) return;

  var codigo = "(ref. " + PREFIJO + "-" + origen + ")";

  function marcar(enlace) {
    if (!enlace || !enlace.href || !WHATSAPP.test(enlace.href)) return;
    try {
      var url = new URL(enlace.href);
      var texto = url.searchParams.get("text") || "";
      if (texto.indexOf("(ref. ") !== -1) return;
      url.searchParams.delete("text");
      var otros = url.search ? url.search.slice(1) + "&" : "";
      var mensaje = (texto ? texto + " " : "Hola ") + codigo;
      enlace.setAttribute(
        "href",
        url.origin + url.pathname + "?" + otros + "text=" + encodeURIComponent(mensaje) + url.hash
      );
    } catch (e) {}
  }

  function marcarDentro(nodo) {
    if (!nodo || nodo.nodeType !== 1) return;
    if (nodo.tagName === "A") marcar(nodo);
    if (nodo.querySelectorAll) {
      var enlaces = nodo.querySelectorAll("a[href]");
      for (var i = 0; i < enlaces.length; i++) marcar(enlaces[i]);
    }
  }

  marcarDentro(document.documentElement);

  if (window.MutationObserver) {
    new MutationObserver(function (cambios) {
      for (var i = 0; i < cambios.length; i++) {
        var cambio = cambios[i];
        if (cambio.type === "attributes") {
          marcar(cambio.target);
        } else {
          for (var j = 0; j < cambio.addedNodes.length; j++) marcarDentro(cambio.addedNodes[j]);
        }
      }
    }).observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"]
    });
  }

  document.addEventListener(
    "click",
    function (evento) {
      var destino = evento.target;
      var enlace = destino && destino.closest ? destino.closest("a[href]") : null;
      if (enlace) marcar(enlace);
    },
    true
  );
})();
