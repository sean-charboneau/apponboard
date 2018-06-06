# apponboard

Create a local database on localhost:3306 called zoo_db.  The db should have a username = 'root' and password = 'root'

Then run:

```
git clone https://github.com/sean-charboneau/apponboard.git
cd apponboard
npm install
node_modules/db-migrate/bin/db-migrate up
node start.js
```
