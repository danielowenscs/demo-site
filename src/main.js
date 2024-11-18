import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Function to initialize Embedded Messaging
const initEmbeddedMessaging = () => {
  try {
    var embeddedservice_bootstrap;
    embeddedservice_bootstrap.settings.language = "en_US"; // Set the language, e.g., 'en' or 'en-US'

    // Initialize Embedded Messaging
    embeddedservice_bootstrap.init(
      "00DO8000007Bicp", // Salesforce Org ID
      "test_webservice", // Deployment Name
      "https://healthevolution--stackdevaf.sandbox.my.site.com/ESWtestwebservice1731958405344", // Base URL
      {
        scrt2URL: "https://healthevolution--stackdevaf.sandbox.my.salesforce-scrt.com", // Secure URL
      }
    );
    console.log("Embedded Messaging initialized successfully.");
  } catch (err) {
    console.error("Error loading Embedded Messaging: ", err);
  }
};

// Dynamically load the Bootstrap script and call the init function on load
const script = document.createElement("script");
script.src =
  "https://healthevolution--stackdevaf.sandbox.my.site.com/ESWtestwebservice1731958405344/assets/js/bootstrap.min.js";
script.type = "text/javascript";
script.onload = initEmbeddedMessaging;
script.onerror = () => {
  console.error("Failed to load the Embedded Messaging Bootstrap script.");
};

// Append the script to the document body
document.body.appendChild(script);

// Mount the Vue app
app.mount("#app");
