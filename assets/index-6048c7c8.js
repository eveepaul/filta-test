(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const i="/filta-test/assets/Image-01@2x-705a2517.jpg",d="/filta-test/assets/Image-02@2x-e2e7e918.jpg",m="/filta-test/assets/Image-03@2x-3ff94358.jpg",u="/filta-test/assets/Image-01@2x-9dd6074e.jpg",f="/filta-test/assets/Image-02@2x-f592eddb.jpg",g="/filta-test/assets/Image-03@2x-38635f5f.jpg",p=[i,d,m],y=[u,f,g],h=document.querySelectorAll("a"),r=document.querySelector(".modal"),I=document.querySelectorAll("section:first-child img"),E=document.querySelectorAll("section:last-child img"),L=document.querySelector(".modal button"),l=document.querySelector(".modal-body");h.forEach(s=>{s.addEventListener("click",o=>{o.preventDefault(),console.log(o.target)})});I.forEach((s,o)=>{s.addEventListener("click",()=>{r.classList.remove("hidden");const c=document.createElement("img");c.src=p[o],l.replaceChildren(c)})});E.forEach((s,o)=>{s.addEventListener("click",()=>{r.classList.remove("hidden");const c=document.createElement("img");c.src=y[o],l.replaceChildren(c)})});L.addEventListener("click",s=>{s.preventDefault(),r.classList.add("hidden")});