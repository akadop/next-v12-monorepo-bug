Next v12 has a function that, on dev or build, will look at the tsconfig and make suggestions.

If you have a mono repo setup and the nearest tsconfig is not at the root of the repo, extending a tsconfig without the `incremental` config option will break the build.

To see this, just try running `yarn dev` without making any changes. You should see this error:

````
TypeError: Cannot set property 'incremental' of undefined
    at ~\v12-next-bug\node_modules\next\dist\lib\typescript\writeConfigurationDefaults.js:150:57)
    at async Object.verifyTypeScriptSetup (~\v12-next-bug\node_modules\next\dist\lib\verifyTypeScriptSetup.js:81:9)
    at async DevServer.prepare (~\v12-next-bug\node_modules\next\dist\server\dev\next-dev-server.js:262:9)
    ```
````

If you go into the next.config and point the tsconfigPath at the nearest tsconfig, you get the same error.

If you instead point it to the tsconfig at the root of the repo, the build has no issues
