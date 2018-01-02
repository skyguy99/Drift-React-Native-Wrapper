// Libraries
import {NativeModules, Platform} from 'react-native';
import Package from 'react-native-package';


/**
 * Package.create handles two things:
 *
 *   1. Checks that for each platform that's `enabled`, the module is installed
 *      properly. If it's not, it logs a warning.
 *   2. Guards the module on every platform that is not `enabled`. This allows
 *      the module to exist in cross-platform code without hacks to disable it.
 */
export default Package.create({
  json: require('../package.json'),
  nativeModule: NativeModules.Drift,
  enabled: Platform.select({
    ios: true,
  }),

  export: (Drift) => ({
    // App Properties
    setup: (embedId) => DriftManager.retrieveDataFromEmbeds(embedId), DriftManager.createTemporaryDirectory(), //double?

    // // User Properties
    registerUser: (userId, email) => DriftManager.registerUser(userId, email, null),
    logout: () => DriftManager.logout(),
    debugMode : (debug) => DriftManager.debugMode(debug),
    showConversations: () => DriftManager.showConversations(),

  }),
});
