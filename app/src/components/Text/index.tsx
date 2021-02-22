import React from 'react';

import { TextMensager} from './styles';

interface IQuest {
  mensager: string;
}

const Text: React.FC<IQuest> = ({ mensager }) => (
  <TextMensager>{mensager}</TextMensager>
);

export default Text;
