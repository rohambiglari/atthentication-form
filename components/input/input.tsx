import styles from "./input.module.css";

type Props = {
  title: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
};

export default function Input({
  title,
  value,
  onChange,
  placeholder,
  error,
}: Props) {
  return (
    <div>
      <p className={styles.placeholder}>{placeholder}.</p>
      <div className={styles.container}>
        <p className={styles.title}>{title}:</p>
        <input
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
      {error && <p className={styles.error}>*{error}</p>}
    </div>
  );
}
