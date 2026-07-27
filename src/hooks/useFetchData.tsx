import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';


const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  Quito: { latitude: -0.1807, longitude: -78.4678 },
  Guayaquil: { latitude: -2.1894, longitude: -79.8894 },
  Cuenca: { latitude: -2.9001, longitude: -79.0059 },
  Manta: { latitude: -0.9621, longitude: -80.7127 },
};

interface UseFetchDataResult {
    data?: OpenMeteoResponse;
    loading: boolean;
    error: string;
}

export default function useFetchData(selectedOption: string | null): UseFetchDataResult {
    const [data, setData] = useState<OpenMeteoResponse | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const normalizedOption = selectedOption
            ? selectedOption.charAt(0).toUpperCase() + selectedOption.slice(1).toLowerCase()
            : 'Guayaquil';

        const cityConfig = CITY_COORDS[normalizedOption] ?? CITY_COORDS['Guayaquil'];
        const URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`;

        const fetchData = async () => {
            setLoading(true);
            setError('');

            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const jsonData: OpenMeteoResponse = await response.json();
                setData(jsonData);
            } catch (fetchError) {
                console.error('Error fetching weather data:', fetchError);
                setError(fetchError instanceof Error ? fetchError.message : String(fetchError));
                setData(undefined);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedOption]);

    return { data, loading, error };
}
