# md-preview
`md-preview` is a simple Node.js package that creates an HTTP server to preview Markdown files as HTML content.

## Features:
1. Converts Markdown files to HTML using the markdown-it library.
2. Renders Markdown content dynamically on an HTTP server.
3. Supports specifying the Markdown file path and port number via command-line arguments.

## Installation:

To use md-preview, you need to have Node.js installed on your system.
`npm install -g md-preview`

## Usage:
Once installed, you can use the md command followed by the path to your Markdown file:

`md [path/to/README.md] [port]`
- Replace [path/to/README.md] with the path to your Markdown file.
- Optionally, specify the [port] number. If not provided, the default port is 8080. Avoid using reserved ports (0-1023) as they may require special permissions.

- Any changes made to the Markdown file will automatically update the displayed HTML content in the browser when refreshed.

## Examples:
To preview a Markdown file named README.md, run:

```bash
    md README.md

```
in this default port is 8080


```bash
    md README.md 5000
```
here port is 5000