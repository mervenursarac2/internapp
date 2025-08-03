'use client'; 
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ title }) => {
  // stateler
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null); 

  // dosya seçimi
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setIsUploading(true);
      
      setTimeout(() => {
        setIsUploading(false);
      }, 1500);
    }
  };

  // click ile dosya seçici açılması
  const handleCardClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        <h2>{title}</h2>
        {selectedFile && !isUploading && (
          <p className={styles.fileName}>{selectedFile.name}</p>
        )}
      </div>
      
      <div 
        className={styles.cardUpload} 
        onClick={handleCardClick}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className={styles.fileInput}
          accept=".pdf,.doc,.docx,.jpg,.png" //izin verilen dosya türleri
        />
        
        {/* ikonlar */}
        {isUploading ? (
          <div className={styles.uploadStatus}>
            <Image
              src="/loading-icon.png"
              alt="Yükleniyor"
              width={60}
              height={60}
              className={styles.loadingIcon}
            />
            <span>Yükleniyor...</span>
          </div>
        ) : selectedFile ? (
          <div className={styles.uploadStatus}>
            <Image
              src="/success-icon.png"
              alt="Yüklendi"
              width={60}
              height={60}
            />
          </div>
        ) : (
          <Image
            src="/upload-icon.png"
            alt="Yükle"
            width={60}
            height={60}
            className={styles.uploadIcon}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
