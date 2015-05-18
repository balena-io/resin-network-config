var settings, _;

_ = require('lodash');

settings = require('./settings');


/**
 * @summary Get network configuration files
 * @function
 * @public
 *
 * @param {Object} [options={}] - options
 * @param {String} [options.wifiSsid] - wifi ssid
 * @param {String} [options.wifiKey] - wifi key
 *
 * @returns {Object} Network configuration files
 *
 * @example
 * files = network.getFiles
 *		wifiSsid: 'foobar'
 *		wifiKey: 'hello'
 */

exports.getFiles = function(options) {
  if (options == null) {
    options = {};
  }
  if (!_.isPlainObject(options)) {
    throw new Error("Invalid options: " + options);
  }
  return {
    'network/settings': settings.main,
    'network/network.config': settings.getHomeSettings(options)
  };
};
