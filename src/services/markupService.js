export function createProductsMarkup(data) {
  return data
    .map(
      ({ title, description, price }) => `<li>
        <h3>${title}</h3>
        <p>${description}</p>
        <p>${price}</p>
      </li>`
    )
    .join('');
}

export function createMarkupProduct({ title, description, price }) {
  return ` <h3>${title}</h3>
        <p>${description}</p>
        <p>${price}</p>`;
}
