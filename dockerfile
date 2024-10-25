# Użyj oficjalnego obrazu nginx jako podstawy
FROM nginx:alpine

# Skopiuj pliki do katalogu, w którym Nginx szuka plików
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Eksponuj port 80
EXPOSE 80







