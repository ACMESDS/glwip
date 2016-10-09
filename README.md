# Totem GRACEFUL-LWIP

[![Forked from SourceForge](https://sourceforge.net)]

[Totem](https://git.geointapps.org/acmesds/transfer)'s GRACEFUL-LWIP module wraps
the NodeJS LWIP to provide a work-around to nodejs open file limits.

## Installation

Download and unzip into your project/totem folder and revise the project/config module as needed
for your [Totem](https://git.geointapps.org/acmesds/transfer) project.  Typically, you will
want to:

	ln -s ../config/debe.sh config.sh
	ln -s ../config/maint.sh maint.sh
	ln -s ../config/certs certs
	
to override the defaults.

## Usage

	LWIP = require("graceful-lwip");
	
Adjust the default LWIP.maxFilesInFlight = 100 as needed.  See NodeJS LWIP for LWIP usage.

## License

[MIT](LICENSE)
