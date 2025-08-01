
import Card from "@/components/cards/Card";
import styles from "./page.module.css";

export default function UploadPage() {
  return (
    <div className={styles.container}>
      <Card title="staj raporu-defteri" />
      <Card title="staj değerlendirme formu" />
      <Card title="staj puantaj cetveli" />
    </div>
  );
}
