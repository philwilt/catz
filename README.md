# Todo React + Redux

Install with `npm install`

Run the live dev server with `npm start` (hot module replacement is enabled so changes will be injected on file saves)

To build the static assets use `npm run build`

## Behavior

Add todos and click the todo to toggle completed

## Structure

The `app/components` folder contains purely presentional components. These can be reused by any container.

The `app/container` folder contains containers which attach data and business logic to the components.

The `app/reducers` folder contains our redux reducers that compose the state out of our actions.

The `app/actions` folder has the actions a user can perform on the application.

The `app/styles` directory contains styles
