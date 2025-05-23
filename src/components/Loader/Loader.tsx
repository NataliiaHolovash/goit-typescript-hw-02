import { Hourglass } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={style.backdrop}>
      <Hourglass
        visible={true}
        height='80'
        width='80'
        ariaLabel='hourglass-loading'
        wrapperStyle={{}}
        wrapperClass=''
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};

export default Loader;