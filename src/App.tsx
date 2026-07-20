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
  const dataFetcherOutput = useFetchData(selectedOption);

  return (
          <Grid container spacing={5} sx={{justifyContent: "left",alignItems: "center", maxWidth: 1800, margin: '0 auto', px: { xs: 2, md: 4 }}}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>Dashboard de Clima</Grid>

        

         {/* Selector */}
         <Grid size={{ xs: 12, md: 3  }}> Elemento: Selector<SelectorUI onOptionSelect={setSelectedOption} /></Grid>

         {/* Indicadores */}
         <Grid container size={{ xs: 12, md: 9 }} >

                 <Grid size={{ xs: 12, md: 3 }}>
                    {dataFetcherOutput &&
                        (<IndicatorUI
                            title='Temperatura (2m)'
                            description={ `${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}` } />)
                    }
                </Grid>
                 <Grid size={{ xs: 12, md: 3 }}>
                    {dataFetcherOutput &&
                        (<IndicatorUI
                            title='Humedad Relativa'
                            description={ `${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}` } />)
                    }
                </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                    {dataFetcherOutput &&
                        (<IndicatorUI
                            title='Temperatura Aparente'
                            description={ `${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}` } />)
                    }
                </Grid>

                 <Grid size={{ xs: 12, md: 3 }}>
                    {dataFetcherOutput &&
                        (<IndicatorUI
                            title='Velocidad del viento (10m)'
                            description={ `${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}` } />)
                    }
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
