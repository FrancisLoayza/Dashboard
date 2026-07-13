import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Grid } from '@mui/material';
import './App.css'
import SelectorUI from './SelectorUI.tsx'
import IndicatorUI from './IndicatorUI';
import useFetchData from './hooks/useFetchData';

function App() {
  const [count, setCount] = useState(0)
  const dataFetcherOutput = useFetchData();

  return (
          <Grid container spacing={5} sx={{justifyContent: "left",alignItems: "center"}}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>Dashboard de Clima</Grid>

        

         {/* Selector */}
         <Grid size={{ xs: 12, md: 3  }}> Elemento: Selector<SelectorUI></SelectorUI></Grid>

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

         {/* Gráfico */}
         <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>

         {/* Tabla */}
         <Grid>Elemento: Tabla</Grid>

         {/* Información adicional */}
         <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Información adicional</Grid>

      </Grid>
    );
  
}

export default App
