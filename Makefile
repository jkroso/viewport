all: install build test

build:
	@component build -d -v

install:
	@component install

clean:
	@rm -rf build components

test:
	@google-chrome test/index.html

docs:
	@cat docs/head.md > Readme.md
	@dox --api < src/index.js >> Readme.md
	@cat docs/tail.md >> Readme.md

.PHONY: all install build test clean docs
