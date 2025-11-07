import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const useapps = () => {
    const [allapps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>{
        setLoading(true);
      axios('../appData.json') 
      .then(data=>setApps(data.data))
        .catch(err=> setError(err))
        .finally(()=> setLoading(false));

    },[] )
    return [allapps, loading, error ];
}
export default useapps; 