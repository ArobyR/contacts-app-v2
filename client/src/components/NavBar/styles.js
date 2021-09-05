import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row", 
    justifyContent: "center"
  },
  title: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1)
  }
}));
