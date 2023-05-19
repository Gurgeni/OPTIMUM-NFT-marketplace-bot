import http.server
import socketserver

PORT = 8156

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map = {
    '.html': 'text/html',
    '.wasm': 'application/wasm',
    '': 'application/octet-stream',
}

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()