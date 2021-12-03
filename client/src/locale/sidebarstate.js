export const sidebarstate = (atr) => {
  switch (atr) {
    case "buttons":
      return {
        title: "Buttons",
        parentstyle: {
          display: "grid",
          gridrow: "auto auto auto auto 1fr",
          gridcol: "1fr",
          gta: " 'title''primarybtn' 'warningbtn' 'disabledbtn' ' . ' ",
          pad: "40px 0 0 0",
        },
        properties: [
          {
            text: "Primary",
            bg: "#447475",
            cl: "#ffffff",
            pad: "8px",
            br: "4px",
            bor: "none",
            outl: "none",
            cursor: "pointer",
            ga: "primarybtn",
          },
          {
            text: "Warning",
            bg: "#cf5f1e",
            cl: "#ffffff",
            pad: "8px",
            br: "4px",
            bor: "none",
            outl: "none",
            cursor: "pointer",
            ga: "warningbtn",
          },
          {
            text: "Disabled",
            bg: "#c2bdba",
            cl: "#ffffff",
            pad: "8px",
            br: "4px",
            bor: "none",
            outl: "none",
            cursor: "pointer",
            ga: "disabledbtn",
          },
        ],
      };
    case "inputs":
      return {
        title: "Inputs",
        parentstyle: {
          display: "grid",
          gridrow: "auto auto auto auto 1fr",
          gridcol: "1fr",
          gta: " 'title''primaryinp' 'warninginp' 'disabledinp' ' . ' ",
          pad: "40px 0 0 0",
        },
        properties: [
          {
            text: "Primary",
            cl: "#447475",
            pad: "8px",
            br: "4px",
            bor: "1px solid #447475",
            outl: "none",
            cursor: "pointer",
            ga: "primaryinp",
          },
          {
            text: "Warning",
            cl: "#cf5f1e",
            pad: "8px",
            br: "4px",
            bor: "1px solid #cf5f1e",
            outl: "none",
            cursor: "pointer",
            ga: "warninginp",
          },
          {
            text: "Disabled",
            cl: "#c2bdba",
            pad: "8px",
            br: "4px",
            bor: "1px solid #c2bdba",
            outl: "none",
            cursor: "pointer",
            ga: "disabledinp",
          },
        ],
      };
    case "texts":
      return {
        title: "Texts",
        parentstyle: {
          display: "grid",
          gridrow: "auto auto auto auto 1fr",
          gridcol: "1fr",
          gta: " 'title''primaryinp' 'warninginp' 'disabledinp' ' . ' ",
          pad: "40px 0 0 0",
        },
        properties: [
          {
            text: "Primary",
            cl: "#447475",
            pad: "8px",
            br: "4px",
            bor: "1px solid #447475",
            outl: "none",
            cursor: "pointer",
            ga: "primaryinp",
          },
          {
            text: "Warning",
            cl: "#cf5f1e",
            pad: "8px",
            br: "4px",
            bor: "1px solid #cf5f1e",
            outl: "none",
            cursor: "pointer",
            ga: "warninginp",
          },
          {
            text: "Disabled",
            cl: "#c2bdba",
            pad: "8px",
            br: "4px",
            bor: "1px solid #c2bdba",
            outl: "none",
            cursor: "pointer",
            ga: "disabledinp",
          },
        ],
      };
    default:
      break;
  }
};
