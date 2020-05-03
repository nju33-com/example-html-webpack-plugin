document.body.style.cssText = 'white-space:pre'
document.body.textContent = JSON.stringify(
  {
    title: document.title,
    url: location.href
  },
  null,
  2
)