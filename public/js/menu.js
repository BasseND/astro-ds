(function() {
    "use strict";
// Glabal Variables
const togglerBtn = document.querySelector(".ds-header--toggler");
const mobileOpenBtn = document.querySelector("#js-mobile-menu-open");
const mobileCloseBtn = document.querySelector("#js-mobile-menu-close");
const bodyMobile = document.querySelector("body");
const collapse = document.querySelector(".ds-header--collapse");
const isMobil = window.innerWidth <= 991;


    const menuMobile = () => {
        if(mobileOpenBtn) {
            mobileOpenBtn.addEventListener("click", function() {
            showMenu();
            });
        }
        if(mobileCloseBtn) {
            mobileCloseBtn.addEventListener("click", function() {
            hideMenu();
            });
        }

        document.addEventListener("keydown", function(event) {
            if (event.keyCode === 27) {
            hideMenu();
            }
        });


        if(collapse) {
            setMobileMenu();
        }
    
    }


    const setMobileMenu  = () => {

        if (window.innerWidth <= 991) {
            collapse.classList.add("menu-mobile");     
        } else {
            collapse.classList.remove("menu-mobile");
            collapse.classList.remove("js-open");
            togglerBtn.setAttribute("aria-expanded", false);
            bodyMobile.classList.remove("has-mobile-menu--overlay");
            removeOverlay(".mobile-menu-overlay");
        
        }
    }  


    // Show menu
    const showMenu = () => {
    if (mobileOpenBtn.getAttribute("aria-expanded") == "false") {
        mobileOpenBtn.setAttribute("aria-expanded", true);
    }
    setOverlay(".app");
    collapse.classList.add("js-open");
    collapse.setAttribute("aria-hidden", false);
    bodyMobile.classList.add("has-mobile-menu--overlay");
    mobileCloseBtn.focus();
    }
    // Hide menu
    const hideMenu = () => {
    if (mobileOpenBtn.getAttribute("aria-expanded") == "true") {
        mobileOpenBtn.setAttribute("aria-expanded", false);
    }
    removeOverlay(".mobile-menu-overlay");
    collapse.classList.remove("js-open");
    bodyMobile.classList.remove("has-mobile-menu--overlay");
    mobileOpenBtn.focus();
    collapse.setAttribute("aria-hidden", true);
    }

    function setOverlay(overlayParent) {
        const overlay = document.createElement("div");
        overlay.className = "ds-overlay mobile-menu-overlay";
        const parent = document.querySelector(overlayParent);
        parent.appendChild(overlay);
    }
    function removeOverlay(overlayClass) {
        const overlay = document.querySelector(overlayClass);
        if (overlay) {
            overlay.remove();
        }
    
    }

    
    document.addEventListener("DOMContentLoaded", () => {
        setMobileMenu();
        menuMobile()
    });
    

    window.addEventListener("resize", () => {
        setMobileMenu();
        console.log("HELOO")
    });


})();