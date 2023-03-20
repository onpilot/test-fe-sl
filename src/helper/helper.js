import { supportedCurrencies } from '../data/data';

export const filterSymbols = (data = {}) => {
  const filtered = {};
  supportedCurrencies.forEach((e) => {
    if (data[e]) filtered[e] = data[e];
  });
  return filtered;
};

export const otherFunction = () => {
  //
};
