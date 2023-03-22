import styles from "@/styles/Home.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.wrapp}>
      <Box
        sx={{
          padding: { xs: "0 30px", sm: "0 50px", md: "0 70px" },
          height: 600,
          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="content">
          <Typography variant="h4" sx={{ letterSpacing: "2px" }}>
            Let' track
          </Typography>
          <Typography
            variant="caption"
            sx={{
              position: "relative",
              right: "0",
            
              letterSpacing: "2px",
            }}
          >
            Exercise is a celebration of what your body can do!
          </Typography>
        </div>
      </Box>
      {/* <Image className={styles.bgimg} src={imgHome} alt={'Home image'} /> */}
      {/* <Main /> */}
    </div>
  );
}
