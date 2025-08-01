'use client';
import { useState } from 'react';
import styles from './styles/StajTabs.module.css';
import { stajData } from './stajData';

export default function StajTabs() {
  const [activeTab, setActiveTab] = useState('yurt-ici');

  return (
    <div className={styles.container}>
      <nav className={styles.tabs}>
        {Object.keys(stajData).map((tabKey) => (
          <div
            key={tabKey}
            className={`${styles.folderTab} ${activeTab === tabKey ? styles.selected : ''}`}
            onClick={() => setActiveTab(tabKey)}
          >
            <span>{stajData[tabKey].title}</span>
          </div>
        ))}
      </nav>
      
      <div className={styles.page}>
        {stajData[activeTab].sections.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.title}</h2>
            <div 
              dangerouslySetInnerHTML={{ __html: section.content }}
              className={styles.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
}