/* =====================================================
   File Name : layout.js
   Module    : ERP Layout Engine
   Version   : 1.0.0
===================================================== */

console.log("Layout JS Loaded");

async function loadComponent(elementId, file) {

    console.log("Loading:", file);

    const container = document.getElementById(elementId);

    if (!container) {
        console.error(elementId + " not found");
        return;
    }

    try {

        const response = await fetch(file);

        console.log("Status:", response.status);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();

        container.innerHTML = html;

        console.log(file + " loaded successfully");

    } catch (error) {

        console.error("Load failed:", error);

    }

}

async function initLayout() {

    await loadComponent("sidebar", "../shared/sidebar.html");
    await loadComponent("header", "../shared/header.html");
    await loadComponent("toolbar", "../shared/toolbar.html");
    await loadComponent("statusbar", "../shared/statusbar.html");

}

document.addEventListener("DOMContentLoaded", initLayout);