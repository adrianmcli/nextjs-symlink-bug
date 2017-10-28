# Next.js Symlink Bug Demonstration (solution found!)

Next.js seems to have trouble importing from modules within symlinked folders. In this example repo, I've demonstrated this by putting two folders inside the `lib` directory: `symlink-folder` and `normal-folder`.

Inside each of these folders is a near-identical javascript file that exports a simple object. There is only one page, `index.js` that will read from this and display the text.

# Solution

According to [this Github issue comment](https://github.com/webpack/webpack/issues/1643#issuecomment-317436595), I needed to set `resolve.symlinks: false` in my webpack configuration. So that's exactly what I did inside `next.config.js`:

``js
module.exports = {
  webpack: (config, { buildId, dev }) => {
    config.resolve.symlinks = false
    return config
  }
}
```

And now it works.
