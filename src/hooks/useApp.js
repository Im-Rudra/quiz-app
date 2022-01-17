import { useContext } from 'react';
import { AppDataContext } from '../context/AppProvier';

const useApp = () => useContext(AppDataContext);

export default useApp;
