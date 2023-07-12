import react, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [invalid, setInvalid] = useState(false);
  const [subbed, setSubbed] = useState(false);

  return (
    <main className="main-container">
      {!subbed ? (
        <div className="default-stuff-container">
          <div className="info-container">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>
            <form>
              <div className="input-labels">
                <h2>Email address</h2>
                <h2
                  style={
                    invalid
                      ? {
                          color: "var(--tomato)",
                        }
                      : { display: "none" }
                  }
                >
                  Valid email required
                </h2>
              </div>
              <input
                type="email"
                placeholder="email@company.com"
                style={
                  invalid
                    ? {
                        border: "1px solid var(--tomato)",
                        color: "var(--tomato)",
                        backgroundColor: "var(--tomato-tp)",
                      }
                    : {}
                }
                value={input}
                onChange={async (e) => {
                  await setInput(e.target.value);
                  await setInvalid(false);
                }}
              />
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  if (!input) {
                    await setInvalid(true);
                  } else if (
                    !input.match(
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                    )
                  ) {
                    await setInvalid(true);
                  } else {
                    await setSubbed(true);
                  }
                }}
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="img-container">

          </div>
          {/* <img src="/assets/images/illustration-sign-up-desktop.svg" /> */}
        </div>
      ) : (
        <div className="subbed-stuff-container">
          <div className="info-container">
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to <span>{input}</span>. Please
              open it and click the button inside to confirm your subscription.
            </p>
            <button onClick={async () => {await setInput("")
              await setInvalid(false)
              await setSubbed(false)
            }}>Dismiss message</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
