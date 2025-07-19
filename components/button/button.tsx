import styles from "./button.module.css";

type Props = {
  onClick: () => void;
  label: string;
  loading: boolean;
};

export default function Button({ onClick, label, loading }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container}>
          {loading ? (
            <span className={`loader`}></span>
          ) : (
            <button className={styles.buttons} onClick={onClick}>
              {label}
            </button>
          )}
        </div>
      </div>
    </>
  );
}
