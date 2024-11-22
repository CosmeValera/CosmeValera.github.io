+++
title = "Develop with Vite"
template = "blog-post.html"
description = "Development and challenges when launching a Vite project using the Module Federation plugin"
+++

![blog-cover](/images/blog/2024-08-02/vite.png)

<h4><b>🧪 Development</b></h4>

We need to execute `npm run build` and then `npm run preview` to have the <b>Vite</b> application running with Module Federations.

We have 2 options for having it in one command:

<b>Option 1.</b> Use `concurrently`:
- 1.1 `package.json`:
<div class="code-block">"preview:watch": "concurrently \"vite preview --port 4001 -l silent\" \"vite build --watch\""</div>

<div style="margin-top: 1.5rem;"></div>

<b>Option 2.</b> Create a custom script:
- 2.1 `package.json`:
<div class="code-block">
"start": "bash vite-execution-script.sh 4001",
</div>

- 2.2 Custom script:
<div class="code-block">

#!/bin/bash
  
PORT="$1"

\# If the port is already in use, then kill the PID related to that port  
PID=$(netstat -ano | grep ":${PORT} " | grep LISTENING | awk '{print $5}')
 
if [ -n "$PID" ]; then
    taskkill //F //PID $PID
fi
 
\# Run 'npm run build --watch' in the background and store its process ID  
npm run build &
BUILD_WATCH_PID=$!
 
\# Wait for a brief moment to ensure the 'build --watch' process is up and running  
sleep 2
 
\# Run 'npm run preview' also in the background and store its process ID  
npm run preview &
PREVIEW_PID=$!
 
printf 'Welcome: %s\n' "$BUILD_WATCH_PID $PREVIEW_PID"
 
\# Wait for any background job to finish (if one finishes, they both should be killed)  
wait -n
 
\# Kill both processes if they are still running  
kill $BUILD_WATCH_PID $PREVIEW_PID 2>/dev/null
</div>

![garnalds](/images/blog/general/garlands.png)

<h4><b>🔃 Challenges with HMR and Module Federations</b></h4>
Vite excels in many areas, but achieving Hot Module Reload (HMR) with Module Federation is difficult. Developers must manually refresh the screen after changes. Despite forum discussions about a potential <code>npm run preview --watch</code> command, as of June 15, 2024, no direct solution exists for seamless HMR.

<div style="margin-top: 1.5rem;"></div>

<b>Theoretical Expectation</b>
- `npm run dev` should ideally create the Module Federation JavaScript file (`remoteEntry.js`) automatically.
- This behavior is not observed due to limitations in the `vite-plugin-federation`.