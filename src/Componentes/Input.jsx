import styles from "./Input.module.css";

export default function Input({
  value,
  type,
  name,
  handleChange,
  placeholder,
  customStyles,
}) {
  return (
    <>
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={styles[customStyles]}
      required
    />
    </>
  );
}
