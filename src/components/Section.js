class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  clearContainer() {
    this._container.innerHTML = '';
  }

  renderItems() {
    this.clearContainer();

    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._container.append(element);
  }
}
