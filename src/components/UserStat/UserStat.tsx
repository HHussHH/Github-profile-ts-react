import styles from "./UserStat.module.scss";

interface UserStatProps {}

export const UserStat = ({}: UserStatProps) => (
  <div className={styles.userStat}>UserStat Component</div>
);
