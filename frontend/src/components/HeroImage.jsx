import { useState } from "react";
import React from "react" ;

function Terminal() {
  return(
    <div className="mockup-code w-full">
      <pre data-prefix="$"><code>npm i daisyui</code></pre>
      <pre data-prefix=">" className="text-warning"><code>installing...</code></pre>
      <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
    </div>
  );
}

export default Terminal ;