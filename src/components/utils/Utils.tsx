import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core';
import * as zxcvbnCommonPackage from '@zxcvbn-ts/language-common';
import * as zxcvbnEnPackage from '@zxcvbn-ts/language-en';

const options = {
    dictionary: {
      ...zxcvbnCommonPackage.dictionary,
      ...zxcvbnEnPackage.dictionary,
    },
    graphs: zxcvbnCommonPackage.adjacencyGraphs,
    translations: zxcvbnEnPackage.translations,
}

export const CalculatePassStrength = (inputPassword:string) => {
    zxcvbnOptions.setOptions(options);
    return zxcvbn(inputPassword);
}


export const GetScoreDescription = (score:number) => {
  switch(score) {
    case 0: return "(too guessable)";
    case 1: return "(very guessable)";
    case 2: return "(somewhat guessable)";
    case 3: return "(safely unguessable)";
    case 4: return "(very unguessable)";
    default: return "(too guessable)";
  }
}
