(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();(()=>{const n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};n.openMenuBtn.addEventListener("click",t),n.closeMenuBtn.addEventListener("click",t);function t(){n.menu.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",t),n.closeModalBtn.addEventListener("click",t);function t(){n.modal.classList.toggle("is-hidden")}})();new Swiper(".swiper",{slidesPerView:3,spaceBetween:16,loop:!0,autoplay:{delay:5e3},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:16},1280:{slidesPerView:3,spaceBetween:16}},navigation:{nextEl:".button-next",prevEl:".button-prev"}});const l=document.querySelector(".go-top");window.addEventListener("scroll",d);l.addEventListener("click",c);function d(){const n=window.pageYOffset,t=document.documentElement.clientHeight;n>t?l.classList.add("go-top--show"):l.classList.remove("go-top--show")}function c(){window.pageYOffset>0&&(window.scrollBy(0,-25),setTimeout(c,0))}
