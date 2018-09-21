# dang-cli

dang-cli is a cli tool that prompts the user before running dangerous commands.

## Installation

`npm install --save-dev dang-cli`

## Usage

`npx dang-cli 'Deploy to PRODUCTION?' echo Deploying to PRODUCTION ...`

The most common use-case for dang-cli is as a package.json script.<br>
Below is a sample package.json file that demonstrates the usage of dang-cli.

```json
{
  "scripts": {
    "deploy-dev": "echo Deploying to dev... No need to worry",
    "deploy-prod": "dang-cli 'Deploy to PRODUCTION?' echo Deploying to
PRODUCTION..."
  }
}
```

The user will now be prompted before production deployments are run.

```shell
> npm run deploy-prod
? Deploy to PRODUCTION? Yes
Deploying to PRODUCTION...
```

## License

MIT
