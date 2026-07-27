import { useState } from 'react'
import { Grid } from '@mui/material';
import './App.css'
import SelectorUI from './SelectorUI.tsx'
import IndicatorUI from './IndicatorUI';
import useFetchData from './hooks/useFetchData';
import TableUI from './components/TableUI';
import ChartUI from './components/ChartUI';


function App() {
  // Utilice una variable de estado para almacenar la opción seleccionada por el usuario
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Comunique la opción seleccionada al hook useFetchData
  const { data, loading, error } = useFetchData(selectedOption);

  const getIndicatorDescription = (value: number | undefined, unit: string | undefined) => {
    if (loading) return 'Cargando...';
    if (error) return `Error: ${error}`;
    if (value === undefined || unit === undefined) return 'Sin datos';
    return `${value} ${unit}`;
  };

  return (
          <Grid container spacing={5} sx={{justifyContent: "left",alignItems: "center", maxWidth: 1800, margin: '0 auto', px: { xs: 2, md: 4 }}}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>Dashboard de Clima</Grid>

        

         {/* Selector */}
         <Grid size={{ xs: 12, md: 3  }}> Elemento: Selector<SelectorUI onOptionSelect={setSelectedOption} /></Grid>

         {/* Indicadores */}
         <Grid container size={{ xs: 12, md: 9 }} >

                 <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title='Temperatura (2m)'
                        description={getIndicatorDescription(data?.current.temperature_2m, data?.current_units.temperature_2m)} />
                </Grid>
                 <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title='Humedad Relativa'
                        description={getIndicatorDescription(data?.current.relative_humidity_2m, data?.current_units.relative_humidity_2m)} />
                </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title='Temperatura Aparente'
                        description={getIndicatorDescription(data?.current.apparent_temperature, data?.current_units.apparent_temperature)} />
                </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                    <IndicatorUI
                        title='Velocidad del viento (10m)'
                        description={getIndicatorDescription(data?.current.wind_speed_10m, data?.current_units.wind_speed_10m)} />
                </Grid>

             </Grid>

         {/* Gráfico y tabla */}
         <Grid container spacing={3} size={{ xs: 12, md: 12 }}>
           <Grid size={{ xs: 12, md: 7 }}>
             <ChartUI selectedOption={selectedOption} />
           </Grid>
           <Grid size={{ xs: 12, md: 5 }}>
             <TableUI selectedOption={selectedOption} />
           </Grid>
         </Grid>

         {/* Información adicional */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Información adicional</Grid>

      </Grid>
    );
  
}

export default App
