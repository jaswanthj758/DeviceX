 Most important create .env folder in the root folder then add this 

    REACT_APP_HOST=http://localhost:3000
    
----------------------------
    after that do the rest of the flow
        and based on the requirement use the command we have three commands
-----------------------------
According to project API path:
1.   first run the json-server

    json server : npx json-server --watch data/db.json
     then it run in port: 3000
    -----------
1. if you want json server and auth then dont run above command run the below command
           JSON server auth ": combine of json-server & json Auth

json-server data/db.json -m ./node_modules/json-server-auth
   ------------------
1. In order to use the route code we must run the json-server, Json AUTH, routes as well 
        for the command is like

-----------
    json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json
-------------
      
        same like but to allow other device to host 
        
    json-server data/db.json -m ./node_modules/json-server-auth -r data/routes.json --host 0.0.0.0 --port 3000
  

3. then localhost:
    npm start
    localhost run in 3001 port
    then data will be access in port number 30001

    query on url:
        http://localhost:3001/products/?q=react
    -----------------



