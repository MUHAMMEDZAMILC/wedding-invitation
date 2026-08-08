import { useState } from "react";
import { Link } from "react-router-dom";
import templates, { RELIGIONS } from "../templates/registry";
import "./home.css";

const TABS = [{ id: "recommended", label: "Recommended" }, ...RELIGIONS];

export default function Home() {
  const [activeTab, setActiveTab] = useState("recommended");

  const visibleTemplates =
    activeTab === "recommended"
      ? templates
      : templates.filter((tmpl) => tmpl.religion === activeTab);

  return (
    <main className="home">
      <header className="home__header">
        <span className="home__eyebrow">Wedding Invitation Templates</span>
        <h1 className="home__title">Choose a Template</h1>
        <p className="home__subtitle">
          Pick a design to preview the full invitation.
        </p>
      </header>

      <div className="home__tabs" role="tablist" aria-label="Filter by religion">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`home__tab ${activeTab === tab.id ? "home__tab--active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="home__grid">
        {visibleTemplates.map((tmpl) => {
          const Thumbnail = tmpl.thumbnail;
          const isReady = tmpl.status === "ready";

          const card = (
            <>
              <div className="home__card-preview">
                {Thumbnail ? (
                  <Thumbnail />
                ) : (
                  <div className="home__card-placeholder">
                    <span>Coming soon</span>
                  </div>
                )}
              </div>
              <div className="home__card-body">
                <h2 className="home__card-name">{tmpl.name}</h2>
                <p className="home__card-desc">{tmpl.description}</p>
                {isReady && <span className="home__card-cta">View invitation →</span>}
              </div>
            </>
          );

          return isReady ? (
            <Link
              key={tmpl.id}
              to={`/template/${tmpl.id}`}
              className="home__card"
              aria-label={`View ${tmpl.name} template`}
            >
              {card}
            </Link>
          ) : (
            <div
              key={tmpl.id}
              className="home__card home__card--disabled"
              aria-disabled="true"
            >
              {card}
            </div>
          );
        })}
      </div>
    </main>
  );
}
