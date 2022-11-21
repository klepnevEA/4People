export const customStyles = () => ({
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "transparent",
    width: "100%",
    height: "48px",
    minHeight: "48px",
    borderRadius: "var(--border-radius)",
    borderColor: "var(--gray-color) !important",
    boxShadow: "none",
    fontSize: "16px",
    lineHeight: "22px",
    cursor: "pointer",
  }),

  option: (styles: any, { isSelected }: any) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "var(--bg-color)  !important"
        : "var(--white-color) !important",
      color: "var(--black-color)",
      height: "38px",
      cursor: "pointer",
    };
  },
  menu: (styles: any) => ({
    ...styles,
    width: "100%",
    margin: 0,
    padding: "calc(var(--gap) * 2)",
    zIndex: "5",
  }),
  menuList: (styles: any) => ({
    ...styles,
    paddingRight: "calc(var(--gap) * 2)",
    "::-webkit-scrollbar": {
      width: "8px",
      height: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "var(--main--color)",
      borderRadius: "8px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: "var(--main-color)",
    },
  }),
  input: (styles: any) => ({ ...styles }),
  placeholder: (styles: any) => ({
    ...styles,
    color: "var(--black-color)",
  }),
  indicatorSeparator: (styles: any) => ({ ...styles, display: "none" }),
  indicatorsContainer: (styles: any) => ({
    ...styles,
    height: "100%",
    display: "flex",
    "&>div": {
      padding: "0px 9px",
    },
  }),
  valueContainer: (styles: any) => ({
    ...styles,
    padding: "0px 12px",
  }),
});
