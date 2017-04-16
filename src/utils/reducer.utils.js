import {schema, normalize} from 'normalizr';
/**
 * Normalize Array.
 * Input:
 *    [ { id: '123', name: 'Jim' }, { id: '456', name: 'Jane' } ]
 * Outputs:
 *    {
 *      '123': { id: '123', name: 'Jim' },
 *      '456': { id: '456', name: 'Jane' }
 *    }
 *
 * @param arr Array to normalize
 * @returns {*} Normalized array
 */
export const normalizeArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Argument is not an Array');
  }
  const valueSchema = new schema.Entity('values');
  const valueListSchema = new schema.Array(valueSchema);
  const normalized = normalize(arr, valueListSchema);
  return normalized.entities['values'];
};


export const queryByAttributes = (list, query, attributes) => {
  const lowerQuery = query.toLowerCase();
  const comparisonFcn = (x) => x && x.toLowerCase().indexOf(lowerQuery) > -1;

  // filter the list
  return list.filter((item) =>
    // by checking if any of their attributes contains the query
    attributes.some((attribute) => {
      if (Array.isArray(item[attribute])) {
        return item[attribute].filter(comparisonFcn).length > 0;
      } else {
        return comparisonFcn(item[attribute]);
      }
    })
  );
};
