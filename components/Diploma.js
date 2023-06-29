import { Box, Link, Typography, useMediaQuery, useTheme } from '@mui/material';

import MintBadge from './MintBadge';
import { useTranslations } from 'next-intl';

export default function Diploma() {
  const t = useTranslations('Diploma');
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box
      justifyContent="center"
      display="flex"
      sx={{
        background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
        borderRadius: '18px',
      }}
    >
      <Box
        sx={{
          background: theme?.palette?.mode === 'dark' ? '#010101' : '#fff',
          borderRadius: '18px',
          paddingBottom: '20px',
        }}
      >
        <Box sx={{ borderRadius: '18px' }}>
          <h1
            style={{
              fontSize: { md: '36px', sm: '36px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 700,
              textAlign: 'center',
            }}
          >
            {t('title')}
          </h1>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
            }}
          >
            {t('content-1')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            {t('content-2')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            {t('content-3')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
            }}
          >
            {t('content-4')}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginBottom: '30px',
            }}
          >
            {t('content-5')}
          </Typography>
        </Box>
        <Box
          sx={{
            height: '218px',
            background: '#F6F6F6',
            borderRadius: '18px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >

          <Link target="_blank" href="https://faucet.paradigm.xyz/">
            <Box
              component={'h2'}
              sx={{
                fontSize: { xs: "32px", sm: '48px' },
                // fontFamily: 'Open Sans',
                fontWeight: 800,
              }}
            >
              OP testnet
            </Box>
          </Link>
          <Typography
            sx={{
              fontSize: "12px",
              fontStyle: 'ExtraBold',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#777777',
              fontWeight: 400,
            }}
          >
            click here
          </Typography>

        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginTop: '30px',
              marginBottom: '10px',
            }}
          >
            {t('content-6')}
          </Typography>
        </Box>
        <MintBadge />

        <Box sx={{ display: 'flex', justifyContent: 'start' }}>
          <Typography
            sx={{
              fontSize: { md: '20px', sm: '20px' },
              fontStyle: 'ExtraBold',
              // fontFamily: 'Open Sans',
              color: theme.palette?.mode === 'dark' ? '#fff' : '#000',
              fontWeight: 400,
              marginTop: '30px',
            }}
          >
            {t('content-7')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
