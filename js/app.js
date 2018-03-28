/*eslint no-console: 0*/
import dbhelper from './dbhelper';

/**
 * Register a
 * ServiceWorker
 */
if(navigator.serviceWorker){
    navigator.serviceWorker.register('/sw.js', {scope: './'})
    .then(() => {
        console.log("Service worker has been successfully registered.");
    }).catch((err) => {
        console.log("error " , err);
    });
}
