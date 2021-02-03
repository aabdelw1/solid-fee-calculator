# Solid Fee Calculator

* This is my implementation of the Solid Fee Calculator. The app allows users to submit items they want to sell. They can either submit auction items or fixed price buy it now items. 
Submitting items comes with a fee. The fee is calculated according to a set of rules outlined in the Conditions and Calculations segments below.


### Conditions

In this example there are two types of ads:

* Auction (bids are placed until an ad ends)
* Buy it now (an ad is bought directly and thereby ending)

There's two types of users:

* Company users
* Non-company users (normal)

#### Calculation rules

The formula to calculate the sum of fees is:

* Price of the ad + type of ad cost - discount

Costs:

| Ad type       | Cost |
| ------------- |:----:|
| Auction       | 25   |
| Buy It Now    | 35   |

Discounts:

* If an ad ends today there's a discount of 10.
* Company users get a discount of 5 when they publish an ad.

## General
* This project uses NextJS which is a production ready React solution that handles a number of different server to client rendering styles.

* Read more here: https://nextjs.org/

* This also uses ApolloClient to handle backend querying via Graphql in case you wanted to use a database.

* Read more about ApolloClient here: https://www.apollographql.com/docs/react/

* The UI design system that is being used is called Evergreen

* Read more about Evergreen here: https://evergreen.segment.com/components

* Also I'm strongly pushing for the use of Styled Components in this. Styled components is a cleaner way to do CSS in JS for React. This cleans up your render functions and also reduces confusion with class names & overlaps. You can also leverage props in your css which is huge for dynamic styling.

* Read more about Styled Components here: https://www.styled-components.com/ 

* If you are using VSCode (🤞 hopefully you are) install these extensions if you don't already have them:
  * [Styled Components highlighting](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)

## Structure Overview

### Pages
* via NextJS each page is a route
  
* each page component should render a component from components

### Components
* Pretty self explanatory, just all the components needed, make sure to break them down once they get too large.

### Static
* This is where all your assets live, images etc.

### Lib
* This is where all the reusable functions would go. ie: filter functions, formatting etc.

## Getting started

Install dependencies

`npm install`

Dev

`npm run dev`

Build for Prod

`npm run build`

Prod

`npm start`

Make sure your code is passing the linter!!!

`npm run lint`

`npm run lint --fix`