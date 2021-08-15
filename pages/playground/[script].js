import { getAllScriptPaths, getScriptData } from "../../lib/playground";
import Editor from "../../components/playground/Editor";
import { useEffect, useState } from "react";
import ThemeChanger from "../../components/global/ThemeChanger";

export default function Script({ scriptData }) {
  const [codeLoaded, setCodeLoaded] = useState(false);
  const [activeCode, setActiveCode] = useState("");
  const [activeFile, setActiveFile] = useState("");
  const [code, setCode] = useState([]);
  const [srcDoc, setSrcDoc] = useState("");

  const updateSrcDoc = () => {
    let str = "";
    code.map((script) => {
      if (script.type === "js") {
        str += `<script>${script.data}</script>`;
      } else if (script.type === "css") {
        str += `<style>${script.data}</style>`;
      }
    });
    setSrcDoc(
      `<html><script src="https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js"></script>${str}<html>`
    );
  };

  // on Mount
  useEffect(() => {
    setCode(scriptData);
    setActiveCode(scriptData[0].data);
    setActiveFile(scriptData[0].name);
    setCodeLoaded(true);
  }, [scriptData]);

  useEffect(() => {
    if (code.length > 0) {
      let _code = code;
      let replaceIdx = code.indexOf(
        code.filter((script) => script.name == activeFile)[0]
      );
      if (replaceIdx !== -1) {
        _code[replaceIdx].data = activeCode;
        setCode(_code);
      }
    }
    updateSrcDoc();
  }, [activeCode, code, activeFile]);

  return (
    <div className="no-scrollbar">
      <div className="no-scrollbar">
        <div className="absolute top-24 right-24 z-50">
          <ThemeChanger />
        </div>
        <div className="p-4 absolute inset-0 z-10 no-scrollbar">
          {codeLoaded && (
            <Editor
              value={activeCode}
              setValue={setActiveCode}
              scriptData={scriptData}
            />
          )}
        </div>
        <div className="absolute inset-0 z-0">
          <iframe
            allowusermedia
            allow="accelerometer;autoplay;camera;encrypted-media;geolocation;gyroscope;microphone;magnetometer;midi;vr;"
            className="w-full h-full"
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const scriptData = getScriptData(context.params.script);
  return {
    props: { scriptData },
  };
}

export async function getStaticPaths() {
  const paths = getAllScriptPaths();
  return {
    paths,
    fallback: false,
  };
}
