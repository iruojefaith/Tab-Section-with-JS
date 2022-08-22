function openTab(evt, tab) {
    let i, tabContent, tabLinks;

        tabContent = document.getElementsByClassName("content-inner");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        tabLinks = document.getElementsByClassName("tab");
        for (i = 0; i < tabLinks.length; i++) {
            tabLinks[i].className =
            tabLinks[i].className.replace(" active", "");
        }
        document.getElementById(tab).style.display = "block";
        evt.currentTarget.className += " active";
}
// Horizontal scroll for the tabs on mousewheel. incase the tabs are longer than the content section

if (window.innerWidth > 800) {

    const scrollContainer = document.querySelector(".tabs");
        scrollContainer.addEventListener("wheel", (evt) => {

            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY
        });
}