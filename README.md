# Environment

`Required Environments`

- required `node` >= 13.12

`Install dependencies`

```
npx express-generator
npm install axios --save
npm install nodemon dotenv esm --save-dev
```

`package.json`

```
"script": {
    "dev": "nodemon -r esm -r dotenv/config ./bin/www"
}
```