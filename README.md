# react-user-crud
This libs is a frontend integration to [adonis-basic-crud](https://github.com/pdsolucoes/adonis-basic-crud)

# Pre requisits
[nodejs 17.6.0 or superior](https://nodejs.org/en/)

# Install the library
<pre>
    npm i @pd-solucoes/react-user-crud
</pre>

<pre>
    yarn add @pd-solucoes/react-user-crud
</pre>
# Project requirements
Its necessary add this variables in your .env file at host project.
<pre>
    REACT_APP_API_URL=YOUR_API_URL
    APPLICATION_IDENTIFIER=YOUR_APP_IDENTIFIER
</pre>

# Usage
You will need install react router dom to run exported router.

In order to use available routes you can use this template in your App.tsx file.
```js
import React from 'react';
import './App.css';

import {Router} from "@pd-solucoes/react-user-crud"


function App() {
  return (
    <Router 
    imgUrl="YOUR_IMAGE_LINK"
    logoUrl="YOUR_IMAGE_LINK"
    projectDescription="YOUR_PROJECT_DESCRIPTION">

    </Router>
  );
}

export default App;

```




