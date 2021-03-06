import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "320px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
  h2: {
    padding: theme.spacing(2),
  },
  fields: {
    padding: theme.spacing(1),
  },
}));
