# JSDR213

For our final lab of the class, we are going to create an express server that contains some JSON data we will create


#### Part 1 
  - Initialize a basic Express app using your usual templated steps, adding in a basic GET landing page
    ```js
      app.get('/', (req, res) => {
      res.send('server is working')
      })
   ```

 ____

 #### Part 2 
 - Create a file called apartments.js that has an array of objects of local apartments. Each apartment should have values such as 'sqFt', 'price', 'address', and anything else you'd like to include such as 'isPetFriendly', 'waterfrontView', and others. Feel free to add as much data in as you would like

- Create a route called Apartments that returns this array of apartments

#### Part 3
- Take the app one step further by creating a second route called Houses that returns an array of similar objects, but with Houses instead of Apartments. These objects can have properties such as "numberOfBedrooms", "numberOfBathrooms", "hasPorch", and anything else you'd want to see in a housing listing
