
const engine = "Google"
export function getEngineConfig() {
    const cue = chrome.i18n.getMessage("calculator_cue");
    const config= {
        Google: {
            name: "Google",
            selector: "div[jscontroller=GCPuBe]",            
            url: () => `https://www.google.com/search?q=${cue}`,
            applyCss: () => {
                const style = document.createElement("style");
                style.textContent = `                    
                    body.srp {
                        overflow-x: hidden;
                        --center-width: 350px;
                    }  
                `;
                document.body.appendChild(style);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("span[role=link]").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });
            },
        },
        DuckDuckGo: {
            name: "DuckDuckGo",
            selector: "div.calculator--wrap.tile--calculator",            
            url: () => `https://duckduckgo.com/?q=${cue}`,
            applyCss: () => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.type = "text/css";
                link.href = chrome.runtime.getURL("content-script/calculator.css"),
                link.itemprop = "url";
                document.body.appendChild(link);

                // Remove links to avoid navigating away.
                document.body.querySelectorAll("a").forEach(a => {
                    a.parentElement?.replaceChild(document.createTextNode(a.textContent!), a);
                });                
            },
        }
    }
    return config[engine];
}