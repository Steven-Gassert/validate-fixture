
## Setup

  

In order to see the error that cypress schema tools will throw when one of our fixtures violates an existing schema, just clone this repo and run

  

`yarn`

  

and then

  
  

`yarn run cypress open`

and select the `test.spec.js` file

## Pipeline
The pipline to validating these fixtures currently is

  

**SDK Types** >> **Json schemas** >> **Cypress schema objects** >> **Cypress tests**

  

But in the future, we hope this pipline will look something like

  

**Cypress schema objects from web server** >> **Cypress tests**

  

_or_

  

**Cypress schemas objects from NPM package** >> **Cypress tests**