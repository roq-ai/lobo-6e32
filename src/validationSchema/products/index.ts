import * as yup from 'yup';

export const productValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  image: yup.string(),
  price: yup.number().integer().required(),
  country: yup.string().required(),
  organization_id: yup.string().nullable(),
});
