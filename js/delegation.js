const refs = {
    tags: document.querySelector(".js-tags"),
    activeTagOutput: document.querySelector(".js-active-tag"),
};
  
refs.tags.addEventListener("click", onTagsClick);
  
function onTagsClick(event) {
    if (event.target.nodeName !== "BUTTON") {
      return;
      }
      const nextActiveTag = event.target;
      const activeTagValue = nextActiveTag.dataset.value;
      setActiveTag(nextActiveTag);
      updateOutput(activeTagValue);
      // removeIfActive(nextActiveTag);
}
  
function setActiveTag(nextActiveTag) {
    const currentActiveTag = refs.tags.querySelector(".tags__btn--active");
    if (currentActiveTag) {
      currentActiveTag.classList.remove("tags__btn--active");
    }
      nextActiveTag.classList.add("tags__btn--active");
       if (currentActiveTag === nextActiveTag) {
         currentActiveTag.classList.remove("tags__btn--active");
       }
}
  
  function updateOutput(value) {
    refs.activeTagOutput.textContent = value;
}