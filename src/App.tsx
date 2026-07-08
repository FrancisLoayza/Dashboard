import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Grid } from '@mui/material';
import './App.css'
import SelectorUI from './SelectorUI.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
          <Grid container spacing={5} sx={{justifyContent: "left",alignItems: "center"}}>

         {/* Encabezado */}
         <Grid size={{ xs: 12, md: 12 }}>Elemento: Encabezado</Grid>

         {/* Alertas */}
         <Grid>Elemento: Alertas</Grid>

         {/* Selector */}
         <Grid size={{ xs: 12, md: 3  }}> Elemento: Selector<SelectorUI></SelectorUI></Grid>

         {/* Indicadores */}
         <Grid size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>

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
