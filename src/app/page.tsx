// pages/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import Header from './components/Header';
import SocialDock from "./components/SocialDock"
import CovidWatchView from './components/CovidWatchView';
import ImpactView from './components/ImpactView';
import ImpactView2 from './components/ImpactView2';
import ImpactView3 from './components/ImpactView3';
import VisionTextView from './components/VisionTextView';
import ToggleSwitch from './components/ToggleSwitch';
import { AppsView } from './components/AppsView';
import config from './data/config.json';
import './globals.css';

// Define interfaces for the JSON data
interface YearData {
  year: number;
  content: ContentItem[];
}

interface ContentItem {
  type: string;
  [key: string]: any; // Additional properties depending on type
}

interface ConfigData {
  years: YearData[];
}

const Home: React.FC = () => {
  const [resumeMode, setResumeMode] = useState<boolean>(false);
  const [data, setData] = useState<ConfigData | null>(null);

  const shouldDark = (year: number): boolean => false; // Modify as needed

  useEffect(() => {
    // Load the JSON data (simulated here as importing config)
    setData(config as ConfigData);
  }, []);

  const renderContent = (year: number) => {
    if (!data || !data.years) {
      return null; // Return null or a loading indicator if data is not yet loaded
    }

    const yearData = data.years.find((y) => y.year === year);
    if (!yearData) return null;

    const darkMode = shouldDark(year);

    return yearData.content.map((item, index) => {
      switch (item.type) {
        case 'teamMember':
          return <Header key={index} name={item.name} bio={item.bio} darkMode={darkMode} work={undefined} />;
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
            <a style={{marginTop: "20px"}} key={index} href={item.url} target="_blank" rel="noopener noreferrer">
              <div>
                <p>{item.label}</p>
                <p>{item.description}</p>
              </div>
            </a>
          );
        case "apps":
         return <AppsView />

        case "dock":
          return <SocialDock/>
        default:
          return null;
      }
    });
  };

  if (!data) {
    return <div>Loading...</div>; // Add a loading state
  }

  return (
    <div className='zstack-container'>
     
     <BackgroundBeams/>
    <div className="scroll-container">
      {data.years.map((yearData, index) => (
        <section key={index} className="scroll-section">
          {renderContent(yearData.year)}
        </section>
      ))}
     
      </div>
      
    </div>
  );
};

export default Home;