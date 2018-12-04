# iWound Patient Management Dashboard

iWound Patient Management Dashboard is a single page web application that displays randomly generated patients and information on their corresponding wounds. Functionality includes changing the status of a wound from 'Active' to 'Resolved'.

## Installation

```
$ git clone https://github.com/EugeCos/clinic-api.git
```

```
$ cd PROJECT
```

After cloning is complete, please follow below 2 installations steps:

###### 1. Navigate to the /PROJECT folder, and enter the following command:

```
$ npm install
```

This will install server-side dependencies

###### 2. Navigate to the /client folder located at /PROJECT/client folder, and enter the same command:

```
$ npm install
```

This will install client-side dependencies

## Start server and client & watch

Navigate to your /PROJECT folder and run the following command:

```
$ npm run dev
```

## Simple build for production

```
$ npm run build
```

## API Reference

### GET requests

##### /patients

for list of 50 randomly generated unique patient profiles

##### /patients/{patientId}

for specific patient profile

##### /patients/{patientId}/wounds

for list of all wounds from a specific patient

##### /wounds

for list of all wounds from all patients

##### /wounds/{woundId}

for a specific unique wound

### PATCH requests

##### /wounds/{woundId}

for updating data for a specific wound

---

## Tools

- ReactJS - main library
- Redux - application state management
- LESS - CSS preprocessing
- Webpack - watch and compile LESS files
- Axios - API calls
- Material UI - front-end framework
- Concurrently - run client and server simultaneously

---

## Timeline for front-end development

November 29 to December 3, 2018

## Contributors

- Eugene Costov // eugene.costov@gmail.com

## Licence

_iWound Patient Management Dashboard_ is available under MIT.
