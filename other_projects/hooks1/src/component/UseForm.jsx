import { useState } from "react";

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  // console.log(value)
  return [
    value,
    (event) => {
      event?.type === "click"
        ? setValue(initialValue)
        : setValue({ ...value, [event?.target?.name]: event?.target?.value });
    },
  ];
};
