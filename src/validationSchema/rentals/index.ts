import * as yup from 'yup';

export const rentalValidationSchema = yup.object().shape({
  rental_date: yup.date().required(),
  return_date: yup.date().nullable(),
  total_price: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  tool_id: yup.string().nullable().required(),
  outlet_id: yup.string().nullable().required(),
});
