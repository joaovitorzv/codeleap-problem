# Turborepo

- Includes a React and React Native Project
  - apps
    - rweb: Basic React App
    - rnative: React Native
  - packages
    - core:
      - /actions
      - /redux
    - ui
    - ui-native

### How to run:

- Run: `yarn dev` // to run all projects
- Run: `yarn dev --scope={name}` // to run a single project. Running this may not show your live updates from the ui packages if they are not also running too.

## Troubleshooting
<b>Long jest-haste-map Issue</b>
- If you are running into ths problem, try running `yarn clean:watchman`.
