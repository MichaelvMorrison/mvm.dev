import CodeMirror from "rodemirror";
import { setup } from "../../lib/CodeMirror/setup";
import { darkTheme } from "../../lib/CodeMirror/dark";
import { lightTheme } from "../../lib/CodeMirror/light";
import { baseTheme } from "../../lib/CodeMirror/base";
import { javascript } from "@codemirror/lang-javascript";
import { useMemo } from "react";
import { useTheme } from "next-themes";

export default function Editor({ value, setValue, scriptData }) {
  const { resolvedTheme } = useTheme();
  const extensions = useMemo(
    () => [
      setup,
      baseTheme,
      ...(resolvedTheme !== "dark" ? lightTheme : darkTheme),
      javascript(),
    ],
    [resolvedTheme]
  );

  return (
    <div className="w-full h-full overflow-x-auto overflow-y-auto no-scrollbar">
      <CodeMirror
        extensions={extensions}
        value={value}
        onUpdate={(v) => {
          if (v.docChanged) {
            setValue(v.state.doc.toString());
          }
        }}
      />
    </div>
  );
}
