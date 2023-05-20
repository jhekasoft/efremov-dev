import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import SvgIcon from '@mui/material/SvgIcon';
import * as Icon from '../src/icon';

export default function Index() {
  return (
    <Container>
      <Box sx={{ my: 4, display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Eugene Efremov
        </Typography>
        <Avatar
          alt="Eugene Efremov"
          src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
          sx={{ width: "20rem", height: "20rem", mb: 2 }}
        />
        <Typography sx={{ mb: 4 }}>Software engineer. Kyiv, Ukraine. 🇺🇦</Typography>

        <Typography sx={{ mb: 2 }}>Technology stack:</Typography>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Chip
            icon={<SvgIcon><Icon.GolangIcon /></SvgIcon>}
            label="Go"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.TypeScriptIcon /></SvgIcon>}
            label="TypeScript"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.JavaScriptIcon /></SvgIcon>}
            label="JavaScript"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.NodeJsIcon /></SvgIcon>}
            label="Node.js"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.NestJsIcon /></SvgIcon>}
            label="NestJS"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.NextJsIcon /></SvgIcon>}
            label="Next.js"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.PostgreSqlIcon /></SvgIcon>}
            label="PostgreSQL"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.RedisIcon /></SvgIcon>}
            label="Redis"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.MqttIcon /></SvgIcon>}
            label="MQTT"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.GnuLinuxIcon /></SvgIcon>}
            label="GNU/Linux"
            sx={{ mb: 1 }}
          />
          {/* <Chip
            icon={<TelegramIcon sx={{ "&&": { color: "#49ACD7" } }} />}
            label="Go"
          /> */}
        </Box>

        <Typography sx={{ mb: 2 }}>Legacy:</Typography>
        <Box sx={{ textAlign: "center" }}>
          <Chip
            icon={<SvgIcon><Icon.ScalaIcon /></SvgIcon>}
            label="Scala"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.FlutterIcon /></SvgIcon>}
            label="Flutter"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.CIcon /></SvgIcon>}
            label="C"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.CPlusPlusIcon /></SvgIcon>}
            label="C++"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.LuaIcon /></SvgIcon>}
            label="Lua"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.PythonIcon /></SvgIcon>}
            label="Python"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.PhpIcon /></SvgIcon>}
            label="PHP"
            sx={{ mb: 1 }}
          />&nbsp;
          <Chip
            icon={<SvgIcon><Icon.JavaIcon /></SvgIcon>}
            label="Java"
            sx={{ mb: 1 }}
          />&nbsp;
        </Box>
      </Box>
    </Container>
  );
}
