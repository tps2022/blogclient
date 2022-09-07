import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(5),
  },
  chooseFile: {
    width: "95%",
    margin: "10px 0",
  },
  publishButton: {
    marginBottom: 10,
    backgroundColor: "#F43296",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));