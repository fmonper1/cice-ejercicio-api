const c=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};c();const i="https://randomuser.me/api/?format=json",l=document.querySelector(".tarjeta"),d=document.querySelector("#muroDeTarjetas"),u=document.querySelector("#agregarCard"),m=async()=>{const t=await(await fetch(i)).json();return console.log(t),t.results[0]},f=async()=>{const o=await m(),t=document.createElement("div");console.log(t),t.textContent=o.name.first,l.appendChild(t)},p=()=>{console.log("click");const o=y();d.appendChild(o)},y=()=>{const o=document.createElement("div");o.className="tarjeta";const t=document.createElement("button");t.textContent="eliminiar";const n=()=>v(o);return t.onclick=n,o.appendChild(t),o},v=o=>{console.log(o),o.remove()};u.addEventListener("click",p);f();
