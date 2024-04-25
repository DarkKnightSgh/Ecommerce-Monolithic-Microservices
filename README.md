# Microservice-architecture-e-commerce-website

# running frontend seperately
```
cd adroit-18
docker build -t reactapp .
docker run -p 3000:3000 reactapp
```
Then open http://localhost:3000/

MAKE SURE TO RUN BACKEND FIRST 

# running payment backend seperately
```
cd payment backend
docker build -t my-node-app .
docker run -d -p 5555:5555 my-node-app
```
# running products backend seperately
Before doing this,run backend first to check if it's working by : python app.py
If it doesn't work,make sure to create a python virtual environment and run flask in that
```
cd product_backend
docker build -t product_backend .
docker run -p 8080:8080 product_backend
```
# running cart backend seperately
```
cd cart_backend
docker build -t cart_backend .
docker run -d -p 8081:8081 cart_backend
```
