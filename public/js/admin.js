const deleteProduct = (btn) => {
  const prodId = btn.parentNode.querySelector('[name=productId]').value;

  const productElement = btn.closest('article');

  fetch('/admin/product/' + prodId, {
    method: 'DELETE',
  })
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      console.log(data);
      productElement.remove();
    })
    .catch((err) => {
      console.log(err);
    });
};
