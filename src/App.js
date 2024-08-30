import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CovidWatchView from './components/CovidWatchView';
import ImpactView from './components/ImpactView';
import ImpactView2 from './components/ImpactView2';
import ImpactView3 from './components/ImpactView3';
import VisionTextView from './components/VisionTextView';
import ToggleSwitch from './components/ToggleSwitch';
import RedirectToApp from './components/RedirectToApp';
import config from './data/config.json';
import './App.css';  // Create and import a CSS file for additional styles

const App = () => {
  const [resumeMode, setResumeMode] = useState(false);
  const [data, setData] = useState(null);

  const shouldDark = (year) => false;//year === 2020 || year === 2024;

  useEffect(() => {
    // Load the JSON data (simulated here as importing config)
    setData(config);
  }, []);

  const renderContent = (year) => {
    if (!data || !data.years) {
      return null; // Return null or a loading indicator if data is not yet loaded
    }

    const yearData = data.years.find(y => y.year === year);
    if (!yearData) return null;

    const darkMode = shouldDark(year);

    return yearData.content.map((item, index) => {
      switch (item.type) {
        case 'teamMember':
          return <Header key={index} name={item.name} bio={item.bio} darkMode={darkMode} />;
        case 'text':
          return <p key={index}>{item.content}</p>;
        case 'toggle':
          return (
            <ToggleSwitch
              key={index}
              label={item.label}
              isOn={resumeMode}
              handleToggle={() => setResumeMode(!resumeMode)}
            />
          );
        case 'covidWatchView':
          return (
            <CovidWatchView
              key={index}
              texts={item.texts}
              resumeMode={resumeMode}
              darkMode={darkMode}
            />
          );
        case 'impactView':
          return (
            <ImpactView
              key={index}
              texts={item.texts}
              resumeMode={resumeMode}
              darkMode={darkMode}
            />
          );
        case 'impactView2':
          return (
            <ImpactView2
              key={index}
              texts={item.texts}
              resumeMode={resumeMode}
              darkMode={darkMode}
            />
          );
        case 'impactView3':
          return (
            <ImpactView3
              key={index}
              texts={item.texts}
              resumeMode={resumeMode}
              darkMode={darkMode}
            />
          );
        case 'visionTextView':
          return (
            <VisionTextView
              key={index}
              text={item.text}
              secondaryText={item.secondaryText}
            />
          );
        case 'link':
          return (
            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <div>
                <p>{item.label}</p>
                <p>{item.description}</p>
              </div>
            </a>
          );
        default:
          return null;
      }
    });
  };

  if (!data) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className="scroll-container">
      {data.years.map((yearData, index) => (
        <section key={index} className="scroll-section">
          {renderContent(yearData.year)}
        </section>
      ))}
      <RedirectToApp/>
    </div>
  );
};

export default App;
