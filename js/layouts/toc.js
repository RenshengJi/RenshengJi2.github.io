function initTOC(){REDEFINE.utils.navItems=document.querySelectorAll(".post-toc-wrap .post-toc li"),0<REDEFINE.utils.navItems.length?(REDEFINE.utils={...REDEFINE.utils,updateActiveTOCLink(){if(Array.isArray(REDEFINE.utils.sections)){let e=REDEFINE.utils.sections.findIndex(e=>e&&0<e.getBoundingClientRect().top-200);-1===e?e=REDEFINE.utils.sections.length-1:0<e&&e--,this.activateTOCLink(e)}},registerTOCScroll(){REDEFINE.utils.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map(e=>{const t=document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""));return e.addEventListener("click",e=>{e.preventDefault();e=t.getBoundingClientRect().top+window.scrollY;window.anime({targets:document.scrollingElement,duration:500,easing:"linear",scrollTop:e-10,complete:function(){setTimeout(()=>{REDEFINE.utils.pageTop_dom.classList.add("hide")},100)}})}),t})},activateTOCLink(e){var t,e=document.querySelectorAll(".post-toc li a.nav-link")[e];e&&!e.classList.contains("active-current")&&(document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")}),e.classList.add("active","active-current"),t=document.querySelector(".post-toc-wrap"),window.anime({targets:t,duration:200,easing:"linear",scrollTop:t.scrollTop-t.offsetHeight/2+e.getBoundingClientRect().top-t.getBoundingClientRect().top}))},showTOCAside(){var e=()=>{var e=REDEFINE.getStyleStatus(),t="isOpenPageAside";e&&e.hasOwnProperty(t)?REDEFINE.utils.TocToggle.pageAsideHandleOfTOC(e[t]):REDEFINE.utils.TocToggle.pageAsideHandleOfTOC(!0)},t="init_open";!REDEFINE.theme_config.toc.hasOwnProperty(t)||REDEFINE.theme_config.toc[t]?e():REDEFINE.utils.TocToggle.pageAsideHandleOfTOC(!1)}},REDEFINE.utils.showTOCAside(),REDEFINE.utils.registerTOCScroll()):document.querySelectorAll(".toc-content-container, .toc-marker").forEach(e=>{e.remove()})}!0===REDEFINE.theme_config.pjax.enable&&REDEFINE.utils?initTOC():window.addEventListener("DOMContentLoaded",initTOC);