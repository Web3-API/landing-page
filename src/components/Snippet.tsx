import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl"; 
import { ReactComponent as Buttons } from "../assets/WindowButtons.svg"
import { blueGrey } from "@material-ui/core/colors";
import { styled } from "@material-ui/core";

const exampleCode = `client.query({
  uri: new Uri('ens/api.protocol.eth'),
  query: \`mutation {
    doComplexThing(arg: "value")
  }\`
})
`.trim();


const Wrapper = styled("div") ({
  fontFamily: 'sans-serif',
  textAlign: 'center',
});

const Pre = styled("pre") ({
  overflow: 'auto',

  textAlign: 'left',
  margin: '1em 0',
  padding: '0.5em',
  fontSize: 'large',
  paddingLeft: "25px",
  "& .token-line": {
    lineHeight: '1.3em',
    height: '1.3em',
  }
});

const Line = styled("div") ({
  display: 'table-row'
});

const LineNo = styled("span") ({
  display: 'table-cell',
  textAlign: 'right',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: 0.5,
});

const LineContent = styled("span") ({
  display: 'table-cell',
});


const stylesConst = {
  root: {
    boxSizing: 'border-box',
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    borderRadius: "0px 0px 15px 15px",
    width: "100%",

    ...theme.plain
  },
  window: {
    maxWidth: '75vh',
    width: '100%',
    //padding: '15px',
    margin:'auto',
    borderRadius: "15px",
    backgroundColor: '#011627',
    boxShadow: "20px 20px 20px rgba(0, 0, 0, 0.15)",
    fontFamily: '"Montserrat", "Arial", sanserif',
    fontWeight: 500,
    color: "white",
    
  },
  tab: {
    margin: '5px',
    padding: '15px 0px 0px 15px',

  },
  buttons: {
    marginRight: '10px'
  }
}


const WithLineNumbers = () => (
  <div style={stylesConst.window}>
    <p style={stylesConst.tab}>    
      <Buttons style={stylesConst.buttons}/>
      SampleTitle
    </p>
      <Highlight {...defaultProps} theme={theme} code={exampleCode} language="jsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line  key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
        </Highlight>
  </div>
);

export default WithLineNumbers;




