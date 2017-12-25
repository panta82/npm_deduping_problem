# NPM deduping problem

A toy app demonstrating a problem with the combination of using nested node modules and `instanceof`.

If two of your submodules end up using different versions of a shared library, they may end up with separate copies of it. This will cause `instanceof` to break.
Similar problem will appear if you are doing any kind of global mutation of the libraries (eg. configure your validation library in one place, but a different module gets used elsewhere).

The worst part is, there is no reliable way to test this. The problem can just appear when you deploy to production, depending on what npm tool decides to do with your modules.