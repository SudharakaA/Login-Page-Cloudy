import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/Cloudyfa.png";
// Iconify React component import
import { Icon } from "@iconify/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lastKey, setLastKey] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  }

  function handleKeyDown(e) {
    setLastKey(e.key.length === 1 ? e.key : "");
  }

  return (
    <div className="login-root">
      <div className="login-promo" style={{ minWidth: 0, flex: "1 1 340px", maxWidth: 480 }}>
        <img src={logo} alt="Cloudyfa Logo" className="login-logo animate-pop" />
        <h1 style={{ marginBottom: "1.1rem" }}>
          <span style={{ color: "#111", minWidth: "8ch", display: "inline-block" }}>
            {/* Optional: Add typewriter effect here if you want */}
            Welcome to
          </span>{" "}
          <span className="brand-gradient">Cloudyfa</span>
        </h1>
        <div
          style={{
            background: "linear-gradient(90deg, #f0f9ff 60%, #a5b4fc 100%)",
            borderRadius: "1.5rem",
            padding: "1rem 1rem",
            margin: "0 0 0.7rem 0",
            boxShadow: "0 2px 16px #a78bfa22",
            border: "1.5px solid #a5b4fc",
            fontSize: "1.01rem",
            lineHeight: 1.6,
            fontWeight: 500,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            minHeight: 120
          }}
        >
          <div className="promo-glow" />
          <span className="tip" style={{ fontSize: "1.05em" }}>
            <Icon icon="mdi:sparkles" style={{ verticalAlign: "middle" }} /> 
            <b>Experience the Future of Cloud!</b>
          </span>
          <br />
          <span style={{ color: "#7c3aed", fontWeight: 700 }}>
            <Icon icon="mdi:magic-staff" style={{ verticalAlign: "middle" }} /> 
            No more hard drives or pendrives—<b>switch to Cloudyfa</b> and access your files anywhere!
          </span>
          <br />
          <span style={{ color: "#3B82F6" }}>
            <Icon icon="mdi:lightbulb-on-outline" style={{ verticalAlign: "middle" }} /> 
            Drag, drop, and share in a blink.
          </span>
          <br />
          <span style={{ color: "#a78bfa" }}>
            <Icon icon="mdi:lock-outline" style={{ verticalAlign: "middle" }} /> 
            End-to-end encrypted. Your privacy, our promise.
          </span>
        </div>
        {/* Free storage and Plus package promo box, compact for no-scroll */}
        <div
          style={{
            background: "linear-gradient(90deg, #f3e8ff 60%, #a5b4fc 100%)",
            borderRadius: "1.2rem",
            padding: "0.7rem 1rem",
            margin: "0 0 0.7rem 0",
            boxShadow: "0 2px 12px #a78bfa22",
            border: "1.5px solid #a5b4fc",
            fontSize: "0.98rem",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.3rem"
          }}
        >
          <div style={{ fontWeight: 600, color: "#4f46e5" }}>
            <Icon icon="mdi:cloud-upload-outline" style={{ verticalAlign: "middle", color: "#7c3aed" }} />{" "}
            <b>5GB Storage Free</b>
          </div>
          <div style={{ color: "#6d28d9" }}>
            Need more? <b>Upgrade to Plus</b> for unlimited possibilities!
          </div>
          <div style={{
            marginTop: "0.2rem",
            background: "linear-gradient(90deg, #a5b4fc 40%, #f0f9ff 100%)",
            borderRadius: "0.7rem",
            padding: "0.35rem 0.7rem",
            fontWeight: 500,
            color: "#3b82f6",
            display: "inline-block"
          }}>
            <Icon icon="mdi:star-circle-outline" style={{ verticalAlign: "middle", color: "#fbbf24" }} />{" "}
            <span>Switch to <b>Plus</b> for extra storage & premium features!</span>
          </div>
        </div>
        <ul className="features-box-list" style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.7rem",
          justifyContent: "center",
          margin: "0 0 1.2rem 0",
          padding: 0
        }}>
          <li className="feature-box animate-fade-in">
            <Icon icon="mdi:palette" style={{ verticalAlign: "middle" }} />
            <span style={{ marginLeft: 6 }}>
              <b>Intuitive dashboard</b>
              <div style={{ fontWeight: 400, fontSize: "0.97em" }}>Organize with color and clarity</div>
            </span>
          </li>
          <li className="feature-box animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Icon icon="mdi:flash" style={{ verticalAlign: "middle" }} />
            <span style={{ marginLeft: 6 }}>
              <b>Lightning uploads</b>
              <div style={{ fontWeight: 400, fontSize: "0.97em" }}>Share files in seconds</div>
            </span>
          </li>
          <li className="feature-box animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Icon icon="mdi:cellphone" style={{ verticalAlign: "middle" }} />
            <span style={{ marginLeft: 6 }}>
              <b>Mobile ready</b>
              <div style={{ fontWeight: 400, fontSize: "0.97em" }}>Access anywhere, anytime</div>
            </span>
          </li>
          <li className="feature-box animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Icon icon="mdi:cloud-upload-outline" style={{ verticalAlign: "middle" }} />
            <span style={{ marginLeft: 6 }}>
              <b>5GB free storage</b>
              <div style={{ fontWeight: 400, fontSize: "0.97em" }}>Plenty of space to start</div>
            </span>
          </li>
        </ul>
        <div className="promo-bubble animate-bounce" style={{ margin: "0 auto", maxWidth: 320 }}>
          <span>
            <Icon icon="mdi:rocket-launch-outline" style={{ verticalAlign: "middle" }} />{" "}
            <b>Start your cloud journey today!</b>
          </span>
        </div>
        <div
          style={{
            marginTop: "1.1rem",
            fontSize: "1.01rem",
            color: "#64748b",
            textAlign: "center"
          }}
        >
          <Icon icon="mdi:shield-lock-outline" style={{ verticalAlign: "middle", color: "#a78bfa" }} />{" "}
          <span style={{ marginLeft: 6 }}>
            <b>Private & Secure</b> · No ads · No tracking
          </span>
        </div>
      </div>
      <div className="login-form-container glass">
        <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
          <h2>
            <span className="gradient-text">
              <Icon icon="mdi:login-variant" style={{ verticalAlign: "middle" }} /> Sign in
            </span>{" "}
            to Cloudyfa
          </h2>
          <label>
            Email
            <div style={{ position: "relative" }}>
              <Icon
                icon="mdi:email-outline"
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#38bdf8",
                  fontSize: 22,
                  pointerEvents: "none"
                }}
              />
              <input
                type="email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  borderColor: email ? "#38bdf8" : undefined,
                  color: "#111",
                  paddingLeft: 38
                }}
                autoComplete="username"
                onKeyDown={handleKeyDown}
              />
            </div>
          </label>
          <label>
            Password
            <div className="password-field" style={{ position: "relative" }}>
              <Icon
                icon="mdi:lock-outline"
                style={{
                  position: "absolute",
                  left: 10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#a78bfa",
                  fontSize: 22,
                  pointerEvents: "none"
                }}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{
                  borderColor: password ? "#a78bfa" : undefined,
                  color: "#111",
                  paddingLeft: 38
                }}
                autoComplete="current-password"
                onKeyDown={handleKeyDown}
              />
              <button
                type="button"
                className="show-hide"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{ right: 8 }}
              >
                <Icon
                  icon={showPassword ? "mdi:eye-off-outline" : "mdi:eye-outline"}
                  style={{ fontSize: 22, color: "#7c3aed" }}
                />
              </button>
            </div>
          </label>
          {lastKey && (
            <div style={{ margin: "0.5rem 0", color: "#3B82F6", fontWeight: 600 }}>
              Last key pressed: <span style={{ color: "#111" }}>{lastKey}</span>
            </div>
          )}
          <button
            type="submit"
            className={`login-btn rainbow-btn${submitted ? " submitted" : ""}`}
            disabled={submitted}
          >
            {submitted ? (
              <>
                <Icon icon="mdi:check-circle-outline" style={{ verticalAlign: "middle" }} /> Welcome!
              </>
            ) : (
              <>
                <Icon icon="mdi:login" style={{ verticalAlign: "middle" }} /> Login
              </>
            )}
          </button>
          <div className="login-links">
            <a href="#">
              <Icon icon="mdi:help-circle-outline" style={{ verticalAlign: "middle" }} /> Forgot password?
            </a>
            <span>·</span>
            <a href="#">
              <Icon icon="mdi:account-plus-outline" style={{ verticalAlign: "middle" }} /> Create an account
            </a>
          </div>
        </form>
        <footer className="login-footer">
          <small>
            <span className="footer-gradient">
              <Icon icon="mdi:cloud-outline" style={{ verticalAlign: "middle" }} /> © 2025 Cloudyfa.
            </span>{" "}
            All rights reserved.
          </small>
        </footer>
      </div>
    </div>
  );
}