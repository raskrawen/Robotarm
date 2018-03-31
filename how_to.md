Download node.js X64 from nodejs.org
Terminal:
Npm init
Npm install node
Npm install johnny-five
(npm install keypress eller http)

Opret mappe (i explorer) der hvor terminal starter fx
C:/users/rasm202r/RKWnode
Opret server.js

Opret mappe: public
Opret sketch.js, mappe med p5-libraries. 
Download p5.speech.js fra p5.org og gem i libraries.
Tilføj p5.js m.m. til html.
Tilføj sketch.js til html.

Npm install express --save 
Entry: server.js
Package.json oprettes automatisk
Express er en pakke til node, som kan tage sig af filer i public, lytte til port 3000 m.m.
(node modules)

SERVEREN er nu sat op. Det er en webserver, da en browser kan tilgå serveren som klient.
Tilføj link til socket i html (https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js)

Socket = forbindelsen mellem server og klient.

Npm install socket.io --save
Socket er et bibliotek. Styrer beskeder ind og ud.

Kode redigeres i atom.
Server startes fra windows start node.js command prompt. Naviger til RKWnode mappe: cd rkwnode
Node server.js
I browser: Localhost:3000
Arduino skal have firmata.ino kode opladed for at virke med Johnny five

Servos connected to Arduino pin 9,10,11 and 13.
