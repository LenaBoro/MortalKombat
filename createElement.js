export const createElement = (tag, classNameTag) => {
    const element = document.createElement(tag);
    if (classNameTag) {
        element.classList.add(classNameTag);
    }
    return element;
}