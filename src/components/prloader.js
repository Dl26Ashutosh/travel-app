import { Preloader, TailSpin } from 'react-preloader-icon';
 
const PreloaderEx = () => (
  <Preloader
  use={TailSpin}
    size={220}
    strokeWidth={10}
    strokeColor="#262626"
    duration={2000}
  /> 
);
export default PreloaderEx;