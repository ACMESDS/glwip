/**
@class graceful-lwip [![Forked from SourceForge](https://sourceforge.net)]
# GRACEFUL-LWIP

The GRACEFUL-LWIP module wraps the NodeJS LWIP to provide a work-around to nodejs open file limits.

## Installation

Download the latest version with

	git clone https://git.geointapps.org/acmesds/graceful-lwip

Typically, you will want to redirect the following to your project/master

	ln -s ../master/test.js test.js
	ln -s ../master/maint.sh maint.sh
	
## Usage

	LWIP = require("graceful-lwip");
	
Adjust the default LWIP.maxFilesInFlight = 100 as needed.  See NodeJS LWIP for LWIP usage.

## License

[MIT](LICENSE)

*/