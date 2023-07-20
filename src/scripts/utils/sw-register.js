import * as WorkboxWindow from "workbox-window";

const swRegister = async () => {
  if (!("serviceWorker" in navigator)) {
    console.warn("Service Worker is not supported in the browser.");
    return;
  }

  const serviceWorkerPath = "/sw.bundle.js"; // Update the path to the service worker file here
  const wb = new WorkboxWindow.Workbox(serviceWorkerPath);

  try {
    await wb.register();
    console.log("Service worker registered successfully.");
  } catch (error) {
    console.error("Failed to register service worker.", error);
  }
};

export default swRegister;
