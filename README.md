# zip-page

Minimal utility for zipping entire web pages into a URL.

Uses the [Compression Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API) for `gzip`.

## Example usage

1. Copy the HTML for a web page you want to share:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, world!</title>
</head>

<body>
  <main>
    <p>This is a whole HTML page!</p>
  </main>
</body>

</html>
```

2. Paste the entire HTML code into the text area:

![HTML copied verbatim into the text area](./.github/textarea.png)

3. Click "Get zip-page URL" to compress and encode the HTML into a URL:

![URL with the compressed HTML encoded into the hash](./.github/url.png)

4. Open the URL in any web browser to view your zip-page:

![Web browser displaying the zip-page](./.github/zip-page.png)

## Maximum content size

The maximum size of content you can store using this tool will depend on:
- How well the `gzip` algorithm compresses the content
- The end-user's specific hardware/web browser

From my basic testing I found the rough limits to be around:
- **~500 kB** of uncompressed content, or
- **~500,000 characters** of URL length

## Similar projects

- [Netlify Drop](https://app.netlify.com/drop)
- [Surge](https://surge.sh/)
- [Instant Preview](https://github.com/kjk/instaprev)
- [NoPaste](https://github.com/bokub/nopaste)
