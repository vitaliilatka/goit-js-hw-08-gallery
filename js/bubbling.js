/*
 *   Всплытие события
 *   Исходный элемент: event.target и event.currentTarget
 */

const refs = {
    parent: document.querySelector("#parent"),
    child: document.querySelector("#child"),
    innerChild: document.querySelector("#inner-child"),
  };
  
  const parentClickHandler = (event) => {
    console.log("target: ", event.target);
    console.log("currentTarget: ", event.currentTarget);
    console.log("PARENT click handler");
  };
  const childClickHandler = (event) => {
    console.log("target: ", event.target);
    console.log("currentTarget: ", event.currentTarget);
    console.log("CHILD click handler");
  };
  const innerClickChildHandler = (event) => {
    console.log("target: ", event.target);
    console.log("currentTarget: ", event.currentTarget);
    console.log("INNER CHILD click handler");
    event.stopPropagation();
  };
  
  refs.parent.addEventListener("click", parentClickHandler);
  refs.child.addEventListener("click", childClickHandler);
  refs.innerChild.addEventListener("click", innerClickChildHandler);