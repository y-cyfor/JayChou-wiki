import {
  flowRendererV2,
  flowStyles
} from "./chunk-Z6NDP3TW.js";
import {
  flowDb,
  parser$1
} from "./chunk-TH4TIVMP.js";
import "./chunk-BC4KKTSK.js";
import "./chunk-P6YGUKB5.js";
import "./chunk-BWL3UGDL.js";
import "./chunk-PB4GW34A.js";
import "./chunk-FSI2BEOJ.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-LGDIGAV6.js";
import {
  __toESM
} from "./chunk-3EJPJMEH.js";

// node_modules/.pnpm/mermaid@10.9.1/node_modules/mermaid/dist/flowDiagram-v2-13329dc7.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-13329dc7-H4R2TVUX.js.map
