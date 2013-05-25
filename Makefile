all: install build

build:
	@component build -d -v

install:
	@component install

clean:
	@rm -r build components

.PHONY: all install build clean
