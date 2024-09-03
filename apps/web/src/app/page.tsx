import {sum} from '@gifdi/domain';
import {type FC} from 'react';

const IndexPage: FC = () => {
  return <div>Hello World! {sum(2, 2)}</div>;
};

export default IndexPage;
