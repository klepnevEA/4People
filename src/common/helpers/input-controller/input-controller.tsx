import { useFormState, useWatch } from "react-hook-form";

export const InputController = ({
  control,
  register,
  name,
  rules,
  render,
}: any) => {
  const value = useWatch({
    control,
    name,
  });
  const { errors } = useFormState({
    control,
    name,
  });
  const props = register(name, rules);

  return render({
    value,
    errors,
    onChange: (e) =>
      props.onChange({
        target: {
          name,
          value: e.target.value,
        },
      }),
    onBlur: props.onBlur,
    name: props.name,
  });
};
