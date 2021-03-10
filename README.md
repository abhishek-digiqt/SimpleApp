# React Project Structure

### Things we'll use in project

* react (17.0.1)
* redux
* redux-saga
* scss 
* validator
* axios

### Point need to remeber while code 

* always put one space between global imports and local imports
```
import React from 'react';
import ReactDome from 'react-dom';

import Loader from '../component/loader';
```

* maintain single quote  ``'`` and double quote ``"`` throughout the project
```
# Bad 

import React from "React";

import Loader from '../../component/loader';

# Better 

import React from 'React';

import Loader from '../../component/loader';
```

* Always use key when you loop something
```
# Bad

xyz.map(itm => 
    <div>{itm}<div/>
)

# Better 

xyz.map((itm, key) => 
    <div key={key}>{itm}<div/>
)
```
