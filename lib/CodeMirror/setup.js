import {
  highlightSpecialChars,
  drawSelection,
  highlightActiveLine,
  keymap,
} from "@codemirror/view";
export { EditorView } from "@codemirror/view";
import { EditorState } from "@codemirror/state";
export { EditorState } from "@codemirror/state";
import { history, historyKeymap } from "@codemirror/history";
import { foldGutter, foldKeymap } from "@codemirror/fold";
import { indentOnInput } from "@codemirror/language";
import { lineNumbers, highlightActiveLineGutter } from "@codemirror/gutter";
import { defaultKeymap, defaultTabBinding } from "@codemirror/commands";
import { bracketMatching } from "@codemirror/matchbrackets";
import { closeBrackets, closeBracketsKeymap } from "@codemirror/closebrackets";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { autocompletion, completionKeymap } from "@codemirror/autocomplete";
import { commentKeymap } from "@codemirror/comment";
import { rectangularSelection } from "@codemirror/rectangular-selection";
import { defaultHighlightStyle } from "@codemirror/highlight";
import { lintKeymap } from "@codemirror/lint";

const setup = [
  drawSelection(),
  highlightSpecialChars(),
  history(),
  // foldGutter({
  //   markerDOM: (open) => {
  //     let el = document.createElement("span");
  //     el.className = "cm-fold";
  //     el.className += open ? " cm-fold-open" : " cm-fold-closed";
  //     el.innerHTML = open ? "⌄" : "›";
  //     return el;
  //   },
  // }),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  defaultHighlightStyle.fallback,
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([
    defaultTabBinding,
    ...closeBracketsKeymap,
    ...defaultKeymap,
    // ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...commentKeymap,
    ...completionKeymap,
    ...lintKeymap,
  ]),
];

export { setup };
