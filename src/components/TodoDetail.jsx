import { Button, DialogActions, Dialog, DialogTitle, DialogContent } from '@mui/material';

const TodoDetail = ({ openDailog, eachTodoDetails, setOpenDailog }) => {
  console.log(eachTodoDetails, ":eachTodoDetails");
  console.log(openDailog, ":openDailog");
  console.log(setOpenDailog, ":setOpenDailog");

  return (
    <div className='todoDetial'>
      <Dialog onClose={() => setOpenDailog(false)} open={openDailog}>
        <DialogTitle>Todo Detail</DialogTitle>
        <DialogContent>
          {eachTodoDetails ? (
            <div>
              <p>ID: {eachTodoDetails.id}</p>
              <p>Todo: {eachTodoDetails.todo}</p>
              <p>Completed: {eachTodoDetails.completed ? "Yes" : "No"}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDailog(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoDetail;