import styles from "./styles.module.scss";
import Dropdown from "react-dropdown";

export default function NameDropdown() {
  const options = [
    {
      value: "Turkey",
      label: "Turkey",
      className: styles.item,
    },
    {
      value: "USA",
      label: "USA",
      className: styles.item,
    },
    {
      value: "UK",
      label: "UK",
      className: styles.item,
    },
    {
      value: "Germany",
      label: "Germany",
      className: styles.item,
    },
    {
      value: "Japan",
      label: "Japan",
      className: styles.item,
    },
  ];
  return (
    <div>
      <Dropdown
        menuClassName={styles.menu}
        controlClassName={styles.select}
        options={options}
      />
    </div>
  );
}
