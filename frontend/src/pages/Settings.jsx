import { useState } from "react";
import styles from "./Settings.module.css";

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(true);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Manage your dashboard preferences</p>
      </div>

      <div className={styles.card}>
        <div className={styles.settingRow}>
          <div>
            <h3>Email Notifications</h3>
            <p>Receive deployment alerts</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(!notifications)
            }
          />
        </div>

        <div className={styles.settingRow}>
          <div>
            <h3>Auto Refresh</h3>
            <p>Refresh dashboard automatically</p>
          </div>

          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={() =>
              setAutoRefresh(!autoRefresh)
            }
          />
        </div>
      </div>

      <div className={styles.card}>
        <h2>Account</h2>

        <div className={styles.accountInfo}>
          <p>Status: Active</p>
          <p>Role: DevOps Engineer</p>
          <p>Environment: Production</p>
        </div>
      </div>
    </div>
  );
}