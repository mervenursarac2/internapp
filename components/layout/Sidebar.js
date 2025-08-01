import Link from 'next/link';
import styles from './styles/Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { icon: '/home.png', label: 'Ana Sayfa', path: '/' },
    { icon: '/report.png', label: 'Belgeler', path: '/belgeler' },
    { icon: '/upload-icon.png', label: 'Yükleme', path: '/upload' },
    { icon: '/settings.png', label: 'Ayarlar', path: '/ayarlar' },
    { icon: '/question-sign.png', label: 'İnfo', path: '/info' },

  ];

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <Link key={index} href={item.path} passHref>
          <div className={styles.menuItem}>
            <div className={styles.iconContainer}>
              <img 
                src={item.icon} 
                alt={item.label}
                className={styles.icon}
              />
            </div>
            <span className={styles.label}>{item.label}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;