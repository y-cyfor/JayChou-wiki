import {
  flowRendererV2,
  flowStyles
} from "./chunk-S7ZPAMSD.js";
import {
  flowDb,
  parser$1
} from "./chunk-AZXUVENL.js";
import "./chunk-2YQALJRN.js";
import "./chunk-C4ZSV3ZH.js";
import "./chunk-J2PZ3CCW.js";
import "./chunk-PDFBV7JE.js";
import "./chunk-C3ARYQRY.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-HVB7Q4HW.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

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
//# sourceMappingURL=flowDiagram-v2-13329dc7-ITH35UFP.js.map
