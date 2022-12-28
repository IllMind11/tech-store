import classNames from "classnames";
import { KeyboardEvent } from "react";
import styles from "./input-search.styles.module.css";
import { BiSearch } from "react-icons/bi";

export const InputSearch = ({
  onValueChange,
  onIconClick,
  onEnter,
  onEscape,
  ...props
}: {
  onIconClick?: () => void;
  onValueChange?: (value: string) => void;
  onEnter?: () => void;
  onEscape?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  // ---------------------------------------------------------------------------
  // functions
  // ---------------------------------------------------------------------------

  function onKeyDown(event: KeyboardEvent<any>) {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    } else if (event.key === "Escape" && onEscape) {
      onEscape();
    }
  }
  // ---------------------------------------------------------------------------
  return (
    <>
      <div className={styles.inputContainer}>
        <div className={styles.inputBox}>
          <input
            {...props}
            onChange={
              onValueChange
                ? (event) => onValueChange(event.target.value)
                : undefined
            }
            onKeyDown={onKeyDown}
          />
          <div className={styles.searchIconWrap} onClick={onIconClick}>
            <BiSearch className={styles.searchIcon} />
          </div>
        </div>
      </div>
    </>
  );
};
