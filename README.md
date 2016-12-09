/**
@class graceful-lwip [![Forked from SourceForge](https://sourceforge.net)]
# GRACEFUL-LWIP

GRACEFUL-LWIP wraps LWIP to allow many open nodejs files.

## Installation

Download the latest version with

	git clone https://git.geointapps.org/acmesds/graceful-lwip

Typically, you will want to redirect the following to your project/master

	ln -s ../master/test.js test.js
	ln -s ../master/maint.sh maint.sh
	
## Usage

	LWIP = require("graceful-lwip");
	
Adjust the default LWIP.maxFilesInFlight = 100 as needed.  As GRACEFUL-LWIP works under the covers, so there are no methods other than
those provided by LWIP.

## License

[MIT](LICENSE)

*/