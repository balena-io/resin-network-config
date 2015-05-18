resin-network-config
--------------------

[![npm version](https://badge.fury.io/js/resin-network-config.svg)](http://badge.fury.io/js/resin-network-config)
[![dependencies](https://david-dm.org/resin-io/resin-network-config.png)](https://david-dm.org/resin-io/resin-network-config.png)
[![Build Status](https://travis-ci.org/resin-io/resin-network-config.svg?branch=master)](https://travis-ci.org/resin-io/resin-network-config)

Handle resin images network configuration.

Installation
------------

Install `resin-network-config` by running:

```sh
$ npm install --save resin-network-config
```

Documentation
-------------

### Object network.getFiles(Object options = {})

Get network related configuration files.

The function accepts an optional `options` object which can have the following properties:

- `options.wifiSsid`, a string that represents the wifi ssid to connect to. If this property is not defined, only ethernet connection will be configured for the device.
- `options.wifiKey`, a string that represents the wifi key to use with the defined wifi ssid. If this property is not defined, then the wifi connection will be configured without a passphrase.

```coffee
networkConfig = require('resin-network-config')

files = networkConfig.getFiles
	wifiSsid: 'foobar'
	wifiKey: 'hello'

console.log(files)
```

***

```coffee
{
	'network/settings': '''
		[global]
		OfflineMode=false

		[WiFi]
		Enable=true
		Tethering=false

		[Wired]
		Enable=true
		Tethering=false

		[Bluetooth]
		Enable=true
		Tethering=false
	''',
	'network/network.config': '''
		[service_home_ethernet]
		Type = ethernet
		Nameservers = 8.8.8.8,8.8.4.4

		[service_home_wifi]
		Type = wifi
		Name = foobar
		Passphrase = hello
		Nameservers = 8.8.8.8,8.8.4.4
	'''
}
```

Tests
-----

Run the test suite by doing:

```sh
$ gulp test
```

Contribute
----------

- Issue Tracker: [github.com/resin-io/resin-network-config/issues](https://github.com/resin-io/resin-network-config/issues)
- Source Code: [github.com/resin-io/resin-network-config](https://github.com/resin-io/resin-network-config)

Before submitting a PR, please make sure that you include tests, and that [coffeelint](http://www.coffeelint.org/) runs without any warning:

```sh
$ gulp lint
```

Support
-------

If you're having any problem, please [raise an issue](https://github.com/resin-io/resin-network-config/issues/new) on GitHub.

License
-------

The project is licensed under the MIT license.
