import { Theme } from "theme-ui";

export const theme = {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
      body:
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      heading: 'inherit',
      monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    colors: {
      text: '#000',
      background: '#fff',
      primary: '#07c',
      secondary: '#30c',
      muted: '#f6f6f6',
    },
    text: {
      heading: {
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
      headingWithWhiteHighlight: {
        fontFamily: 'heading',
        lineHeight: 5,
        fontWeight: 'heading',
        backgroundColor: "white",
        opacity: "50%"
      }
    },
    styles: {
      root: {
        fontFamily: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
      },
      h1: {
        variant: 'text.heading',
        fontSize: 5,
      },
      h2: {
        variant: 'text.heading',
        fontSize: 4,
        opacity: "100%"
      },
      h3: {
        variant: 'text.heading',
        fontSize: 3,
      },
      h4: {
        variant: 'text.heading',
        fontSize: 2,
      },
      h5: {
        variant: 'text.heading',
        fontSize: 1,
      },
      h6: {
        variant: 'text.heading',
        fontSize: 0,
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
      },
      th: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
      td: {
        textAlign: 'left',
        borderBottomStyle: 'solid',
      },
    },
    grids: {
      nav: {
        background: "url(/images/header.jpg)",
        backgroundSize: 'cover',
        textAlign: "center",
      }
    },
    layout: {
      container: {
        textAllign: "center",
        maxWidth: 1024,
        backgroundColor: "muted"
      },
      borderedNotbackgroundCovered: {
        textAllign: "center",
        maxWidth: 512,
        border: "1px solid black",
      }
    },
    images: {
      me: {
        width: "25%",
        height: "25%"
      }
    }
  }