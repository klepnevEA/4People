import ReactSelect from "react-select";
import cs from "classnames";
import styles from "./item-select.module.scss";
import { customStyles } from "./styles";

type Props = {
  options: any;
  defaultValue?: any;
  className?: string;
  disabled?: boolean;
  label?: string;
  isMulti?: boolean;
  valueProp?: any;
};

export const ItemSelect = ({
  options,
  className,
  disabled = false,
  label,
}: Props) => {
  return (
    <div className={cs(styles.reactSelect, className)}>
      {label?.length !== 0 ? (
        <div className={styles.selectLabel}>{label}</div>
      ) : null}
      <ReactSelect
        options={options}
        placeholder="выберете чтонибудь"
        styles={customStyles()}
      />
    </div>
  );
};
