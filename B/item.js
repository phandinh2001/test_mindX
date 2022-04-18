class itemAnswer {
  container = document.createElement("div");

  constructor(values) {
    this.container.innerHTML = values;
    this.container.classList.add("item");
  }
  handleClick = (listener) => {
    this.container.onclick = listener;
  };
}
export { itemAnswer };
