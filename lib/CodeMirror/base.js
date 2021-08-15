import { EditorView } from "@codemirror/view";

const lineHeight = "1.4rem !important";
const fontSize = "1.2rem !important";

export const baseTheme = EditorView.baseTheme({
  ".cm-selectionLayer": {
    pointerEvents: "none",
    zIndex: "100",
    opacity: 0.5,
  },
  "&.cm-editor": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
  },
  "&.cm-content": {
    padding: "0",
  },
  ".cm-scroller": {
    fontFamily: `"Fira Code", monospace !important`,
    fontSize: fontSize,
  },
  "&.cm-focused .cm-cursor": {
    borderLeftWidth: "2px",
  },
  ".cm-gutterElement": {
    // marginTop: "0.25rem !important",
    // marginBottom: "0.25rem !important",
  },
  ".cm-foldGutter": {
    width: "1rem",
  },
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection":
    {
      // paddingTop: "0.25rem",
      // paddingBottom: "0.25rem",
    },
  ".cm-panels": {
    position: "absolute !important",
    top: "0 !important",
    right: "50% !important",
    bottom: "auto !important",
  },
  ".cm-button": {
    background: "none",
    backgroundImage: "none !important",
  },
  ".cm-panels.cm-panels-top": { borderBottom: "2px solid !important" },
  ".cm-panels.cm-panels-bottom": { borderTop: "2px solid !important" },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid !important",
  },
  ".cm-matchingBracket, .cm-nonmatchingBracket": {
    outline: "1px solid !important",
  },
  ".cm-gutters": {
    border: "none !important",
    fontSize: "inherit",
  },
  ".cm-line": {
    padding: "0",
    width: "max-content",
  },
  ".cm-lineNumbers, .cm-activeLineGutter": {
    backgroundColor: "transparent",
    fontWeight: "bold",
  },
  ".fold-line": {
    fontWeight: "normal",
  },
  ".cm-foldPlaceholder": {
    border: "none !important",
  },
  ".cm-tooltip": {
    border: "1px solid !important",
  },
});
