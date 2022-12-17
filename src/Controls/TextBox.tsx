import { TextField } from '@fluentui/react';
import { useField, useFormikContext } from 'formik';
import { useCallback, useMemo } from 'react';
import { IForm } from '../Models/IForm';

const TextBox = (props: any) => {
  const { name } = props;
  const { setFieldValue, touched, errors } = useFormikContext<IForm>();
  const [field, meta] = useField(name);

  const error = useMemo(() => {
    return meta && meta.touched && meta.error;
  }, [meta]);

  const handleChange = useCallback(
    (
      event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
      newValue?: string
    ) => {
      setFieldValue(name, newValue);
    },
    [name]
  );

  const config = {
    ...field,
    ...props,
    onChange: handleChange,
  };

  return <TextField {...config} errorMessage={touched.name && errors.name} />;
};

export default TextBox;