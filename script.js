async function textToGzipBase64(text) {
  const stream = new Blob([text]).stream();
  const compressed = stream.pipeThrough(new CompressionStream('gzip'));
  const buffer = new Uint8Array(await new Response(compressed).arrayBuffer());
  let encoded = '';
  buffer.forEach(byte => encoded += String.fromCharCode(byte));
  const b64 = btoa(encoded);
  return b64;
}

document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault();

  const content = new FormData(e.target).get('content');
  const b64 = await textToGzipBase64(content);

  const url = `${location.href}#${b64}`;
  e.target.elements['url'].innerHTML = `<a href="${url}">${url.substring(0, 60)}${url.length > 60 ? '...' : ''}</a>`;
});

addEventListener('hashchange', e => {
  gzipBase64ToText(new URL(e.newURL).hash.substring(1)).then(html => {
    document.open();
    document.write(html);
    document.close();
  });
});

// Blocks flash of original UI before document.write in the header script executes
if (location.hash === '') {
  document.querySelector('body').style.setProperty('display', '');
}
