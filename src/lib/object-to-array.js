import entries from 'lodash/entries';
import extend from 'lodash/extend';

export default (obj, keyProp = 'key') => {
  return entries(obj).map(([ key, value ]) => extend({ [keyProp]: key }, value));
};
