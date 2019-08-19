Application Details and Approach:
1. Used React to build the SPA.
2. For the selectable/ user editable/ searchable dropdown, react-select library is used.
3. To handle more that 8000 rows of stock symbol I have used react-window along with react-select - This library helps break large data into chunks and can be loaded just in time the user scrolls.
4. Created stateless Company component which renders html view containing company name and price for the user selected symbol.
5. Wrote unit test case for Company component using Enzyme and JEST.

Please note that the API URLs are externalized for Production and simply running the React code in Dev env will fails at API calls. Make sure to run the Express Server to see the full working output.


Server Details:
1. Used ExpressJS for rendering static content. (npm run build of reactjs code is placed under public folder which gets rendered while server runs)
2. Externalized API URLs by using http-proxy-middleware, so that the react code ships without any hardcoded urls and this can be injected via Environment variable. 
3. Helath check get method for Server status /health

Command to run the app:
node server.js





