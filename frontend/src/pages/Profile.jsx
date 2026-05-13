import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { getMe, getDeployments, getLogs } from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [deployments, setDeployments] = useState([]);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfileData() {
      try {
        const userRes = await getMe();
        const deploymentRes = await getDeployments();
        const logsRes = await getLogs();

        setUser(userRes.data.user);
        setDeployments(deploymentRes.data);
        setLogs(logsRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadProfileData();
  }, []);

  if (loading) {
    return (
      <div className={styles.page}>
        <p>Loading profile...</p>
      </div>
    );
  }

  const successCount = deployments.filter(
    (item) => item.status === "success"
  ).length;

  const failedCount = deployments.filter(
    (item) => item.status === "failed"
  ).length;

  const runningCount = deployments.filter(
    (item) => item.status === "in-progress"
  ).length;

  const successRate = deployments.length
    ? ((successCount / deployments.length) * 100).toFixed(1)
    : 0;

  const recentLogs = logs.slice(0, 5);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.profileCard}>
          <div className={styles.avatar}>
            {user?.username?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div>
            <h1 className={styles.name}>
              {user?.username || "Unknown User"}
            </h1>

            <p className={styles.email}>
              {user?.email || "No Email"}
            </p>

            <span className={styles.role}>
              DevOps Engineer
            </span>
          </div>
        </div>
      </div>

      {/* <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Deployments</h3>
          <p>{deployments.length}</p>
        </div>

        <div className={styles.statCard}>
          <h3>Success Rate</h3>
          <p>{successRate}%</p>
        </div>

        <div className={styles.statCard}>
          <h3>Failed Deployments</h3>
          <p>{failedCount}</p>
        </div>

        <div className={styles.statCard}>
          <h3>Running Deployments</h3>
          <p>{runningCount}</p>
        </div>
      </div> */}

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Current Activity</h2>
        </div>

        <div className={styles.activityCard}>
          <p>
            Monitoring deployments and infrastructure activity
            in real-time.
          </p>

          <div className={styles.activityStatus}>
            <span className={styles.liveDot}></span>
            <span>System Active</span>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Recent Logs</h2>
        </div>

        <div className={styles.logsContainer}>
          {recentLogs.map((log) => (
            <div key={log._id} className={styles.logRow}>
              <div className={styles.logTop}>
                <span className={styles.logService}>
                  {log.service}
                </span>

                <span className={styles.logLevel}>
                  {log.level}
                </span>
              </div>

              <p className={styles.logMessage}>
                {log.message}
              </p>

              <span className={styles.logTime}>
                {new Date(
                  log.createdAt
                ).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}