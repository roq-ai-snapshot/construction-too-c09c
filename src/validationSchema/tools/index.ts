import * as yup from 'yup';

export const toolValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
  supplier_id: yup.string().nullable().required(),
});
