import {
  flowRendererV2,
  flowStyles
} from "./chunk-KJUKASLE.js";
import "./chunk-PS3XN4R3.js";
import {
  flowDb,
  parser$1
} from "./chunk-DPWEDHNK.js";
import "./chunk-KWACYIE6.js";
import "./chunk-3E36INXG.js";
import "./chunk-KSFFU3TM.js";
import "./chunk-ER7XNORN.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-DCALE6RB.js";
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
//# sourceMappingURL=flowDiagram-v2-13329dc7-NHRMWPXU.js.map
