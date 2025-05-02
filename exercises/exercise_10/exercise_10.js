//Create a config and aplly Object.seal()
const config = {
    name: "App Config",
    version: 1.0,
  };
  
  // Apply Object.seal
  Object.seal(config);
  
  // Try to add a new property
  config.author = "John";  // This won't work
  
  // Try to modify an existing property
  config.version = 2.0;  // This will work
  
  // Try to delete a property
  delete config.name;  // This won't work
  
  console.log("Config after seal:", config);

  // Create settings and Apply Object.freeze()

  const settings = {
    theme: "light",
    language: "en",
  };
  
  // Apply Object.freeze
  Object.freeze(settings);
  
  // Try to add a new property
  settings.author = "Alice";  // This won't work
  
  // Try to modify an existing property
  settings.theme = "dark";  // This won't work
  
  // Try to delete a property
  delete settings.language;  // This won't work
  
  console.log("Settings after freeze:", settings);
  

//Cannot add, modify, or delete any properties.

//Makes everything fully immutable.

//Also fails silently unless in strict mode
  