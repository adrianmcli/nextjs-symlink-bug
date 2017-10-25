# Next.js Symlink Bug Demonstration

Next.js seems to have trouble importing from modules within symlinked folders. In this example repo, I've demonstrated this by putting two folders inside the `lib` directory: `symlink-folder` and `normal-folder`.

Inside each of these folders is a near-identical javascript file that exports a simple object. There is only one page, `index.js` that will read from this and display the text.
