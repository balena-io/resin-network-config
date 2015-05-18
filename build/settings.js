var _;

_ = require('lodash');


/**
 * @summary Main network settings
 * @constant
 * @protected
 * @type {String}
 */

exports.main = '[global]\nOfflineMode=false\n\n[WiFi]\nEnable=true\nTethering=false\n\n[Wired]\nEnable=true\nTethering=false\n\n[Bluetooth]\nEnable=true\nTethering=false';


/**
 * @summary Get ethernet/wifi network settings
 * @function
 * @protected
 *
 * @param {Object} options - options
 * @param {String} [options.wifiSsid] - wifi ssid
 * @param {String} [options.wifiKey] - wifi key
 *
 * @returns {String} Network configuration.
 *
 * @example
 * networkSettings = settings.getHomeSettings
 *		wifiSsid: 'foobar'
 *		wifiKey: 'hello'
 */

exports.getHomeSettings = function(options) {
  var config, _ref;
  config = '[service_home_ethernet]\nType = ethernet\nNameservers = 8.8.8.8,8.8.4.4';
  if (!_.isEmpty((_ref = options.wifiSsid) != null ? _ref.trim() : void 0)) {
    config += "\n\n[service_home_wifi]\nType = wifi\nName = " + options.wifiSsid;
    if (options.wifiKey) {
      config += "\nPassphrase = " + options.wifiKey;
    }
    config += '\nNameservers = 8.8.8.8,8.8.4.4';
  }
  return config;
};
