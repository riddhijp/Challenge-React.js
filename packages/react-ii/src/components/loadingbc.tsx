import { Backdrop, CircularProgress } from '@mui/material';

const Loadingbc: React.FC = (loading) => {
  return (
    <div>
      <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Loadingbc;