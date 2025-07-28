import styles from './styles/Navbar.module.css'
import Image from 'next/image';  

export default function Navbar() {
  return (
    <nav className={styles.navbar}>

      <div className={styles.logoContainer}>
        <Image 
          src="/imu-logo.png"
          alt="logo"
          width={130} 
          height={60} 
          className={styles.logo}
        />
      </div>

      <div className={styles.buttonContainer}>
        <button className={styles.profileButton}>
          <span>Mervenur Saraç</span>
          <Image 
            src="/user.png" 
            alt="Profil"
            width={20}
            height={20}
            className={styles.icon}
          />
        </button>
        
        <button className={styles.logoutButton}>
          <span>Çıkış Yap</span>
          <Image 
            src="/logout.png" 
            alt="Çıkış"
            width={20}
            height={20}
            className={styles.icon}
          />
        </button>
      </div>
    </nav>
  )
}