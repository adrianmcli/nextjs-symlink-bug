import React from 'react'

// If you use the symlink-folder line instead of the normal-folder line
// and do a hard refresh, Next.js will break:
import someObj from '../lib/normal-folder/someText'
// import someObj from '../lib/symlink-folder/someText'

export default () => <div>{someObj.text}</div>
