import http.server
import socketserver
import json
from scholarly import scholarly

PORT = 1914

class ScholarHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path.startswith('/search_author'):
            author_name = self.path.split('?')[1].split('=')[1]
            author_name = author_name.replace("%20", " ")
            print(author_name)
            author_results = self.search_author(author_name)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            # Set CORS headers to allow all origins
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
            self.end_headers()
            self.wfile.write(json.dumps(author_results).encode())
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b'Not Found')

    def search_author(self, author_name):
        try:
            search_query = scholarly.search_author(author_name)
            author = scholarly.fill(next(search_query))
            return author
        except StopIteration:
            return {'error': 'Author not found'}
        except Exception as e:
            return {'error': str(e)}


if __name__ == "__main__":
    Handler = ScholarHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving at port {PORT}")
        httpd.serve_forever()
