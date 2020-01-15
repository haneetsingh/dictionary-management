export default function validateInput(values) {
  let errors = {};
  const { domain, range } = values;

  if (!domain) {
    errors.domain = "Domain is required";
  }

  if (!range) {
    errors.range = "Range is required";
  }

  if (range === domain) {
    errors.range = "Range can not be same as Domain";
  }

  return errors;
}