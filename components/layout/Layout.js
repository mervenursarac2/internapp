import Navbar from './Navbar'
import Sidebar from './Sidebar'
import styles from './styles/Layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Navbar />
      <main className={styles.content}>{children}</main>
    </div>
  )
}