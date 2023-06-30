'use client';

import Link from 'next/link';
import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { TabRoutes } from 'components/Navbar/NavbarConstants';
// import LogoUS from 'components/Navbar/LogoUS.svg';

const Logo: React.FC = () => (
  <Typography
    noWrap
    variant="h6"
    component="div"
    sx={{ mr: 6, display: { xs: 'none', md: 'flex' } }}
  >
    <Link href={TabRoutes.mainUrl}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <LogoUS /> */}
        <Typography variant="body2" sx={{ ml: 1, fontSize: '16px' }}>
          Успіння Божої Матері
        </Typography>
      </Box>
    </Link>
  </Typography>
);

export default Logo;
