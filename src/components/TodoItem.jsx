import { Button, Card, CardContent, Typography } from "@mui/material";

const TodoItem = (props) => {
  console.log(props, ":eachItem");
  const {fetchCurrentTodoDetails}= props;
  console.log(props.eachItem)
  return (
    <div className="todoItem">
      <Card
        sx={{
          minWidth: 275,
          textAlign: "start",
          padding: 5,
          margin: 3,
          border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.eachItem.todo}
          </Typography>
        </CardContent>
        <Button
        onClick={()=>fetchCurrentTodoDetails(props.eachItem.id)}
          sx={{
            minWidth: 100,
            margin: 1,
            padding:2,
            "&:hover": {
              backgroundColor: "lightblue",
              boxShadow: "none",
            },
            backgroundColor: "darkblue",
            height: "40px",
            color:"white",
            fontWeight:800,
          }}
          color="primary"
        >
          Details
        </Button>
      </Card>
    </div>
  );
};

export default TodoItem;
