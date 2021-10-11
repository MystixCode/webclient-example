# webclient-example

This is a svelte-kit web app using github oauth as an example.
It also displays some test items fetched from an api.

## Download and install

```bash
git clone https://github.com/MystixCode/webclient-example.git
cd webclient-example
npm install
```
 - In github create oauth app (settings>Developer settings>OAuth Apps).  
 - Change "Homepage URL" to http://localhost:3000.  
 - Change "Authorization callback URL" to http://localhost:3000/auth/callback.  
 - Add client id and client secret to authconf.json file.  
 - In src/routes/api/tests.js theres a const url that expects url of an api that provides test items like https://github.com/MystixCode/api-example

## Run it during development

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```
