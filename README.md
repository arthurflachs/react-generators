# React Generators

Small cli tools to generate React components, in a specific configuration.

## Project architecture and philosophy

The idea behind the first version of the generate-component script is to automate the creation of a component, using CSS Modules and React Storybook. It takes a bit of time to create the different files and set them up. The file architecture resulting is something like this :

```
|--- components/
    |--- MyComponent/
        |--- index.js
        |--- styles.css
|--- stories/
    |--- MyComponent.js
```

It is also necessary to change the storybook config to add the new component (TODO).

## Usage

The usage is very basic for now.

```
npm install -g react-generators
```

Installs react-generators globally.

To specify the path of the components, you can use inline configuration or add it to your package.json.

```
{
  "dependencies": ...,
  "generatorsConfig": {
    "componentsPath": "./src/components"
  }
}
```

You can then run ``react-generate-component MyNewComponent``
