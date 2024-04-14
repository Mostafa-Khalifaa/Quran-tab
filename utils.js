
export const clickLabelEl = item => {
    item.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            item.click();
        }
    });
};
export const observelEl = (sectionEl) => {
    const option = { threshold: 0.3 };
    const callback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
            else {
                entry.target.classList.remove("in-view");

            }
        });
    }
    const observer = new IntersectionObserver(callback, option);
    sectionEl.forEach(element => observer.observe(element));
}